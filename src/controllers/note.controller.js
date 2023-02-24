import { response } from "../helpers/Response.js";
import { noteModel } from "../models/note.model.js";

const noteCtrl = {};

noteCtrl.create = async (req, reply) => {
  try {
    const data = await noteModel.create(req.body);
    response(reply, 201, true, data, "Note creado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.listAll = async (req, reply) => {
  try {
    const data = await noteModel.find();
    response(reply, 200, true, data, "Lista de notes");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.listById = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await noteModel.findById(id);
    if (!data) {
      return response(reply, 404, false, "", "Registro no encontrado");
    }
    response(reply, 200, true, data, "Registro encontrado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await noteModel.findById(id);
    if (!data) {
      return response(reply, 404, false, "", "Registro no encontrado");
    }

    await data.deleteOne();
    response(reply, 200, true, data, "Note eliminado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

noteCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;
    const data = await noteModel.findById(id);
    if (!data) {
      return response(reply, 404, false, "", "Registro no encontrado");
    }

    await data.updateOne(req.body);
    response(reply, 200, true, data, "Note actualizado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

export default noteCtrl;
