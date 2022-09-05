import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
const LocalizedText = ({children, ...props}) => {
  const {t} = useTranslation();
  return <Text {...props}>{t(children)}</Text>;
};
// by default law mafeesh fel translations ht3mel show ll value aly gayalha zay ma heya
export default LocalizedText;
