import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Avatar } from '@rneui/themed';


function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <View style={{ display: 'flex', gap: '0.3rem' }}>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='CPF'
          />
          <Input
            placeholder='Email'
          />
          <Input
            placeholder='Senha'
          />
        </View>
        <View style={{ display: 'flex', gap: '0.5rem' }}>
          <Button radius={'xl'} color={'#2d4ec4'} style={styles.buttonPill} onPress={() => navigation.navigate('Login')} title="Cadastrar"></Button>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },

  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    padding: '1.5rem',
    display: 'flex',
    gap: '2.5rem',
    borderRadius: '0.5rem',
    marginBottom: '3rem'
  },
  input: {
    borderWidth: '0.2rem'
  },
  avatarView: {
    display: 'flex',
    alignItems: 'center'
  }
});

