import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
    pass: string;  }

export function BatTextInput(props: BatTextInputProps) {
  return (
    <View>
    <TextInput style={styles.PassContainer} placeholder = 'pass'
    value = {props.pass}>
    </TextInput>
 </View>
  );
}