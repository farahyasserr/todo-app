import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {LocalizedText, SingleTask} from '../../components';
import styles from './styles';

const TasksList = ({tasks, deleteTask, setTaskAsDone}) => {
  const keyExtractor = useCallback((_item, index) => index.toString(), []);

  const renderItem = ({item}) => (
    <SingleTask
      item={item}
      onPress={() => {
        setTaskAsDone(item.id);
      }}
      onDelete={() => {
        deleteTask(item.id);
      }}
    />
  );

  const emptyComponent = () => (
    <>
      <LocalizedText style={styles.emptyListText}>NO_TASKS</LocalizedText>
    </>
  );
  return (
    <FlatList
      data={tasks}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.listContentContainer}
      ListEmptyComponent={emptyComponent}
    />
  );
};

export default TasksList;
