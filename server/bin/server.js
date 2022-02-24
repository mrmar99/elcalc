import app from "../app.js";
import sequelize from "../db.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      app().listen(PORT, () => {
          console.log(`Server was started on port: ${PORT}`);
      });
  } catch (e) {
      console.log(e);
  }
};

start();
