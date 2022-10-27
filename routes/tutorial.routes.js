import express from "express";
import controllers from '../controllers/tutorial.controller.js'

const router = express.Router();

router
  .route("/")
  .get(controllers.findAll)
  .post(controllers.create)
  .delete(controllers.deleteAll);
router
  .route("/:id")
  .get(controllers.findOne)
  .put(controllers.updateById)
  .delete(controllers.deleteById);
router.get("/published", controllers.findAllPublished);

export default router;
