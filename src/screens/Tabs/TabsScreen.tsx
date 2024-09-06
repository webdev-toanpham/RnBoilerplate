import Icons from '@/assets/icons';
import {EScreens} from '@/shared/constants/screens';
import {
  AppStackParamList,
  TabsTabParamList,
} from '@/shared/types/navigation.type';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {memo} from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ContactsScreen from '../Contacts/ContactsScreen';
import HomeScreen from '../Home/HomeScreen';

type IProps = StackScreenProps<AppStackParamList, EScreens.Tabs>;

const Tab = createBottomTabNavigator<TabsTabParamList>();

function TabsScreen({navigation, route}: IProps) {
  const insets = useSafeAreaInsets();

  const screenOptions = (): BottomTabNavigationOptions => ({
    tabBarStyle: {
      height: 60 + insets.bottom,
      justifyContent: 'center',
      borderTopWidth: 1,
      borderTopColor: '#E9EDF5',
    },
    tabBarLabelStyle: {
      fontWeight: '700',
      fontSize: 12,
      textTransform: 'none',
    },
    tabBarItemStyle: {paddingHorizontal: 0},
    tabBarAllowFontScaling: false,
  });
  return (
    <Tab.Navigator id={EScreens.Tabs} screenOptions={screenOptions}>
      <Tab.Screen
        name={EScreens.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icons.HomeIcon stroke={focused ? '#000' : '#E9EDF5'} />;
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? '#000' : '#E9EDF5'}}>
                {EScreens.Home}
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name={EScreens.Contacts}
        component={ContactsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icons.ContactIcon stroke={focused ? '#000' : '#E9EDF5'} />;
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text style={{color: focused ? '#000' : '#E9EDF5'}}>
                {EScreens.Contacts}
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default memo(TabsScreen);
