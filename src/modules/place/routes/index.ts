import { Router } from "express";
import ensureValidationYupRequest from "../../../shared/middleware/validationRequest";
import PlaceController from "../controller/PlaceController";
import schemaValidationPlaceCreate from "../validation/schemaValidationCreate";
import schemaValidationPlaceDelete from "../validation/schemaValidationDelete";
import schemaValidationPlaceFind from "../validation/schemaValidationFind";
import schemaValidationPlaceUpdate from "../validation/schemaValidationUpdate";

const placeController = new PlaceController();
const routerPlace = Router();

routerPlace.get('/', placeController.list);
routerPlace.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationPlaceFind),
  placeController.find
);
routerPlace.post(
  '/',
  ensureValidationYupRequest(schemaValidationPlaceCreate),
  placeController.create
);
routerPlace.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationPlaceDelete),
  placeController.delete
);

routerPlace.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationPlaceUpdate),
  placeController.update
);



export default routerPlace;
