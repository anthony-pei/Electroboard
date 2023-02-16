import React, { useState, PropsWithChildren } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, useColorScheme, StatusBar, ScrollView, View, Text, Button, StyleSheet } from "react-native";

function SettingsScreen() {
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section 
            title="Location Tracking"
            clickHandler={()=>{}}
          />   
          <Section 
            title="Imperial Units"
            clickHandler={()=>{}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>    
  );
}


type SectionProps = PropsWithChildren<{
  title: string;
  clickHandler: Function;
}>;

function Section({children, title, clickHandler}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [onStatus, setOnStatus] = useState(true);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Button
        onPress={() => {
          setOnStatus(!onStatus)
          clickHandler()
        }}
        title= {onStatus ? "on" : "off"} 
        color="#841584"
        accessibilityLabel="Connect Skateboard to Bluetooth"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection:'row', 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  highlight: {
    fontWeight: '700',
  },
});

export default SettingsScreen;