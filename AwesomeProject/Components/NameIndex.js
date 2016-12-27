/**
 * Created by lotuslwb on 16/12/19.
 */


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Switch,
} from 'react-native';


import MyScene from './MyScene';


export default class NameIndex extends Component {
    constructor(props) {
        super(props);   //这一句不能省略，照抄即可

        this.state = {text: '', gender: true};

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/bg1.png')} style={styles.backgroundImg}>
                    <View style={styles.mid}>
                        <Image source={require('./img/index-banner.png')} style={styles.indexBanner}/>
                        <View style={styles.SwitchView}>
                            <Text style={styles.SwitchText}>男/女</Text>
                            <Switch
                                style={styles.Switch}
                                onValueChange={(value) => this.setState({gender: value})}
                                value={this.state.gender}/>
                        </View>
                        
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入你的中文名"
                                onChangeText={(text) => this.setState({text})} value={this.state.text}
                            />
                        </View>
                        <TouchableOpacity style={styles.submit} onPress={()=>this.onPressSubmit()}>
                            <Text style={styles.submitText}>生成英文名</Text>
                        </TouchableOpacity>

                    </View>
                </Image>
            </View>
        );
    }

    onPressSubmit() {
        console.log('1');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    backgroundImg: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
    },

    mid: {
        flex: 1,
        //沿着主轴的排列方式
        justifyContent: 'center',
        //沿着次轴
        alignItems: 'center',
    },
    indexBanner: {
        width: 333,
        height: 291,
    },
    input: {
        width: 223,
        height: 35,
        backgroundColor: '#FFF',
        borderRadius: 4,
        fontSize: 15,
        color: '#000',
        marginTop: 15,
        paddingLeft: 16,
    },
    submit: {
        width: 223,
        height: 35,
        backgroundColor: '#39c605',
        borderRadius: 4,
        marginTop: 15,
        justifyContent: 'center',
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    SwitchView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 223,
        height: 30,
    },
    SwitchText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    Switch: {
        flex: 1,
        width: 200,
    }

});