import AppNavigation from '@/navigators/AppNavigation';
import Loading from '@/shared/components/Loading';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'transparent'}
      />
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigation />
        <Loading />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
