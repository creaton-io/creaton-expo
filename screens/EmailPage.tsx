import React from 'react'; 
import { 
    StyleSheet,
    Text, 
    View,
    Button,
    SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import tailwind from 'tailwind-rn';

  // Will need to integrate Magic Link 

class EmailPage extends React.Component { 
    render() { 
        return(
            <SafeAreaView>
                <View>
                    
                    <View>
                        <Text>Email</Text>
                    </View>

                    <View style={tailwind('pt-80')}></View>

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
