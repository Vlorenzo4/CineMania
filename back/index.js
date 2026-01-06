const { app } = require("./src/server");
const { dbCon } = require("./src/config/dbConfig");

const startServer = async () => {
  try {
    await dbCon();
    app.listen(3000, () => {
      console.log("Server andando en puerto 3000");
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();
