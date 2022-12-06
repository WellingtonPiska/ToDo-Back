import 'reflect-metadata';
import { FakeContactType } from '../../../shared/database/fake/FakeContactType';
import ContactType from '../../contactType/entities/ContactType';
import ContactTypeRepository from '../../contactType/repository/ContactTypeRepository';
import StatusRepository from '../../status/repository/StatusRepository';

export class ServicePopulate {
  async execute(): Promise<string> {
    const repoStatus = new StatusRepository();
    const status = await repoStatus.findByRef('A');
    if (!status) {
      return 'Status não encontrado';
    }

    // Contact Type
    const repoCT = new ContactTypeRepository();
    FakeContactType.forEach(async ct => {
      const add = new ContactType();
      add.name = ct.name;
      add.status = status.id;
      await repoCT.create(add);
    });
    // for (const ct of FakeContactType) {
    // }
    return 'OK';
  }
}
