import { Router } from "express";
import * as LocationControllers from "../controllers/location.js";
import checkAuthenticatedUser from "../middlewares/checkAuthenticatedUser.js";

const locationRoute = Router();

locationRoute.get(
  "/",
  checkAuthenticatedUser,
  LocationControllers.getUserLocations
);

locationRoute.post(
  "/",
  checkAuthenticatedUser,
  LocationControllers.createLocation
);

export default locationRoute;
