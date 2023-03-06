import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, useColorScheme, StatusBar, ScrollView, View, Button, Pressable, FlatList, PermissionsAndroid, Platform, Text, TouchableHighlight, NativeModules, NativeEventEmitter, StyleSheet } from "react-native";
import { useState, useEffect } from "react";



function RideScreen() {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [started, setStarted] = useState(false)

  return (
    <>
    {started ?
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Button
          onPress={()=>{}}
          title="Battery"
          color="#841584"
          accessibilityLabel="Show battery"
        />
        <Button
          onPress={()=>{}}
          title="Headlights"
          color="#841584"
          accessibilityLabel="Turn on Headlights"
        />
         <Button
          onPress={()=>{}}
          title="Connect"
          color="#841584"
          accessibilityLabel="Connect Skateboard to Bluetooth"
        />
        <Button
          onPress={()=>{setStarted(false)}}
          title="Start Ride"
          color="#841584"
          accessibilityLabel="Start ride"
        />
      </View>
    </SafeAreaView> 
    : 
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Pressable
          onPress={() => {
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(0, 230 ,0)' :'rgb(0, 255, 0)'
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{}</Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => {setStarted(true)}}
          style={({pressed}) => [
            {
              backgroundColor: 'rgb(0, 0, 0)'
            },
            styles.wrapperMid,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{"End Ride"}</Text>
          )}
        </Pressable>

         <Pressable
          onPress={() => {
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(230, 0 ,0)' :'rgb(255, 0, 0)'
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{}</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView> 
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',

    fontSize: 30,
    color: "red",
  },
  wrapperMid: {
    borderRadius: 8,
    padding: 38,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 135,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});


export default RideScreen;