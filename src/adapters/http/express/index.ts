import express from 'express';

import env from "../../../config/env";
import {MongoHelper} from "../../db/mongoose/helpers";


import setupRoutes from "./config/setup-routes";
import setupMiddlewares from "./config/setup-middlewares";
import setupStaticFiles from "./config/setup-static-files";

const app = express();
const PORT = process.env.PORT || 5050;

setupMiddlewares(app);
setupStaticFiles(app);
setupRoutes(app);

MongoHelper.connect(env.mongo_uri).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  })
})


