import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyMenu = yup.object().shape({
  name: yup.string().required('Name is required'),
  uri: yup.string().required('uri is required'),
  icon: yup.string().required('icon is required'),
  order: yup.number().required('order is required'),
  groupMenu: yup
    .string()
    .required('Id groupMenu is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyMenu;
