import { Request } from 'express';
import mime from 'mime-types';
import multer from 'multer';

export const uploadAvatar = multer({
  storage: multer.diskStorage({
    destination(req: Request, file: Express.Multer.File, cb) {
      cb(null, './public/avatar/');
    },

    filename(req: Request, file: Express.Multer.File, cb) {
      const type = mime.extension(file.mimetype);
      cb(null, `${new Date().getTime()}.${type}`);
    },
  }),
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    cb(null, true);
    if (
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Image uploaded is not of type jpg/jpeg or png'));
    }
  },
});
