// Packages
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

declare global {
  interface Console {
    tron: any;
  }
}

const { scriptURL } = NativeModules.SourceCode;
const host = scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron.configure({ host }).useReactNative().use(reactotronRedux()).connect();

console.tron = tron;
tron.clear!();

export default tron;
