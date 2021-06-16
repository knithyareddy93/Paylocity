import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

let my_data = [
   {
      "name":"Abhishek",
      "dependants":[
         {
            "dName":"Ravi"
         }
      ]
   },
   {
      "name":"Aman",
      "dependants":[
         {
            "dName":"Ajay"
         },
         {
            "dName":"Akshay"
         }
      ]
   }
];

const App = ()=>{
  const [count, setCount] = useState(0);
  const [myData, setMyDate] = useState(0);

  const getData = () => {
    //Build myData so that it can be used in calculate function
    calculate();
  }

  const calculate = () => {
    let final_sum = 0;
    let single_sum = 0;

    if(my_data.length)
    {
      for(let i in my_data)
      {
        let n = 0;
        let x = 500;
        let m = 1000;
        let matching_dnames = 0;
        n = my_data[i].dependants.length;
        my_data[i].dependants.map((ele, index)=>{
          if(ele.dName.match(/A/g))
            matching_dnames += 1; 
        })
        
        if(my_data[i].name.match(/A/g))
          m = m - (10/100 * m);
        x = m + ((n * x) - (matching_dnames * (10/100 * x)));
        single_sum = 2000 + x; 
        final_sum += single_sum;
      }
      setCount(final_sum);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Enter the number of employees you want to add.
      </Text>

      <TextInput style={{backgroundColor:'white'}} onChangeText={(text)=>setCount(count)}></TextInput>
      <TextInput style={{backgroundColor:'white'}} onChangeText={(text)=>setCount(count)}></TextInput>

      <Button title="Submit" onPress={()=>getData()}/>

      {myData}
      <Text style={styles.paragraph}>
        Final SUM = {count}
      </Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
