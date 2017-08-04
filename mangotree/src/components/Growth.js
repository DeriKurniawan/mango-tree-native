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
import { connect } from 'react-redux'
import { growthCount, getHarvast } from '../'

class Growth extends React.Component {
    constructor () {
        super()
        this.state = {
            maxAge: 20,
            olderAge: 18,
            currentAge: 0,
            image: ''
        }
    }

    ageHandleCounting () {
        this.setState({
           currentAge: this.state.currentAge=+this.props.age
        })
        this.props.getHarvest()
    }

    componentDidMount () {
        this.setTreeImage()
    }

    setTreeImage () {
       if(this.state.currentAge <= this.state.maxAge ){
           if(this.state.currentAge > 0 && this.state.currentAge < 7){
               this.setState({
                   image: "../assets/1.png"
               })
           } else if(this.state.currentAge > 6 && this.currentAge < 13){
               this.setState({
                   image: "../assets/2.png"
               })
           } else if(this.state.currentAge > 12 && this.currentAge < 18){
               this.setState({
                   image: "../assets/3.png"
               })
           } else {
               this.setState({
                   image: "../assets/4.png"
               })
           }
       } else {
           this.setState({
                   image: "../assets/0.png"
               })
       }
    }

    render () {
        return (
            <View style={Styles.container}>
                <Text style={{fontSize: 15}}>
                    This is <Text style={Styles.text}>{this.props.name}</Text> he is <Text style={Styles.text}>{this.state.currentAge}</Text> years old
                </Text>
                <Text style={{fontSize: 15}}>
                    You get <Text style={Styles.text}>{this.props.harvest}</Text> fruits
                </Text>
                <Image source={{uri = this.state.image}} />
                <TouchableOpacity>
                    <Button 
                        title="Lets Growth"
                        accessibilityLabel="go growing"
                        color="#39a087"
                        onPress={this.ageHandleCounting()}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#39a087'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

const mapStateToProps = (state) => {
    age: state.MangoReducer.age
    harvest: state.HarvestReducer.harvest
    name: state.UserReducer.name
}

const mapDispatchToProps = (dispatch) => {
    growthCount: () => { dispatch(growthCount())}
    getHarvest: () => { dispatch(getHarvest())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Growth)