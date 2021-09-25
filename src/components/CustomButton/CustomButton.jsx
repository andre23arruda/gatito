import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import createStyle from './styles'


function CustomButton(props) {
    const styles = createStyle(props.pequeno, props.invertido)

	return (
        <TouchableOpacity style={ [styles.button, props.style] }>
            <Text style={ styles.text }>{ props.text } </Text>
        </TouchableOpacity>
	)
}

export default CustomButton
