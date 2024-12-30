import React, { useState } from 'react';
import { Text, Pressable} from 'react-native';
import { styles } from './ButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function Buttons() {
    const [pass, setPass] = React.useState('');
    function handleGenerateButton() {
        let generateToken = generatePassword();
        setPass(generateToken); 
    }
    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
    }
  return (
    <>
        <BatTextInput pass={pass}/>
        <Pressable onPress={handleGenerateButton} style={styles.button}> 
            <Text style={styles.buttonText}>Generrate</Text>
        </Pressable>
        <Pressable 
        onPress={handleCopyButton} style={styles.button}>
            <Text style={styles.buttonText}>Copy</Text>
        </Pressable>
        <Pressable 
        onPress={handleCopyButton} style={styles.button}>
            <Text style={styles.buttonText}>Saved List</Text>
        </Pressable>

    </>
  ); 
}