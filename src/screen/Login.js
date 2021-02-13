import React, {useState} from 'react';
import { View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native';
import { Text, Item, Button, Input} from 'native-base';
import LogoApp from '../public/img/chatLogo.png';
export default function Login(props){
    const { setUserName } = props
    const [name, setName] = useState(null);

    const onSubmit = () => {
        setUserName(name)
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"  />
            <View>
                <Image source={LogoApp} resizeMode="contain" style={styles.logo} />
            </View>
            <Item>
                <Input 
                    placeholder="Nombre de usuario" 
                    style={{color: '#fff' }}
                    placeholderTextColor="#fff"
                    value={name}
                    onChange={ (e) => setName(e.nativeEvent.text) }
                />
            </Item>
            <Button style={styles.btnLogin} onPress={onSubmit}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        //margenes para los costados
        marginHorizontal: 50,
        //margen hacia arriba
        marginVertical: 100
    },
    logo:{
        width: '100%',
        height: 200,
        marginBottom: 30
    },
    btnLogin:{
        marginTop: 40,
        width: '100%',
        justifyContent:'center',
        backgroundColor: '#0098d3'
    }

})