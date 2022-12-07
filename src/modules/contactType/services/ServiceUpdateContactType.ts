import ContactType from '../entities/ContactType';
import ContactTypeRepository from '../repository/ContactTypeRepository';
import { ServiceFindContactType } from './ServiceFindContactType';

type IUpdateContactType = {
  id: string;
  name: string;
};

export class ServiceUpdateContactType {
  async execute({ id, name }: IUpdateContactType): Promise<ContactType> {
    const repo = new ContactTypeRepository();

    const serviceFindContactType = new ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({ id });

    const contactTypeValid = await repo.findValidUpdate(id, name);

    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }

    contactType.name = name;
    await repo.update(contactType);
    return contactType;
  }
}
