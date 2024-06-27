const TaskModel = require("../models/taskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTasks = (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Failed to add the user..." });
    });
};

module.exports.updateTasks = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Failed to update..." });
    });
};

module.exports.deleteTasks = (req, res) => {
    const { id } = req.params;
  
    TaskModel.findByIdAndDelete(id)
      .then(() => res.send("Deleted Successfully..."))
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Failed to ..." });
      });
  };
  
