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

import Video from 'react-native-video';


//为啥只能用require呢~~
var WeChat = require('react-native-wechat');


export default class NameDetail extends Component {

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可

        WeChat.registerApp('wxeb46801f284f2bef')

        this.state = {index: 0, paused: true, item: this.props.data[0]}
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

                            <TouchableOpacity onPress={()=>this.onPlayVideo()}>
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

                        <TouchableOpacity style={styles.submit} onPress={()=>this.onShareToSession()}>
                            <Text style={styles.submitText}>分享微信</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submit} onPress={()=>this.onShareToTimeline()}>
                            <Text style={styles.submitText}>分享朋友圈</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.info}>有了英文名就要学好英文，{'\n'} 扫码二维码关注EF英孚亲子口袋英语</Text>
                        </View>
                        <Image source={require('./img/qcode22.jpg')} style={styles.qcode}></Image>
                    </View>
                </Image>


                <Video source={{uri: this.state.item.mp3}} // Can be a URL or a local file.
                       rate={1.0}                   // 0 is paused, 1 is normal.
                       volume={1.0}                 // 0 is muted, 1 is normal.
                       muted={false}                // Mutes the audio entirely.
                       paused={this.state.paused}               // Pauses playback entirely.
                       repeat={false}                // Repeat forever.
                       onEnd={()=>this.onVideoEnd()}           // Callback when playback finishes

                    // onLoadStart={this.loadStart} // Callback when video starts to load
                    // onLoad={this.setDuration}    // Callback when video loads
                    // onProgress={this.setTime}    // Callback every ~250ms with currentTime

                    // onError={this.videoError}    // Callback when video cannot be loaded
                ></Video>


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

    onPlayVideo() {
        this.setState({
            paused: false
        })
    }

    onVideoEnd() {
        console.warn('onVideoEnd');
        console.warn(this.state.paused);
        this.setState({
            paused: true
        })

    }

    onShareToTimeline() {
        WeChat.isWXAppInstalled()
            .then((isInstalled) => {
                if (isInstalled) {
                    var sex = this.state.item.sex == '女生' ? 0 : 1;
                    WeChat.shareToTimeline({
                        title: '原来最适合我的英文名是' + this.state.item.englishname + '，你也来试试吧！',
                        description: '',
                        thumbImage: 'http://page.ctrlc.cc/name/img/logo.png',
                        type: 'news',
                        webpageUrl: 'http://page.ctrlc.cc/name/share.html?name=' + this.state.item.englishname + '&sex=' + sex + '&index=' + this.state.index,
                    })
                        .catch((error) => {
                            console.warn(error.message);
                        });
                } else {
                    console.warn('没有安装微信软件，请您安装微信之后再试');
                }
            });
    }

    onShareToSession() {
        WeChat.isWXAppInstalled()
            .then((isInstalled) => {
                if (isInstalled) {
                    var sex = this.state.item.sex == '女生' ? 0 : 1;
                    WeChat.shareToSession({
                        title: '原来最适合我的英文名是' + this.state.item.englishname + '，你也来试试吧！',
                        description: '',
                        thumbImage: 'http://page.ctrlc.cc/name/img/logo.png',
                        type: 'news',
                        webpageUrl: 'http://page.ctrlc.cc/name/share.html?name=' + this.state.item.englishname + '&sex=' + sex + '&index=' + this.state.index,
                    })
                        .catch((error) => {
                            console.warn(error.message);
                        });
                } else {
                    console.warn('没有安装微信软件，请您安装微信之后再试');
                }
            });
    }
}

const styles = StyleSheet.create(NameStyle);

