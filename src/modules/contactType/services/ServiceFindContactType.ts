import ContactTypeRepository from "../repository/ContactTypeRepository";

interface IFindContactType {
  id: string;
}

export class ServiceFindContactType {
  async execute({ id }: IFindContactType) {
    const repo = new ContactTypeRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('ContactType não encontrado')
    }
    return data;
  }
}
