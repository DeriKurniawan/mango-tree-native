import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

class GameOver extends React.Component {
    render () {
        return (
            <View style={Styles.container}>
                 <Text style={{fontSize: 15}}>
                    This is <Text style={Styles.text}></Text> he is <Text style={Styles.text}>Death</Text>
                </Text>
            </View>
        )
    }
}

const Styles = StyleSheet({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default GameOver