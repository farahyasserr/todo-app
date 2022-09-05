import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import Images from '../../assets/images';
import styles from './styles';
const LanguageToggle = () => {
  const {i18n} = useTranslation();

  let currentLang = i18n.language;
  const changeLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'de' : 'en');
  };

  return (
    <TouchableOpacity onPress={changeLanguage}>
      <Image source={Images.earth} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export default LanguageToggle;
