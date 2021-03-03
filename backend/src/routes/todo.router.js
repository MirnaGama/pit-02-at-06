const { Router } = require("express");
const TodoController = require("../controllers/todo.controller")

const router = Router();

router.get("/todo", TodoController.index);
router.get("/todo/:id", TodoController.getOne);
router.get("/todo/byUser", TodoController.getAllByUser);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.remove);
router.post("/todo", TodoController.store);