import { Router } from 'express';
import multer from 'multer';

import MulterController from '../controller/MulterController';

const routerMulter = Router();

const upload = multer({
  dest: './tmp',
});

const multerController = new MulterController();

routerMulter.post('/', multerController.import);

routerMulter.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { routerMulter };
