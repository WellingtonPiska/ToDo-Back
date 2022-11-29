import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import ContactType from '../entities/ContactType';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
  ref: string;
}

interface IResponseContactType {
  per_page: number;
  total: number;
  current_page: number;
  data: ContactType[];
}

interface ICreateContactType {
  name: string;
  status: string;
}

export default class ContactTypeRepository {
  private repo: Repository<ContactType>;

  constructor() {
    this.repo = dataSource.getRepository(ContactType);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseContactType> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [contactType, count] = await this.repo
      .createQueryBuilder('contact_type')
      .skip(skip)
      .take(take)
      .where('contact_type.cty_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: contactType,
    };

    return result;
  }

  public async findById(id: string): Promise<ContactType | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<ContactType | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string,
  ): Promise<ContactType | null> {
    const data = await this.repo
      .createQueryBuilder('contact_type')
      .where(
        'contact_type.cty_id_s <> :id and contact_type.cty_name_s = :name',
        {
          id,
          name,
        }
      )
      .getOne();

    return data;
  }

  public async create(contact_type: ContactType): Promise<ContactType> {
    const data = this.repo.save(contact_type);
    return data;
  }

  public async update(contact_type: ContactType): Promise<ContactType> {
    await this.repo.save(contact_type);
    return contact_type;
  }

  public async remove(contact_type: ContactType): Promise<void> {
    await this.repo.remove(contact_type);
  }
}
