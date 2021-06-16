
  
   (
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

