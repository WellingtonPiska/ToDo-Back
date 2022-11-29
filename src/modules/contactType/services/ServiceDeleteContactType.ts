
import ContactTypeRepository from "../repository/ContactTypeRepository";
import { ServiceFindContactType } from "./ServiceFindContactType";

interface IDeleteContactType {
  id: string;
}

export class ServiceDeleteContactType {
  async execute({ id }: IDeleteContactType): Promise<Boolean> {
    const repo = new ContactTypeRepository();
    const serviceFindContactType = new ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({ id });
    await repo.remove(contactType);
    return true;
  }
}
