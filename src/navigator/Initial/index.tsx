import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AuthenticationStack from '../Authentication';
import ApplicationStack from '../Application';

export default () => {
  const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   const initialize = async () => {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();
  //     } catch (err) {
  //       console.warn(err);
  //     }

  //     try {
  //     } catch (err) {
  //       setReady(true);
  //       SplashScreen.hideAsync();
  //       console.log('Here');
  //     }
  //   };
  //   initialize();
  // }, []);

  return <ApplicationStack />;
};
