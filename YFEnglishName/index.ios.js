// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
//


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';

import NameIndex from './Components/NameIndex';

export default class YFEnglishName extends Component {
    render() {

        return (
            <Navigator
                initialRoute={{ name: '首页', component: NameIndex }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }}></Navigator>
        );


    }

}


AppRegistry.registerComponent('YFEnglishName', () => YFEnglishName);