import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import letterColors from '../utils/letterColors';
export default function Message(props){
    const { mensaje, name } = props;
    const thisIsMe = name === mensaje.userName;
    const [color, setColor] = useState(null)
    
    useEffect(() => {
        const char = mensaje.userName.trim()[0].toUpperCase();
        const index = char.charCodeAt() - 65;
        setColor(letterColors[index])
    });
  
    const conditionalStyle = {
        container:{
            justifyContent: thisIsMe ? 'flex-end' : 'flex-start'
        },
        viewMessage:{
            backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0'
        },
        message:{
            color: thisIsMe ? '#000' : '#fff',
            textAlign: thisIsMe ? 'right' : 'left'
        },
    }

    return(
        <View style={[styles.container, conditionalStyle.container]}>
            {!thisIsMe && (
                <View style={[styles.letraView, { backgroundColor: `rgb(${color})` }]}>
                    <Text style={styles.letra}>
                        {mensaje.userName.substr(0, 1) }
                    </Text>
                </View>
            )}
            
            <View style={[styles.viewMessage, conditionalStyle.viewMessage]}>
                <Text style={[styles.message, conditionalStyle.message]}>{mensaje.text}</Text>
                <Text style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight ]}>{mensaje.time}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    letraView:{
        height: 30,
        width: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#f00'
    },
    letra:{
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase'
    },
    viewMessage:{
        borderRadius: 10,
        minHeight: 35,
        minWidth: '40%',
        maxWidth: '80%',
    },
    message:{
        padding: 5,
        paddingBottom:25
    },
    time:{
        fontSize: 10,
        position: 'absolute',
        bottom: 5
    },
    timeRight:{
        right: 8,
        color: '#fff'
    },
    timeLeft:{
        left: 8,
        color: 'grey'
    }
})