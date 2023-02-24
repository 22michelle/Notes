import noteCtrl from "../controllers/note.controller.js";
import { noteValid } from "../validSchema/noteValid.js";

export const postRoutes = (fastify, opts, done) => {
  fastify.get("/", noteCtrl.listAll);
  fastify.get("/:id", noteCtrl.listById);
  fastify.delete("/:id", noteCtrl.delete);
  fastify.put("/:id", noteCtrl.update);
  fastify.post("/", { schema: noteValid }, noteCtrl.create);
  done();
};
