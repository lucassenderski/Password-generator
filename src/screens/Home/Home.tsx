import React from "react";
import { StatusBar } from 'expo-status-bar';
import{Text,StyleSheet, View} from "react-native";
import styles from "./Style";
import {Batlogo} from "../../components/Batlogo/BatLogo";
import { Buttons } from "../../components/Buttons/Button";

export default function Home(){
    return(
        <View style={styles.container}>
        <Batlogo/>
        <Buttons/>
        <StatusBar style="auto" />
        </View>
    ) }
    