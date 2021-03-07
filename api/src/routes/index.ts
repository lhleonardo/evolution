import { Router } from "express";
import { patientsRouter } from "./patients.routes";

const routes = Router();

routes.use("/patients", patientsRouter)

routes.get("/", (req, res) => {
  return res.status(200).send("Hello!");
})

export { routes }