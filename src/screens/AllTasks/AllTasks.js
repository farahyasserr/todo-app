import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Button, Header} from '../../components';
import {AddTaskModal} from '../../blocks';
import TasksList from '../../blocks/TasksList';

const AllTasks = ({tasks, addNewTask, setTaskAsDone, deleteTask}) => {
  const [allTaskModalVisibility, setAllTaskModalVisibility] = useState(false);

  const setTaskAsDoness = id => setTaskAsDone(id);
  const onModalBackdropPress = () => setAllTaskModalVisibility(false);

  const onTaskSubmit = id => {
    addNewTask(id);
    setAllTaskModalVisibility(false);
  };

  const addTaskHandler = () => {
    setAllTaskModalVisibility(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={'ALL_TASKS'} />
      <TasksList
        deleteTask={deleteTask}
        tasks={tasks}
        setTaskAsDone={setTaskAsDoness}
      />
      <View style={styles.buttonContainer}>
        <Button title={'ADD_TASK'} onPress={addTaskHandler} />
      </View>
      <AddTaskModal
        isVisible={allTaskModalVisibility}
        onBackDropPress={onModalBackdropPress}
        onTaskSubmit={onTaskSubmit}
      />
    </SafeAreaView>
  );
};

export default AllTasks;
