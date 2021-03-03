const TodoModel = require("../models/todo.model");

class TodoController {

    async getOne(req, res) {
        const { id } = req.params;
    
        try {
          const todo = await TodoModel.findById(id);
          res.send({ todo });
        } catch (e) {
          res.status(400).send({ message: "Todo not exists" });
        }
      }

      async index(req, res) {
        const data = await TodoModel.find();
    
        res.send({ data });
      }

    async getAllByUser(req, res) {
        const { _id } = req.headers.loggedUser

        try {
            const todos = await TodoModel.find({userId: _id}).exec(); // TESTAR DEPOIS
            res.send({todos})    
        } catch (e) {
            res.status(400).send({ message: "Error occurred"});
        }
    }

      async store(req, res) {
        let data = req.body;
    
        const { _id } = req.headers.loggedUser
        data = {... data, userId: _id};

        const newTodo = await TodoModel.create(data);
    
        res.send({ todo: newTodo });
      }

      async update(req, res) {
        const {
          params: { id },
          body,
        } = req;
    
        const todo = await TodoModel.findOneAndUpdate(id, body).lean();
    
        res.send({
          todo: {
            ...todo,
            ...body,
          },
        });
      }

      async remove(req, res) {
        const { id } = req.params;
    
        try {
          const todo = await TodoModel.findByIdAndDelete(id);
          if (todo) {
            res.send({ message: "Todo removed" });
          }
          throw new Error("Todo not exist");
        } catch (error) {
          res.status(400).send({ message: error.message });
        }
      }
}