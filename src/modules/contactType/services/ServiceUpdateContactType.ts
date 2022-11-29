import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import ContactType from "../entities/ContactType";
import ContactTypeRepository from "../repository/ContactTypeRepository";
import { ServiceFindContactType } from "./ServiceFindContactType";

interface IUpdateContactType {
  id: string;
  name: string;
  status: string;
}

export class ServiceUpdateContactType {
  async execute({ id, name, status }: IUpdateContactType): Promise<ContactType> {
    const repo = new ContactTypeRepository();

    const serviceFindContactType = new ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const contactTypeValid = await repo.findValidUpdate(id, name);

    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }

    contactType.name = name;
    contactType.status = statusRef.id;
    await repo.update(contactType);
    return contactType;
  }
}

