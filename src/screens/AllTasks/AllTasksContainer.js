import React, {useState} from 'react';
import AllTasksView from './AllTasks';

const AllTasksContainer = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Practice', done: true},
    {id: 2, title: 'Grocery', done: false},
    {id: 3, title: 'Go shopping', done: true},
  ]);

  const addNewTask = taskTitle => {
    setTasks(oldTasks => [
      ...oldTasks,
      {
        id: tasks.length + 1,
        title: taskTitle,
        done: false,
      },
    ]);
  };

  const setTaskAsDone = taskId => {
    const doneTaskIndex = tasks.findIndex(item => item.id === taskId);
    const newTasks = [...tasks];
    newTasks[doneTaskIndex].done = true;
    setTasks(newTasks);
  };

  const deleteTask = taskId => {
    let taskIndex = tasks.findIndex(item => item.id === taskId);
    let newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <AllTasksView
      tasks={tasks}
      addNewTask={addNewTask}
      setTaskAsDone={setTaskAsDone}
      deleteTask={deleteTask}
    />
  );
};

export default AllTasksContainer;
