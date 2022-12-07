import * as yup from 'yup';

const schemaParamZipCode = yup.object({
  cep: yup
    .string()
    .required('CEP is required')
    .length(8, 'CEP requer 8 caracteres'),
});

export default schemaParamZipCode;
