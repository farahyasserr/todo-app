import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import Images from '../../assets/images';
import LocalizedText from '../LocalizedText';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

const SingleTask = ({item, onPress, onDelete}) => {
  return (
    <Animatable.View duration={1500} animation={'fadeIn'}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <LocalizedText style={item.done ? styles.doneText : styles.text}>
          {item.title}
        </LocalizedText>
        <View style={styles.iconsContainer}>
          {item.done && <Image source={Images.done} style={styles.doneIcon} />}
          <TouchableOpacity onPress={onDelete}>
            <Image style={styles.deleteIcon} source={Images.trash} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default SingleTask;
