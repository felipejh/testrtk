// Packages
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const host = scriptURL.split('://')[1].split(':')[0];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tron = Reactotron.configure({ host }).useReactNative().use(reactotronRedux()).connect();

  console.tron = tron;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  tron.clear!();
}
