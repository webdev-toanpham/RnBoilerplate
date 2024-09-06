import type {StackScreenProps} from '@react-navigation/stack';
import {EScreens} from '../constants/screens';

export type AppStackParamList = {
  [EScreens.Tabs]: undefined;
  [EScreens.Test]: {name: string};
};

export type AppScreenProps<
  S extends keyof AppStackParamList = keyof AppStackParamList,
> = StackScreenProps<AppStackParamList, S>;

export type TabsTabParamList = {
  [EScreens.Home]: undefined;
  [EScreens.Contacts]: {id: number};
};
