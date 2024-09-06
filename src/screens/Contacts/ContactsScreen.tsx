import {EScreens} from '@/shared/constants/screens';
import NavigationService from '@/shared/services/navigation';
import {TabsTabParamList} from '@/shared/types/navigation.type';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {Button, SafeAreaView, Text} from 'react-native';

type IProps = MaterialTopTabScreenProps<TabsTabParamList, EScreens.Contacts>;

export default function ContactsScreen(props: IProps) {
  const handleGoToTest = () => {
    NavigationService.navigate(EScreens.Test, {
      name: 'test',
    });
  };
  return (
    <SafeAreaView>
      <Text>Contacts screen</Text>
      <Button title="Go go Test" onPress={handleGoToTest} />
    </SafeAreaView>
  );
}
