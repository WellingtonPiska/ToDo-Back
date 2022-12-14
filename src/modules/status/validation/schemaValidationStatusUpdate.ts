import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import StatusRepository from '../repository/StatusRepository';
import schemaBodyStatus from './schemaBodyStatus';

const schemaValidationStatusUpdate = yup.object().shape({
  body: schemaBodyStatus,
  params: yup.object({
    id: yup
      .string()
      .matches(regexUuidV4, 'ID inválido')
      .test('id', 'Status não cadastrado', async (value: any) => {
        const repo = new StatusRepository();
        const data = await repo.findById(value);
        if (data) {
          return true;
        }
        return false;
      }),
  }),
});

export default schemaValidationStatusUpdate;
