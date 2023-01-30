import { Button, StatusBar } from 'react-native';
import './src/lib/dayjs';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import * as Notifications from 'expo-notifications';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

// TO USE PUSH NOTIFICATIONS UNCOMMENT THIS CODE
// Notifications.setNotificationHandler({
//   handleNotification:async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false
//   })
// })

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  // TO USE PUSH NOTIFICATIONS UNCOMMENT THIS CODE
  // async function scheduleNotifications() {
  //   const trigger = new Date(Date.now())
  //   trigger.setMinutes(trigger.getMinutes() + 1)
  //   await Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: 'Olá',
  //       body: 'Você cumpriu os seus hábitos de hoje?'
  //     },
  //     trigger
  //   })
  // }


  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      {/* <Button title='Enviar notificação' onPress={scheduleNotifications}/> */}
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}
