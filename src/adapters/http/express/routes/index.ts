import {Router} from "express";
import multerConfig from '../../../../config/multer'
import multer from 'multer';

export default (router: Router) => {
  router.post('/files', (req, res) => {
    console.log(req);
  })
}