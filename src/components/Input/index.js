import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
const Input = ({value, onChangeValue, placeholder, ...props}) => {
  const {t} = useTranslation();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeValue}
      placeholder={t(placeholder)}
      style={styles.input}
      {...props}
    />
  );
};

export default Input;
