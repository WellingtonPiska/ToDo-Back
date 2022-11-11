import { prisma } from '../../../database/prismaClient';

interface IDeleteStatus {
  id: string;
}

export class ServiceDeleteStatus {
  async execute({ id }: IDeleteStatus) {
    const statusExists = await prisma.status.findFirst({
      where: {
        id,
      },
    });

    if (statusExists === null) {
      throw new Error('Status not found');
    }
    const deleteStatus = await prisma.status.delete({
      where: {
        id,
      },
    });
    return deleteStatus;
  }
}
