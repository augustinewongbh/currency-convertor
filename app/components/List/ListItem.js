import React from 'react'
import PropTypes from 'prop-types'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from './styles'
import Icon from './Icon'

export default ListItem = ({
    text,
    onPress,
    customIcon=null,
    iconBackground,
    selected=false,
    checkmark=true,
    visible= true
}) => (
    <TouchableHighlight underlayColor={styles.underlayColor} onPress = {onPress}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected?
              <Icon iconBackground={iconBackground} checkmark={checkmark} visible={visible}/>  :<Icon/> }
            {customIcon}
        </View>
    </TouchableHighlight>
    
)

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark : PropTypes.bool,
    visible : PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string

}

