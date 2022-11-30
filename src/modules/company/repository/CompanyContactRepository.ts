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

// interface ICreateCompany {
//   name: string;
//   status: string;
//   fantasy: string;
//   type: string;
//   inscription: string;
//   zipCode?: string;
//   complement?: string;
//   number?: string;
//   district?: string;
//   city?: string;
//   state?: string;
// }

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

  // public async findByName(name: string): Promise<Company | null> {
  //   const data = await this.repo.findOneBy({
  //     name,
  //   });
  //   return data;
  // }

  // public async findValidUpdate(
  //   id: string,
  //   name: string
  // ): Promise<Company | null> {
  //   const data = await this.repo
  //     .createQueryBuilder('company')
  //     .where('company.com_id_s <> :id and company.com_name_s = :name', {
  //       id,
  //       name,
  //     })
  //     .getOne();

  //   return data;
  // }

  // public async create(company: Company): Promise<Company> {
  //   const data = this.repo.save(company);
  //   return data;
  // }

  // public async update(company: Company): Promise<Company> {
  //   await this.repo.save(company);
  //   return company;
  // }

  // public async remove(company: Company): Promise<void> {
  //   await this.repo.remove(company);
  // }
}
