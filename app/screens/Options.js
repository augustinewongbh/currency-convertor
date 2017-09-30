import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView, StatusBar, Platform, Linking} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {ListItem, Separator} from '../components/List'
import {connectAlert} from '../components/Alert'

const ICON_PREFIX = Platform.OS === 'ios'? 'ios':'md'
const ICON_COLOR = '#868686'
const ICON_SIZE = 23

class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    }

    handleThemesPress = () => {
        console.log('pressed theme')
        this.props.navigation.navigate('Themes')
    }

    handleSitePress = () => {
        console.log('pressed site')
        Linking.openURL('http://fixer.io').catch(
            ()=> this.props.alertWithType('error','Sorry!',`Fixer.io can't be opened right now.`)
        )
    }
    render(){
        return (
            <ScrollView>
                <StatusBar barStyle="default" translucent={false} />

                <ListItem
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon = {
                        <Ionicons 
                        name={`${ICON_PREFIX}-arrow-forward`} 
                        color={ICON_COLOR} 
                        size={ICON_SIZE} />
                    }
                />
                <Separator/>
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon = {
                        <Ionicons 
                        name={`${ICON_PREFIX}-link`}
                        color={ICON_COLOR} 
                        size={ICON_SIZE} />
                    }
                    
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default connectAlert(Options)