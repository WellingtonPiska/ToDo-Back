import { EntityManager, Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import CompanyContact from '../../companyContact/entities/CompanyContact';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Company from '../entities/Company';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
  search?: string;
};

type IResponseCompany = {
  per_page: number;
  total: number;
  current_page: number;
  data: Company[];
};

export default class CompanyRepository {
  private repo: Repository<Company>;

  constructor() {
    this.repo = dataSource.getRepository(Company);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
    search,
  }: ISearchParams): Promise<IResponseCompany> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    const [company, count] = await this.repo
      .createQueryBuilder('company')
      .skip(skip)
      .take(take)
      .where(qb => {
        if (search !== undefined) {
          qb.where(
            `company.com_status_s = :ref and company.com_name_s like :search`,
            { ref: status.id, search: `%${search}%` }
          );
        } else {
          qb.where(`company.com_status_s = :ref `, { ref: status.id });
        }
      })
      .orderBy('company.com_fantasy_s')
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: company,
    };

    return result;
  }

  public async findById(id: string): Promise<Company | null> {
    const data = await this.repo.find({
      where: {
        id,
      },
      relations: ['contacts', 'contacts.contactTypeRef'],
    });
    if (data.length > 0) {
      return data[0];
    }
    return null;
  }

  public async findByName(name: string): Promise<Company | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Company | null> {
    const data = await this.repo
      .createQueryBuilder('company')
      .where('company.com_id_s <> :id and company.com_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(
    company: Company,
    contactsCompany: CompanyContact[] | null
  ): Promise<Company> {
    const obj = await dataSource.manager.transaction(
      async (transactionalEntityManager: EntityManager) => {
        const obj = await transactionalEntityManager.save<Company>(company);
        if (contactsCompany && contactsCompany.length > 0) {
          // eslint-disable-next-line no-restricted-syntax
          for await (const contactCompany of contactsCompany) {
            contactCompany.company = obj.id;
            obj.contacts = [];
            obj.contacts.push(
              await transactionalEntityManager.save<CompanyContact>(
                contactCompany
              )
            );
          }
        }

        return obj;
      }
    );
    return obj;
  }

  public async update(company: Company): Promise<Company> {
    await this.repo.save(company);
    return company;
  }

  public async remove(company: Company): Promise<void> {
    await this.repo.remove(company);
  }
}
