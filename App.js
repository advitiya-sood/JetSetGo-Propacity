import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TravelRequestScreen from './src/Screens/TravelRequestScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
    // Stack navigation implemented
  return (
    <NavigationContainer style={styles.container} >
      <StatusBar style="auto" />
            <Stack.Navigator >
              <Stack.Screen name=' JetSetGo-Travel Request Screen'  component={TravelRequestScreen} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
