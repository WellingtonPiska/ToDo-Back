import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import ContactType from '../entities/ContactType';
import ContactTypeRepository from '../repository/ContactTypeRepository';

type ICreateContactType = {
  name: string;
};

export class ServiceCreateContactType {
  async execute({ name }: ICreateContactType): Promise<ContactType> {
    const repo = new ContactTypeRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const contactTypeValid = await repo.findByName(name);

    if (contactTypeValid) {
      throw new Error('ContactType já existe');
    }

    const cty = new ContactType();
    cty.name = name;

    cty.status = statusRef.id;

    const obj = await repo.create(cty);

    return obj;
  }
}
