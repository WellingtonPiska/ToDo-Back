import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyCompanyContact = yup.object().shape({
  name: yup.string().required('name is required'),
  phone: yup.string().required('phone is required'),
  mobile: yup.string().required('mobile is required'),
  mail: yup.string().required('mail is required'),
  contactType: yup
    .string()
    .required('Id ContactType is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyCompanyContact;
