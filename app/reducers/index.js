import {combineReducers} from 'redux'
import theme from './theme'
import currencies from './currencies'

export default combineReducers({
    currencies,
    theme
})