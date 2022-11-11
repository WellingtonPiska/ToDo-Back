import { prisma } from '../../../database/prismaClient';

interface IUpdateStatus {
  id: string;
  name: string;
  reference: string;
  color: string;
}

export class ServiceUpdateStatus {
  async execute({ id, name, reference, color }: IUpdateStatus) {
    //Verificar se existe algum status com nome ou referencia ou cor igual
    const statusAlreadyExists = await prisma.status.findFirst({
      where: {
        OR: [{ AND: { name } }, { AND: { reference } }, { AND: { color } }],
        AND: {
          id: {
            not: id,
          },
        },
      },
    });

    if (statusAlreadyExists) {
      throw new Error('Status already exists');
    }

    const statusExists = await prisma.status.findFirst({
      where: {
        id,
      },
    });

    if (statusExists === null) {
      throw new Error('Status not found');
    }

    const status = await prisma.status.update({
      where: {
        id,
      },
      data: {
        name,
        reference,
        color,
      },
    });

    return status;
  }
}
