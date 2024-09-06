import Icons from '@/assets/icons';
import {EScreens} from '@/shared/constants/screens';
import NavigationService from '@/shared/services/navigation';
import {TabsTabParamList} from '@/shared/types/navigation.type';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {Button, SafeAreaView, Text} from 'react-native';

type IProps = MaterialTopTabScreenProps<TabsTabParamList, EScreens.Home>;

export default function HomeScreen({}: IProps) {
  const handleGoToTest = () => {
    NavigationService.navigate(EScreens.Test, {
      name: 'test',
    });
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Go go Test" onPress={handleGoToTest} />
    </SafeAreaView>
  );
}
