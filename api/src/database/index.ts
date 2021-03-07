import { createConnection } from "typeorm";

createConnection({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "evolution",
});
