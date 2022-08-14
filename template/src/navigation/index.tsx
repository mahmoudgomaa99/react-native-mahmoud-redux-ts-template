import React, {useCallback} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCurrentUser} from 'src/redux/user';
import {Platform} from 'react-native';
import COLORS from 'values/colors';

const NavigationHandler = () => {
  //   const currentUser = useSelector(selectCurrentUser);
  const currentUser = false;
  //change it on setting up redux
  const renderSwitch = useCallback(() => {
    if (currentUser) {
      return <AppStack />;
    } else return <AuthStack />;
  }, [currentUser]);
  return (
    <SafeAreaProvider
      style={{
        paddingTop: Platform.OS === 'ios' ? 35 : 0,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
      }}>
      <NavigationContainer>
        <NeedsInternetConnection>{renderSwitch()}</NeedsInternetConnection>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationHandler;
