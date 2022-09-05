import React from 'react';
import {LanguageToggle} from '../../blocks';
import LocalizedText from '../LocalizedText';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

const Header = ({title}) => {
  return (
    <Animatable.View
      animation={'fadeInDown'}
      duration={1000}
      style={styles.container}>
      <LocalizedText style={styles.text}>{title}</LocalizedText>
      <LanguageToggle />
    </Animatable.View>
  );
};

export default Header;
