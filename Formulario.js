import React, { useState } from 'react';
import { View, TextInput, Button, CheckBox } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  const handleRegistro = () => {
    // Lógica para enviar la información del formulario
    // Puedes realizar validaciones aquí antes de enviar los datos
    // ...

    // Ejemplo: Imprimir los datos en la consola
    console.log({
      nombre,
      apellido,
      correo,
      contrasena,
      confirmarContrasena,
      telefono,
      fechaNacimiento,
      genero,
      aceptarTerminos,
    });
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <TextInput placeholder="Correo Electrónico" value={correo} onChangeText={setCorreo} />
      <TextInput placeholder="Contraseña" secureTextEntry value={contrasena} onChangeText={setContrasena} />
      <TextInput placeholder="Confirmar Contraseña" secureTextEntry value={confirmarContrasena} onChangeText={setConfirmarContrasena} />
      <TextInput placeholder="Número de Teléfono" keyboardType="numeric" value={telefono} onChangeText={setTelefono} />
      <DatePicker
        style={{ width: 200 }}
        date={fechaNacimiento}
        mode="date"
        placeholder="Fecha de Nacimiento"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2100-12-31"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(date) => setFechaNacimiento(date)}
      />
      <RNPickerSelect
        placeholder={{ label: 'Seleccionar Género', value: null }}
        onValueChange={(value) => setGenero(value)}
        items={[
          { label: 'Masculino', value: 'Masculino' },
          { label: 'Femenino', value: 'Femenino' },
          { label: 'Otro', value: 'Otro' },
        ]}
      />
      <CheckBox title="Aceptar Términos y Condiciones" value={aceptarTerminos} onValueChange={() => setAceptarTerminos(!aceptarTerminos)} />
      <Button title="Registrarse" onPress={handleRegistro} />
    </View>
  );
};

export default Formulario;
