import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
        <Image source={topo} style={styles.topo}/>
        <Texto style={styles.titulo}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 70,
    },
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
})