import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import createStyle from './styles'


function CustomButton(props) {
    const styles = createStyle()

	return (
        <TouchableOpacity style={ styles.button }>
            <Text style={ styles.text }>Adicionar </Text>
        </TouchableOpacity>
	)
}

export default CustomButton
