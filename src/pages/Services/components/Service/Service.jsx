import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

// components
import CustomButton from '../../../../components/CustomButton/CustomButton'
import NumberInput from '../../../../components/NumberInput/NumberInput'
import { formatMoney } from '../../../../utils/money'

import styles from './styles'

const Service = ({ item }) => {
    const [amount, setAmount] = useState('1')

	return (
        <>
        <View style={ styles.informacao }>
            <Text style={ styles.nome }>
                { item.nome }
            </Text>

            <Text style={ styles.descricao }>
                { item.descricao }
            </Text>

            <Text style={ styles.preco }>
                { formatMoney(item.preco) }
            </Text>
        </View>

        <View style={ styles.carrinho }>
            <View>
                <View style={ styles.valor }>
                    <Text>Quantidade: </Text>
                    <NumberInput value={ amount } setValue={ setAmount }/>
                </View>

                <View style={ styles.valor }>
                    <Text>Preço: </Text>

                    <Text style={ styles.preco }>
                        { formatMoney(Number(item.preco) * Number(amount)) }
                    </Text>
                </View>
            </View>

            <CustomButton />
        </View>

        <View style={ styles.divisor }></View>

        </>
	)
}

export default Service
