import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Routes } from '@presentation/routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  const [fonts] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fonts) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  );
}
