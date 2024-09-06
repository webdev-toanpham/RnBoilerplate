import useCommonStore from '@/store/common.store';
import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

/**
 * Loading component
 */
const Loading = (): JSX.Element => {
  const {screenLocking} = useCommonStore();

  return useMemo(
    () =>
      (screenLocking || 0) > 0 ? (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
          <ActivityIndicator color="#ffffff" size="large" />
        </View>
      ) : (
        <></>
      ),
    [screenLocking],
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0 , 0, 0, 0.35)',
    zIndex: 9999,
  },
});

export default Loading;
