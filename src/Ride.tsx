import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, useColorScheme, StatusBar, ScrollView, View, Button } from "react-native";

function RideScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
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
          title="Connect"
          color="#841584"
          accessibilityLabel="Connect Skateboard to Bluetooth"
        />
        <Button
          onPress={()=>{}}
          title="Start"
          color="#841584"
          accessibilityLabel="Start ride"
        />
      </View>
    </SafeAreaView>
  );
}

export default RideScreen;