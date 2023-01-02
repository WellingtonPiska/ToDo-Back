import * as yup from 'yup';

const schemaBodyEditCostCenterStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditCostCenterStatus;
