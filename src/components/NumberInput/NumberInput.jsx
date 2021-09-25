import React from 'react'
import { TextInput } from 'react-native'

// utils
import { removeUselessZero, valueIsNumber } from '../../utils/validator'


// styles
import styles from './styles'


function NumberInput({ value, setValue }) {

    function handleChangeValue(newValue) {
        if (valueIsNumber(newValue)) {
            setValue(removeUselessZero(newValue))
        }
        return
    }

	return (
        <TextInput
            keyboardType='number-pad'
            value={ value }
            style={ styles.input }
            onChangeText={ text => handleChangeValue(text) }
        />
	)
}

export default NumberInput
