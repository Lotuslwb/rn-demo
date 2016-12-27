import React, {Component} from 'react';
import {
    AsyncStorage,
} from 'react-native';


var STORAGE_KEY = '@NameStorage:names_array';

var NameStorage = {
    //保存名字列表
    setNames(names) {
        names = names.map((name)=> JSON.stringify(name)).join('***');

        return AsyncStorage.setItem(STORAGE_KEY, names)
            .catch((error)=>console.error('AsyncStorage setNames--错误' + error.message))
    },

    //获取名字列表
    getAllNames() {

        return AsyncStorage.getItem(STORAGE_KEY).then((value)=> {
            if (value != null) {
                return value.split('***');
            } else {
                return null;
            }
        }).catch((error)=>console.error('AsyncStorage setNames--错误' + error.message))
    }
}

export default NameStorage