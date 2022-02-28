// Packages
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import { Reactotron as ReactotronType } from 'reactotron-core-client';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

declare global {
  interface Console {
    tron: ReactotronType<ReactotronReactNative>;
  }
}

const { scriptURL } = NativeModules.SourceCode;
const host = scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron.configure({ host }).useReactNative().use(reactotronRedux()).connect();

console.tron = tron;

if (tron.clear) {
  tron.clear();
}

export default tron;
