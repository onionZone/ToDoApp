import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));
  return (
    <>
      {active.length > 0 ? (
        <table className="table table-sm table-responsive text-break caption-top">
          <caption className="">
            To Do: <em>({active.length})</em>
          </caption>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Due date</th>
              <th></th>
              <th>Done/Remove</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>{activeTasks}</tbody>
        </table>
      ) : (
        ""
      )}

      {done.length > 0 ? (
        <table className="table caption-top">
          <caption>
            Done: <em>({done.length})</em>
          </caption>
          <thead className="table-dark">
            <tr>
              <td>#</td>
              <td>Task</td>
              <td>Owner</td>
              <td>Due date</td>
              <td>Finished</td>
              <td>Remove</td>
              <td></td>
            </tr>
          </thead>
          <tbody>{doneTasks}</tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default TaskList;
