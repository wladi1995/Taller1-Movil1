import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextInput, Button, ImageBackground, ScrollView } from 'react-native';
import { CheckBox, Calendar } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native';
import Calendario from './Calendario';
const image={uri:'myPrimeraApp/R.jpeg'}
export default function App() {
  
  return (
    
    <View style={styles.container} >
      
      <Text>Sergio Sigcha</Text>
      <StatusBar style="auto" />
      <TextInput placeholder="Nombre" value={""} onChangeText={""} style={styles.input}/>
      <TextInput placeholder='Apellido' style={styles.input}/>
      <TextInput placeholder='Correo' style={styles.input}/>
      <TextInput placeholder='Numero de telefono' style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input}/>
      <TextInput placeholder='Repita la Contraseña' secureTextEntry style={styles.input} />
<View style={styles.input}>
<RNPickerSelect 
        placeholder={{ label: 'Seleccionar Género', value: null } }
        onValueChange={(value) => setGenero(null)}
        items={[
          { label: 'Masculino', value: 'Masculino' },
          { label: 'Femenino', value: 'Femenino' },
          { label: 'Otro', value: 'Otro' },
        ]}
      
      />
</View>
      
       <SafeAreaView>
      <Calendario />
    </SafeAreaView>
       
      <CheckBox title={"Aceptar Terminos y Condiciones"} />
      <Button title='registro' />
        
      
    </View>


  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  input: {
    backgroundColor:'white',
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  inputCbm: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  }, 
  Image: {
    flex: 1,
    
    justifyContent: 'center', // Alinea el contenido en el centro verticalmente
  },

});
