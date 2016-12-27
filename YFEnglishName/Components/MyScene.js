import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class MyScene extends Component {
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        console.log(this.props.title, 'MyScene');
        return (
            <View>
                <Text style={{'color':'#000'}}>Hi! My name is {this.props.title}.</Text>
            </View>
        )
    }
}

