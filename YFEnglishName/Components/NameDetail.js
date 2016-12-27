import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Switch,
    Alert,
} from 'react-native';


import NameStyle from '../Style/NameStyle';

import NameIndex from './NameIndex';


export default class NameDetail extends Component {

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = {index: 0, item: this.props.data[0]}
    }

    render() {
        var bgArray = [];
        bgArray.push(require('./img/bg1.png'));
        bgArray.push(require('./img/bg2.png'));
        bgArray.push(require('./img/bg3.png'));
        bgArray.push(require('./img/bg4.png'));
        bgArray.push(require('./img/bg5.png'));
        bgArray.push(require('./img/bg6.png'));
        var uri = bgArray[Math.floor(Math.random() * 6)];

        return (
            <View style={styles.container}>
                <Image source={uri} style={styles.backgroundImg}>
                    <View style={styles.mid}>

                        <View style={styles.resultInfo}>
                            <Text style={styles.CNName}>{this.state.item.chinesename}</Text>
                            <Text style={styles.ENName}>{this.state.item.englishname}</Text>

                            <TouchableOpacity>
                                <Image source={require('./img/playicon.png')} style={styles.playicon}></Image>
                            </TouchableOpacity>

                            <Text style={styles.means}>{this.state.item.meaning}</Text>

                            <Image source={require('./img/logo.png')} style={styles.logo}></Image>
                        </View>

                        <TouchableOpacity style={styles.submit} onPress={()=>this.onSwitchItems()}>
                            <Text style={styles.submitText}>不喜欢 换一个</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submit} onPress={()=>this.gotoIndex()}>
                            <Text style={styles.submitText}>给别人取一个</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submit} onPress={()=>this.onPressSubmit()}>
                            <Text style={styles.submitText}>晒一晒</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.info}>有了英文名就要学好英文，{'\n'} 长按二维码关注EF英孚亲子口袋英语</Text>
                        </View>
                        <Image source={require('./img/qcode22.jpg')} style={styles.qcode}></Image>
                    </View>
                </Image>
            </View>
        )
    }

    onSwitchItems() {
        var len = this.props.data.length;
        var index = this.state.index + 1;
        if (index >= len) {
            index = 0;
        }
        this.setState({
            index: index,
            item: this.props.data[index]
        })
    }

    gotoIndex() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: '首页',
                component: NameIndex,
                params: {}
            })
        }
    }

    onPressSubmit() {

    }
}

const styles = StyleSheet.create(NameStyle);

