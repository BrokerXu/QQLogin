/**
 * Created by xuyan on 2017/6/20.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    AlertIOS,
    ToastAndroid
} from 'react-native';

let Platform = require('Platform');


let {width, height} = Dimensions.get('window');
export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    renderClick() {
        let userName = this.state.username;
        let password = this.state.password;
        let toastMsg = '登陆成功';
        if(userName===null||userName===""){
            toastMsg = '用户名不能为空';
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity(toastMsg, 1000, ToastAndroid.CENTER);
            } else {
                AlertIOS.alert(toastMsg);
            }
            return;
        }
        if(password===null||password===""){
            toastMsg = '密码不能为空';
            if (Platform.OS === 'android') {
                ToastAndroid.showWithGravity(toastMsg, 1000, ToastAndroid.CENTER);
            } else {
                AlertIOS.alert(toastMsg);
            }
            return;
        }
        toastMsg = '登陆成功';
        if (Platform.OS === 'android') {
            ToastAndroid.showWithGravity(toastMsg, 1000, ToastAndroid.CENTER);
        } else {
            AlertIOS.alert(toastMsg);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={styles.headerStyle}/>
                <TextInput placeholder='请输入用户名' clearButtonMode="always" underlineColorAndroid="transparent"
                           style={styles.inputStyle}
                           onChangeText={(username) => this.setState({username})}

                />
                <TextInput placeholder='请输入密码' clearButtonMode="always" secureTextEntry={true} password={true}
                           underlineColorAndroid="transparent" style={styles.inputStyle}
                           onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.renderClick()}
                >
                    <View style={styles.loginBtnStyle}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.loginQueStyle}>
                    <Text style={{color: '#73B5F9', marginLeft: 20, fontSize: 14, fontWeight: '400'}}>无法登录</Text>
                    <Text style={{color: '#73B5F9', marginRight: 20, fontSize: 14, fontWeight: '400'}}>新用户</Text>
                </View>

                <View style={styles.loginWayStyle}>
                    <Text style={{color: 'black', fontWeight: '400', fontSize: 15}}>其他登录方式 ：</Text>
                    <Image source={require('./img/icon3.png')} style={styles.loginWayLogoStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.loginWayLogoStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.loginWayLogoStyle}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: width,
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',

    },
    headerStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 50,
        marginBottom: 20
    },
    inputStyle: {
        textAlign: 'center',
        width: width * 0.9,
        height: 40,
        marginTop: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        color: 'black',
        fontWeight: '600'
    },
    loginBtnStyle: {
        width: width * 0.9,
        height: 40,
        marginTop: 20,
        backgroundColor: '#73B5F9',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginQueStyle: {
        flexDirection: 'row',
        width: width,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loginWayStyle: {
        position: 'absolute',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        bottom: 10,
        left: 10

    },
    loginWayLogoStyle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 8
    }

});
