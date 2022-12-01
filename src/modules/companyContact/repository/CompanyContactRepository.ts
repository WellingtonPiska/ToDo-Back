import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import CompanyContact from '../entities/CompanyContact';

interface ISearchParams {
  company: string;
  page: number;
  skip: number;
  take: number;
  search?: string;
}

interface IResponseCompanyContact {
  per_page: number;
  total: number;
  current_page: number;
  data: CompanyContact[];
}

interface ICreateCompany {
  name: string;
  contactType: string;
  mail: string;
  phone: string;
  mobile: string;
  company: string;
}

export default class CompanyContactRepository {
  private repo: Repository<CompanyContact>;

  constructor() {
    this.repo = dataSource.getRepository(CompanyContact);
  }

  public async findAll({
    company,
    page,
    skip,
    take,
    search,
  }: ISearchParams): Promise<IResponseCompanyContact> {
    const [companyContact, count] = await this.repo
      .createQueryBuilder('company_contact')
      .skip(skip)
      .take(take)
      .where(function (qb) {
        if (search !== undefined) {
          qb.where(
            'company_contact.cco_company_s = :company and company_contact.cco_name_s like :search',
            {
              company,
              search: `%${search}%`,
            }
          );
        } else {
          qb.where('company_contact.cco_company_s = :company', {
            company,
          });
        }
      })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: companyContact,
    };
    return result;
  }

  public async findById(
    company: string,
    id: string
  ): Promise<CompanyContact | null> {
    const data = await this.repo.findOneBy({
      company,
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<CompanyContact | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<CompanyContact | null> {
    const data = await this.repo
      .createQueryBuilder('company_contact')
      .where('company_contact.cco_id_s <> :id and company_contact.cco_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(company_contact: CompanyContact): Promise<CompanyContact> {
    const data = this.repo.save(company_contact);
    return data;
  }

  public async update(company_contact: CompanyContact): Promise<CompanyContact> {
    await this.repo.save(company_contact);
    return company_contact;
  }

  public async remove(company_contact: CompanyContact): Promise<void> {
    await this.repo.remove(company_contact);
  }
}
