import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const Common = {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  SCREEN_WIDTH: screenWidth,
  SCREEN_HEIGHT: screenHeight,
};
