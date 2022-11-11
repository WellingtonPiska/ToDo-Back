import * as yup from 'yup';
import regexUuidV4 from '../../../utils/regexUuidV4';

const schemaParamIdStatus = yup.object({
	id: yup.string().required("Id is required")
		.matches(
			regexUuidV4,
			"Invalid UUID"
		),
});



export default schemaParamIdStatus;