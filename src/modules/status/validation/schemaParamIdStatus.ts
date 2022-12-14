import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import StatusRepository from '../repository/StatusRepository';

const schemaParamIdStatus = yup.object({
  id: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID')
    .test('id', 'Status não cadastrado', async (value: any) => {
      const repo = new StatusRepository();
      const data = await repo.findById(value);
      if (data) {
        return true;
      }
      return false;
    }),
});

export default schemaParamIdStatus;
