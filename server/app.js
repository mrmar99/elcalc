import Express from 'express';
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middlewares/ErrorHandlingMiddleware.js";
import path from "path";

export default () => {
   const app = new Express();
   app.use(cors());
   app.use(Express.json());
   app.use(Express.static(path.resolve("public/tasks-images")));
   app.use(Express.static(path.resolve("public/tasks-svgs")));

   app.use('/api', router);

   // Обработчик ошибок
   app.use(errorHandler);
   return app;
};