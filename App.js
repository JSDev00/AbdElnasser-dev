import { Box,Text} from 'native-base'
import { NativeBaseProvider } from 'native-base';
import AppNavigation from './navigation/AppNavigation';


export default function App() {
 
  return (
    <NativeBaseProvider>
      <AppNavigation/>
    </NativeBaseProvider>
  );
}
