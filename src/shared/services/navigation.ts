import {
  CommonActions,
  Route,
  RouteProp,
  StackActions,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {navigationRef} from '../constants/refs';
import {AppStackParamList} from '../types/navigation.type';

/**
 * The navigate action allows to navigate to a specific route. It takes the following arguments:
 *
 * @param routeName A destination name of the route that has been registered somewhere.
 * @param params Params to merge into the destination route.
 */
function navigate(
  routeName: keyof AppStackParamList,
  params?: StackScreenProps<AppStackParamList>['route']['params'],
) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  }
}

/**
 * The setParams action allows to update params for a certain route. It takes the following arguments:
 *
 * @param params Params to pass to the destination route.
 */
export const setParams = (params: object): void => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.dispatch(CommonActions.setParams(params));
  }
};

/**
 * The reset action allows to reset the navigation state to the given state. It takes the following arguments:
 *
 * @param routes The new navigation list state object to use.
 */
export const reset = (
  index: number,
  routes: RouteProp<AppStackParamList, keyof AppStackParamList>[],
): void => {
  if (navigationRef.current?.isReady()) {
    navigationRef?.current?.dispatch(
      CommonActions.reset({
        index: index,
        routes: routes,
      }),
    );
  }
};

/**
 * The goBack action creator allows to go back to the previous route in history. It doesn't take any arguments.
 * @returns
 */
export const goBack = (): void => {
  if (navigationRef.current?.isReady()) {
    navigationRef?.current?.goBack();
  }
};

/**
 * Method returns the options for the currently focused screen in the whole navigation tree:
 * @returns route
 */
export const currentRoute = (): Route<string> | undefined => {
  if (navigationRef.current?.isReady()) {
    return navigationRef.current.getCurrentRoute();
  }
};

/**
 * The replace action allows to replace a route in the navigation state. It takes the following arguments:
 *
 * @param routeName A destination name of the route that has been registered somewhere.
 * @param params Params to pass to the destination route.
 */
export const replace = (
  routeName: string,
  params?: StackScreenProps<AppStackParamList>['route']['params'],
): void => {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.dispatch(StackActions.replace(routeName, params));
  }
};

/**
 * The push action adds a route on top of the stack and navigates forward to it.
 * This differs from navigate in that navigate will pop back to earlier in the stack
 * if a route of the given name is already present there.
 * push will always add on top, so a route can be present multiple times.
 *
 * @param routeName A destination name of the route that has been registered somewhere.
 * @param params Params to pass to the destination route.
 */
export const push = (
  routeName: string,
  params?: StackScreenProps<AppStackParamList>['route']['params'],
): void => {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.dispatch(StackActions.push(routeName, params));
  }
};

/**
 * The pop action takes you back to a previous screen in the stack.
 * It takes one optional argument (screenCount), which allows you to specify how many screens to pop back by.
 *
 * @param screenCount
 */
export const pop = (screenCount: number): void => {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.dispatch(StackActions.pop(screenCount));
  }
};

/**
 * The popToTop action takes you back to the first screen in the stack, dismissing all the others.
 */
export const popToTop = (): void => {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.dispatch(StackActions.popToTop());
  }
};

const NavigationService = {
  navigate,
  goBack,
  reset,
  currentRoute,
  pop,
  push,
  setParams,
  replace,
};

export default NavigationService;
