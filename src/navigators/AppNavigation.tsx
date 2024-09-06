import TabsScreen from '@/screens/Tabs/TabsScreen';
import TestScreen from '@/screens/Test/TestScreen';
import {navigationRef} from '@/shared/constants/refs';
import {EScreens} from '@/shared/constants/screens';
import {AppStackParamList} from '@/shared/types/navigation.type';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

interface IProps {}

const Stack = createStackNavigator<AppStackParamList>();

function AppNavigation(props: IProps) {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={EScreens.Tabs}>
          <Stack.Screen name={EScreens.Tabs} component={TabsScreen} />
          <Stack.Screen name={EScreens.Test} component={TestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigation;
