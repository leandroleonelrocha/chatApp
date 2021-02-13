import React, {useEffect, useState, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Content, Header, Body, Title } from 'native-base';
import Input from '../components/Input';
import firebase from '../utils/firebase';
import moment from 'moment';
import 'firebase/database';
import Message from '../components/Message';
import {map} from 'lodash';
export default function Chat(props){
    const { userName  } = props;
    const [ messages, setMessage ] = useState([]);
    const chatScrollRef = useRef();
    
    useEffect( () =>  {
        const chat = firebase.database().ref('general');
        chat.on('value', (snapshot) => {
            setMessage(snapshot.val());
        });

    }, []);

    useEffect( () =>  {
        chatScrollRef.current.scrollTo({ y: 10000000000000000 })

    }, [messages]);

    const enviarMensaje = (mensaje) => {
        const time = moment().format("hh:mm a")
        //console.log(mensaje)
        firebase
            .database()
            .ref('general')
            .push({
                userName: userName,
                text: mensaje,
                time
            });
    }

    return(
        <>  
            <Header style={styles.header} iosBarStyle="light-content" >
                <Body>
                    <Title style={styles.title}>Chat</Title>
                </Body>
            </Header>
            
            <View style={styles.content}>
                <ScrollView srtle={styles.scrollView} ref={chatScrollRef}>
                    {map (messages, (mensaje, index) => (
                        <Message 
                            mensaje={mensaje}
                            key={index}
                            name={userName}
                        />
                    ) )}
                </ScrollView>
                <View style={styles.viewInput}>
                    <Input  enviarMensaje={enviarMensaje} />
                </View>
            </View>
   
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#16202b'
    },
    title:{
        color:'#fff'
    },
    scrollView:{
      //  height:300
    },
    content:{
        //flex: 1,
        //justifyContent: "space-between",
        
    },
    viewInput:{
        marginVertical: 100
    },
    text:{
        color: '#fff'
    }
   
})