import React, {
    Component
} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import logoImg from '../../Images/logo.png';

import Wallpaper from './Wallpaper';

export default class Login extends React.Component {

    render() {
        console.log(this.props);
        return (
          <Wallpaper >

          </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
});
