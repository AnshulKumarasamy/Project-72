import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WritingStory extends React.Component {

    constructor(){
        super();
        this.state={

        }
    }

    submitStory = async () => {

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <Header
                        backgroundColor={'#9c8210'}
                        centerComponent={{
                            text: 'Story Hub',
                            style: { color: '#fff', fontSize: 20 },
                        }}
                    />

                    <TextInput
                        style={styles.inputBox}
                    />

                    <TextInput
                        style={styles.inputBox}
                    />

                    <TextInput
                        style={styles.inputBox}
                        multiline={true}
                    />

                    <TouchableOpacity
                        onPress={this.submitStory}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        color: "blue",
        marginTop: 50,
        width: '100%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});