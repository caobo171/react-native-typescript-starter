/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider } from 'react-redux'

import AppContainer from '@/navigation/AppContainer';
import store from '@store/store'
import useEffectOnce from 'react-use/lib/useEffectOnce'

import firestore from '@react-native-firebase/firestore';

import { InterstitialAd, TestIds } from '@react-native-firebase/admob';
import { AdEventType } from '@react-native-firebase/admob';
 
const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
});

interstitial.onAdEvent((type) => {
  if (type === AdEventType.LOADED) {
    interstitial.show();
  }
});
 
interstitial.load();

const App = () => {

  useEffectOnce(()=>{
      (async ()=>{
        const querySnapshot = await firestore().collection('user').get()

        console.log('check querySnapshot', querySnapshot)
      })()
  })
  return (
    <Provider store = {store}>
       <AppContainer/>
    </Provider>
  );
};



export default App;
