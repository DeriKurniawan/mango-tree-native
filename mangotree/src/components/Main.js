import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { setName } from '../redux/actions'

class Main extends React.Component {
    constructor () {
        super()
        this.state = {
            name: 'Tree'
        }
    }

    render () {
        return (
            <View style={Styles.container}>
                <Text>
                    WELLCOME!
                </Text>
                <TextInput 
                    onChangeText={(text) => {this.setState({name: text})}}
                    placeholder="Input your tree\'s name here!"
                />
                <TouchableOpacity>
                    <Button 
                        onPress={this.setTreeName(this.state.name)}
                        title="Lets Start"
                        accessibilityLabel="Ready"
                        color="#39a087"
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet({
    container: {
        flex: 1,
        background: '#39a087'
    },
    text: {
        fontweigth: 'bold',
        fontSize: 24
    }
})

const mapDispatchToProps = (dispatch) => {
    setTreeName: (name) => { dispatch(setName(name)) } 
}

export default connect(null, mapDispatchToProps)(Main)