import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Input} from '../../components';
import styles from './styles';
import PropTypes from 'prop-types';

const AddTaskModal = ({isVisible, onBackDropPress, onTaskSubmit}) => {
  const [todoTitle, setTodoTitle] = useState('');
  const onChangeTitle = txt => setTodoTitle(txt);
  const onAddButtonPress = () => {
    onTaskSubmit(todoTitle);
    setTodoTitle('');
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackDropPress}
      backdropOpacity={0.6}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}>
      <View style={styles.container}>
        <Input
          placeholder={'ADD_TASK'}
          value={todoTitle}
          onChangeValue={onChangeTitle}
          autoFocus={true}
        />
        <Button
          title={'ADD'}
          onPress={onAddButtonPress}
          disabled={!todoTitle}
        />
      </View>
    </Modal>
  );
};

AddTaskModal.propTypes = {
  isVisible: PropTypes.bool,
  onBackDropPress: PropTypes.func,
  onTaskSubmit: PropTypes.func,
};

export default AddTaskModal;
