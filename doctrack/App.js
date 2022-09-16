import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './component/LoginPage';
import UplaodDOC from './component/UplaodDOC';
import PickImage from './component/PickImage';
import Convert from './component/Convert';
import Date from './component/Date';
import ForTeachers from './component/ForTeachers';
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
          <Stack.Screen
            name="Convert"
            component={Convert}
            options={{ title: 'Convert' }}
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
