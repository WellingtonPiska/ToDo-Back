import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import ContactType from "../entities/ContactType";
import ContactTypeRepository from "../repository/ContactTypeRepository";

interface ICreateContactType {
  name: string;
  status: string;
}

export class ServiceCreateContactType {
  async execute({ name, status, }: ICreateContactType): Promise<ContactType> {
    const repo = new ContactTypeRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

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
