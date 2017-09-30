import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView,View,StatusBar, Platform} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {connect} from 'react-redux'

import {ListItem, Separator} from '../components/List'
import {changePrimaryColor} from '../actions/theme'

const styles = EStyleSheet.create({
    $Blue: '$primaryBlue',
    $Orange: '$primaryOrange',
    $Green: '$primaryGreen',
    $Purple: '$primaryPurple',
})

const themecolors = ['Blue','Orange','Green','Purple']

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    }

    handleThemePress= (color) => {
        this.props.dispatch(changePrimaryColor(color))
        this.props.navigation.goBack()
    }

    render(){
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false}/>
                {themecolors.map(color=>(
                    <View key={color}>
                    <ListItem
                        text={color}
                        onPress={()=>this.handleThemePress(styles[`$${color}`])}
                    selected
                    checkmark={false}
                    iconBackground={styles[`$${color}`]}
                    />
                    <Separator/>
                    </View>
                ))}
                               
            </ScrollView>
        )
    }
}

export default connect()(Themes)