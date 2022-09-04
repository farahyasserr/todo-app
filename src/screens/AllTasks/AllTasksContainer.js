import React, {useState, useCallback} from 'react';
import AllTasksView from './AllTasks';

const AllTasksContainer = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Call mama', done: true},
    {id: 2, title: 'Call baba', done: false},
    {id: 3, title: 'Go shopping', done: true},
    {id: 4, title: 'Go To practice', done: false},
    {id: 5, title: 'Zaki', done: false},
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

  const setTaskAsDone = useCallback(
    taskId => {
      console.log('taaaaasks', tasks, taskId);
      const doneTaskIndex = tasks.findIndex(item => item.id === taskId);
      console.log('INDEX', doneTaskIndex);
      const newTasks = [...tasks];
      newTasks[doneTaskIndex].done = true;
      setTasks(newTasks);
    },
    [tasks],
  );

  const deleteTask = useCallback(
    taskId => {
      let taskIndex = tasks.findIndex(item => item.id === taskId);
      let newTasks = [...tasks];
      newTasks.splice(taskIndex, 1);
      setTasks(newTasks);
    },
    [tasks],
  );

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
