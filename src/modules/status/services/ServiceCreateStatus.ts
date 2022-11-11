import { prisma } from '../../../database/prismaClient';

interface ICreateStatus {
  name: string;
  reference: string;
  color: string;
}

export class ServiceCreateStatus {
  async execute({ name, reference, color }: ICreateStatus) {
    const statusAlreadyExists = await prisma.status.findFirst({
      where: {
        OR: [{ AND: { name } }, { AND: { reference } }, { AND: { color } }],
      },
    });

    if (statusAlreadyExists) {
      throw new Error('Status already exists');
    }

    // Salvar o deliveryman
    const status = await prisma.status.create({
      data: {
        name,
        reference,
        color,
      },
    });

    return status;
  }
}
