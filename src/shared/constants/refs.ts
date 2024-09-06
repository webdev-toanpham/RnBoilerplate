import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';
import {AppStackParamList} from '../types/navigation.type';

export const navigationRef =
  createRef<NavigationContainerRef<AppStackParamList>>();
