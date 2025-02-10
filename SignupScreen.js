import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (!username || !email || !password) {
            alert('All fields are required!');
            return;
        }
        console.log('User registered:', { username, email });
    };

    return (
        <View>
            <Text>Sign Up</Text>
            <TextInput placeholder="Username" onChangeText={setUsername} />
            <TextInput placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

export default SignupScreen;
