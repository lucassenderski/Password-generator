import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';
export function Batlogo() {
  return (
    <>
        <Text style={styles.title}>Password Generator</Text>
        <Image source={batLogo}
        style = {{resizeMode :'contain', height: 100}} />
    </>
  );
}