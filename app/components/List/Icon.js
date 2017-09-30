import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {View,Image} from 'react-native'
import styles from './styles'

export default Icon = ({checkmark, visible,iconBackground}) => {
    const iconStyles = [styles.icon]

    visible && iconStyles.push(styles.iconVisible)

    iconBackground && iconStyles.push({backgroundColor: iconBackground})

    return (
    <View style={iconStyles}>
        {checkmark&& <Image resizeMode="contain" style={styles.checkIcon} source={require('./images/check.png')}/>}
    </View>)

}

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string
}