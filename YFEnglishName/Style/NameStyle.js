import {Dimensions,} from 'react-native';


var NameStyle = {

    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },

    ActivityIndicator: {
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },

    container: {
        flex: 1,
        height: Dimensions.get('window').height,
    },

    backgroundImg: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: null,
        resizeMode: 'cover',
    },

    mid: {
        flex: 1,
        //沿着主轴的排列方式
        justifyContent: 'center',
        //沿着次轴
        alignItems: 'center',

        position: 'relative',
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
    },
    resultInfo: {
        width: 230,
        height: 155,
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
        position: 'relative',
    },
    CNName: {
        fontSize: 18,
    },
    ENName: {
        fontSize: 18,
    },
    means: {
        fontSize: 13,
        marginTop: 5,
    },
    qcode: {
        width: 100,
        height: 100,
    },
    info: {
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 18,
    },
    logo: {
        width: 64,
        height: 65,
        position: 'absolute',
        zIndex: 2,
        right: -15,
        top: -15,
    },
    playicon: {
        marginTop: 5,
        width: 25,
        height: 25,
    }
};

export default NameStyle;