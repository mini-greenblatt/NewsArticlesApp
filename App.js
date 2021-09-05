import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import FirstScreen from './src/components/firstScreen/FirstScreen';
import News from './src/components/news/News';
import SignIn from './src/components/favorites/SignIn'
import FavoritesList from './src/components/favorites/FavoritesList'
import CategoriesItem from './src/components/categories/CategoryItem'
import { NativeBaseProvider } from 'native-base';
import{
  GoogleSignin
} from '@react-native-google-signin/google-signin'

const Stack = createNativeStackNavigator();

function App(){
 
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'367447748540-44t321o30mgn845qtf2avm4j2kls3plv.apps.googleusercontent.com'
    });
  }, [])
  
 

  return (
    <>
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="FirstScreen"
              options={{ title: ' ' }}
              component={FirstScreen} />
            <Stack.Screen
              name='News'
              options={{ title: ' ' }}
              component={News} />
            <Stack.Screen
              name='CategoriesItem'
              options={{ title: ' ' }}
              component={CategoriesItem} />
               <Stack.Screen
              name='SignIn'
              options={{ title: ' ' }}
              component={SignIn} />
              <Stack.Screen
              name='FavoritesList'
              options={{title:' '}}
              component={FavoritesList}/>
          </Stack.Navigator>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  </>    
  );
};



export default App;
