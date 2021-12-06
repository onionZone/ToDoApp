import React from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  state = {
    tasks: [],
  };

  counter = this.state.tasks.length + 1;

  addTask = (text, date, owner, priority) => {
    console.log("Added task");
    const task = {
      id: this.counter,
      text: text,
      owner: owner,
      date: date,
      priority: priority,
      active: true,
      done: "",
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;
    return true;
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
    console.log("Deleted task: " + id);
  };

  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.done = new Date().getTime();
      }
    });
    this.setState({ tasks });
    console.log("Changed task status: " + id);
  };

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
        <AddTask add={this.addTask} />
      </div>
    );
  }
}

export default App;
