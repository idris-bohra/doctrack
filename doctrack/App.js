import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './component/LoginPage';
import UplaodDOC from './component/UplaodDOC';
import ForTeachers from './component/ForTeachers';
import Temp from './component/Temp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'> 
          <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }}
          />
          <Stack.Screen name="ForTeachers"  component={ForTeachers} options={{ title: 'ForTeachers' }}
          />
          <Stack.Screen
            name="Upload"
            component={UplaodDOC}
            options={{ title: 'Upload' }}
          />     
             
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
