import { Server } from "./server";

const { application } = new Server();

application.listen(3000, () => console.log("Servidor iniciado"));
