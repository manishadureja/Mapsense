import { Button, Image, Text, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { styles } from '../styles/Styles';

// Input screen to enter detail to fetch the data.
const InputScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pinCode, setPinCode] = useState(null);

  const onReset = () => {
    setFirstName('');
    setLastName('');
    setPinCode(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.stretch}
          source={require('../images/CovidBackground.png')}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={[styles.subContainer,{alignItems:'flex-start', width:'100%', height:'100%'}]} >
          <Image style={{justifyContent:'center', width:'30%', height:'10%',alignSelf:'center'}}
           source={require('../images/MapsenseLogo.png')}
          />
          <Text style={[styles.textStyle]}>First Name</Text>
          <TextInput style={[styles.input]}
            placeholder='First Name'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={text => setFirstName(text)} value={firstName}

          />
          <Text style={[styles.textStyle]}>Last Name</Text>
          <TextInput style={[styles.input]}
            placeholder='Last Name'
            autoCapitalize='none'
            placeholderTextColor='white'
            onChangeText={text => setLastName(text)} value={lastName}
          />
          <Text style={[styles.textStyle]}>Pincode</Text>
          <TextInput style={[styles.input]}
            placeholder='Pincode'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={text => setPinCode(text)} value={pinCode}
          />
          <br/>
          <Button title="Show Statistics" style={styles.button} onPress={() =>
            navigation.navigate('Display', { fName: firstName, lName: lastName, pCode: pinCode })
          } />
          <br />
          <Button title="Reset Form" style={styles.button} onPress={() => { onReset(); }} />
        </View>
      </View>
    </View>
  );
};

export default InputScreen;