import User from "../entities/User";
import UserRepository from "../repository/UserRepository";

interface IFindUser {
  id: string;
}

export class ServiceFindUser {
  async execute({ id }: IFindUser): Promise<User> {
    const repo = new UserRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('User não encontrado')
    }
    return data;
  }
}
