import React, {useState} from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import { Item, Input as InputNB, Icon, Button } from 'native-base';

export default function Input(props){
    const { enviarMensaje } = props;
    const [mensaje, setMensaje] = useState('')

    const onSubmit = () => {
        //console.log(mensaje)
        if(mensaje.length > 0){
            enviarMensaje(mensaje)
            setMensaje('')
        }
    }

    return(
        <View style={styles.container}>
            <Item style={styles.item}>
                <InputNB 
                    placeholder="Mensaje"  
                    style={styles.input} 
                    placeholderTextColor="grey" 
                    value={mensaje}
                    onChange={ (e) => setMensaje(e.nativeEvent.text) }
                    />
                <TouchableOpacity style={styles.btn} onPress={ onSubmit }>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#16202b',
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    item:{
        borderColor: '#16202b'
    },
    btn:{
        backgroundColor: '#fff',
        padding: 5,
        height: 30,
      
    },
    input:{
        color: '#fff',
    },
    icon:{
        color: '#fff'
    }

})