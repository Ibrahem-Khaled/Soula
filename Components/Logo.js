import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = ({ w, h }) => {
    return (
        <>
            <Image style={{ width: w ? w : logoStyles.logo.width, height: h ? h : logoStyles.logo.height, alignSelf: logoStyles.logo.alignSelf }}
                source={require('../New/AG/images/headerLogo.png')} />
        </>
    );
}

const logoStyles = StyleSheet.create({
    logo: {
        width: 319, height: 330,
        alignSelf: 'center'
    },
});


export default Logo;