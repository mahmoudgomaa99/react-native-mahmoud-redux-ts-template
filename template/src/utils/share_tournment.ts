import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Platform, Share} from 'react-native';

export const onSharePressed = (id: any) => {
  dynamicLinks()
    .buildLink({
      link: `https://appname.app?tournmentId=${id}`,
      domainUriPrefix: 'get it from firebase',
      android: {
        packageName: '',
      },
      ios: {
        bundleId: '',
        appStoreId: '',
      },
    })
    .then((res: any) => {
      Share.share(Platform.OS === 'ios' ? {url: res} : {message: res});
    })
    .catch(err => console.log(err));
};
