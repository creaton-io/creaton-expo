import React, { useState } from 'react'; 
import { 
    StyleSheet,
    Text, 
    View,
    TextInput,
    Button,
    SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import tailwind from 'tailwind-rn';

  // Will need to integrate Magic Link 

const [text, setText] = useState('');

class EmailPage extends React.Component { 


    render() { 
        return(
            <SafeAreaView>
                <View>
                    
                    <View>
                        <Text>Email</Text>
                    </View>

                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter Your Email"
                        onChangeText={text => setText(text)}
                        defaultValue={text}
                    />

                    <TextInput
                        style={{height: 40}}
                        placeholder="Re-enter Email"
                        onChangeText={text => setText(text)}
                        defaultValue={text}
                    />

                    <View style={tailwind('pt-60')}></View>

                    <EnterEmailBtn
                        onPress={EnterBtn}
                        color="purple"
                        title="Sign Up With Email"
                        accessibilityLabel="Email Button" 
                    />
                </View>
            </SafeAreaView>
        );
    }
}



let EnterEmailBtn = styled.Button`

`;


function EnterBtn() {

}
