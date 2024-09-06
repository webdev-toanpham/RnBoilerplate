import {EScreens} from '@/shared/constants/screens';
import {AppStackParamList} from '@/shared/types/navigation.type';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView, Text} from 'react-native';

type IProps = StackScreenProps<AppStackParamList, EScreens.Test>;

export default function TestScreen({route}: IProps) {
  return (
    <SafeAreaView>
      <Text>{route.params?.name}</Text>
    </SafeAreaView>
  );
}
