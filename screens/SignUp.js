import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image source={require('../assets/login1.png')} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Let's Get Started</Text>
                <Text style={styles.textBody}>Create an account to get all features</Text>
                <Input name="Full Name" icon="user" />
                <Input name="Email" icon="envelope" />
                <Input name="Phone" icon="phone" />
                <Input name="Password" icon="lock" pass={true} />
                <Input name="Confirm Password" icon="lock" pass={true} />
                <Submit color="#0251ce" title="CREATE" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody5}>Already have an account ?</Text>
                    <Text style={[styles.textBody5, {color: 'blue'}]} onPress={() => props.navigation.navigate('Home')}> Login here</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        // fontFamily: 'Foundation',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
        // fontFamily: 'Foundation'
    },
    textBody5: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        margin: 8,
        
        

    },
});

export default SignUp;