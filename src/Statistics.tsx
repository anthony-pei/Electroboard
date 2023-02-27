import { PropsWithChildren, useState } from "react";
import { View, Text, Button, StyleSheet, useColorScheme, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function StatisticsScreen() {
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
            color="1"
            clickHandler={()=>{}}
          />   
          <Section 
            color="2"
            clickHandler={()=>{}}
          />
        </View>
      </ScrollView>
    </SafeAreaView> 
  );
}


type SectionProps = PropsWithChildren<{
  color: string;
  clickHandler: Function;
}>;

function Section({children, color, clickHandler}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [openStatus, setOpenStatus] = useState(false);

  // Date, Location, Distance, Durations
  return (
    <TouchableOpacity onPress={()=>{setOpenStatus(!openStatus)}}>  
      <View style={color === '1' ? styles.sectionBoxWhite : styles.sectionBoxGray}>
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionTop,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {"Date:"}
          </Text>
          <Text
            style={[
              styles.sectionTop,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {"Location:"}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionBottom,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {"Distance:"}
          </Text>
          <Text
            style={[
              styles.sectionBottom,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {"Duration"}
          </Text>
        </View>
      </View>
      {openStatus? 
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionBottom,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {"Add map here"}
          </Text>
        </View>
        : <></>
      }

    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  sectionBoxWhite: {
    backgroundColor: 'white',
  },
  sectionBoxGray: {
    backgroundColor: '#dbdbdb',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection:'row', 
  },
  sectionTop: {
    fontSize: 18,
    fontWeight: '600',
    paddingRight: 110,
  },
  sectionBottom: {
    fontSize: 18,
    fontWeight: '600',
    paddingRight: 75,
    paddingBottom: 20,
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

export default StatisticsScreen;