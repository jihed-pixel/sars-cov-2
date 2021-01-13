import { StatusBar } from 'expo-status-bar';
// import React in our code
import React from 'react';
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';




const Dash2 = () => {
  return (


          <View>
<LineChart data={{"2017-05-13": 2, "2017-05-11": 5,  "2017-05-15": 1,  "2017-05-20": 5,  "2017-05-22": 4,  "2017-05-23": 5}} />
          </View>
      

  );
};

export default Dash2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
