import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import moment from 'moment'
import styles from './styles'

export default LastConverted = ({date,base,quote,conversionRate}) => (
    <Text style={styles.smalltext}>
       1 {base} = {conversionRate} {quote} as of {moment(date).format('D MMMM YYYY')} 
    </Text>
)

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
}
