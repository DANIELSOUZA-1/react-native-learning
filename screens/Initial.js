import * as React from 'react';
import { View, Text, Button } from 'react-native';

function InitialScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text className="text-2xl bg-red-400">Initial Screen</Text>
            <Button onPress={() => navigation.navigate('Home')} title="Ir para Home"></Button>
        </View>
    );
}

export default InitialScreen;
