/**
 * Created by lotuslwb on 16/12/19.
 */


var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


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
    ScrollView,
    findNodeHandle,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import NameDetail from './NameDetail';

import NameStyle from '../Style/NameStyle';

export default class NameIndex extends Component {
    constructor(props) {
        super(props);   //这一句不能省略，照抄即可

        this.state = {text: '', gender: true, loading: false};

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} ref='scroll' keyboardShouldPersistTaps={true}>
                    <Spinner visible={this.state.loading}></Spinner>
                    <Image source={require('./img/bg1.png')} style={styles.backgroundImg}>
                        <View style={styles.mid}
                              onStartShouldSetResponderCapture={(e)=>this.onStartShouldSetResponderCapture(e)}>
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
                                    ref='nameInput'
                                    placeholder="请输入你的中文名"
                                    onChangeText={(text) => this.setState({text})} value={this.state.text}
                                    onFocus={this.scrollViewTo.bind(this)}
                                    onEndEditing={()=>{this.refs.scroll.scrollTo({x:0,y:0})}}
                                />
                            </View>
                            <TouchableOpacity style={styles.submit} onPress={()=>this.onPressSubmit()}>
                                <Text style={styles.submitText}>生成英文名</Text>
                            </TouchableOpacity>

                        </View>
                    </Image>
                </ScrollView>
            </View>
        );
    }

    onStartShouldSetResponderCapture(e) {
        const target = e.nativeEvent.target;
        if (target !== findNodeHandle(this.refs.nameInput)) {
            this.refs.nameInput.blur();
        }
    }

    scrollViewTo(e) {
        let target = e.nativeEvent.target;
        let scrollLength = 120;
        this.refs.scroll.scrollTo({x: 0, y: scrollLength});
    }

    onPressSubmit() {
        var data = {'name': this.state.text, 'sex': this.state.gender ? 0 : 1};
        //校验
        if (!data.name.length) {
            Alert.alert('啊哦，请正确输入你的中文名字哦！');
            return false;
        }
        if (!this._isChinese(data.name)) {
            Alert.alert('啊哦，请正确输入你的中文名字哦!');
            return false;
        }

        this.setState({loading: true});


        this.fetchName(data).then((data)=> {
            if (!data || data.length <= 0) {
                Alert.alert('摔，竟然匹配不到，一定是我不认识你的名字，换个同音字试试吧！');
                return false;
            }
            this.setState({loading: false});
            const {navigator} = this.props;
            if (navigator) {
                navigator.push({
                    name: '详情页',
                    component: NameDetail,
                    params: {data: data}
                })
            }
        });

    }

    fetchName(data) {
        var api = 'http://page.ctrlc.cc/api/name.php';
        return fetch(api, {params: data})
            .then((response)=>response.json())
            .then((data)=> {
                return data;
            }).catch((error)=> {
                console.warn(JSON.stringify(error));
            });
    }

    _isChinese(temp) {
        if (/^[\u4e00-\u9fa5]+$/i.test(temp)) {
            return true;
        } else {
            return false;
        }
    }

}

const styles = StyleSheet.create(NameStyle);