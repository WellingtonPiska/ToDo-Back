import * as yup from 'yup';

const schemaParamUF = yup.object({
  uf: yup
    .string()
    .required('UF is required')
    .length(2, 'UF requer 2 caracteres'),
});

export default schemaParamUF;
