import express from "express";
import path from "path";

export default (app: express.Express) => {
  app.use(
    '/api/v1/files',
    express.static(path.resolve(__dirname, '..', '..', '..', '..','..', 'storage/uploads'))
  );
}