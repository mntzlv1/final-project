import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter email and password!');
            return;
        }
        console.log('User logged in:', email);
    };

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
