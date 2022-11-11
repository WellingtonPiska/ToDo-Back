import { prisma } from '../../../database/prismaClient';

interface IFindStatus {
  id: string;
}

export class ServiceFindStatus {
  async execute({ id }: IFindStatus) {
    const status = await prisma.status.findFirst({
      where: {
        OR: [{ AND: { id } }, { AND: { reference: id } }],
      },
    });

    if (status === null) {
      throw new Error('Status not found');
    }

    return status;
  }
}
