/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { requestApiData } from './src/redux/actions'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();

  const startSearch = () => {
    dispatch(requestApiData())
    navigation.navigate('ListResult')
  }

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_text}>Search for houses to buy!</Text>
      <Text style={styles.home_text}>Search by place-name or postcode.</Text>
      <View style={styles.home_search}>
        <TextInput
          style={styles.home_input}
          placeholder={'Enter the city or code'}
        />
        <Button
          title="Go"
          // onPress={() => navigation.navigate('ListResult')}
          onPress={startSearch}
        />
      </View>
      <Image 
        source={require('./src/img/titlehome.jpg')}
        style={{ width: 300, height: 250 }} />
    </View>
  );
}

type ListResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListResult'
>;

type ResultProps = {
  navigation: ListResultScreenNavigationProp;
};

const ListResult = ({ navigation }: ResultProps) => {

  // const data = useSelector(state => state)

  return (
    <View style={styles.results_container}>
      <Text>ListResult</Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate('Property')}
      />
    </View>
  );
}

const Property = () => {

  return (
    <View style={styles.property_container}>
      <Text>Property</Text>
    </View>
  );
}

type RootStackParamList = {
  HomeScreen: undefined;
  ListResult: undefined;
  Property: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ 
              title: "Property Finder",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
          <Stack.Screen 
            name="ListResult" 
            component={ListResult} 
            options={{ 
              title: "Results",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
          <Stack.Screen 
            name="Property" 
            component={Property} 
            options={{ 
              title: "Property",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  home_text: {
    marginVertical: 5, 
    color: '#696969', 
    fontSize: 19,
  },
  home_search: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 25,
  },
  home_input: {
    height: 40,
    width: 200, 
    borderColor: '#1e90ff', 
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 10,
  },
  results_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  property_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
});

export default App;
