import React from 'react';
import {TouchableOpacity} from 'react-native';
import LocalizedText from '../LocalizedText';
import styles from './styles';

const Button = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={onPress}>
      <LocalizedText style={styles.text}>{title}</LocalizedText>
    </TouchableOpacity>
  );
};

export default Button;
