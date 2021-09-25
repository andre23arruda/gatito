import React, { useState } from 'react'
import { View, Text } from 'react-native'

// components
import CustomButton from '../../../../components/CustomButton/CustomButton'
import NumberInput from '../../../../components/NumberInput/NumberInput'
import { formatMoney } from '../../../../utils/money'

import styles from './styles'


const Service = ({ item }) => {
    const [amount, setAmount] = useState(item.quantidade)

	return (
        <>
        <View
            style={ styles.informacao }
            onPress={ () => setExpand(!expand)}
        >
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
                    <NumberInput value={ String(amount) } setValue={ setAmount }/>
                </View>

                <View style={ styles.valor }>
                    <Text>Preço: </Text>

                    <Text style={ styles.preco }>
                        { formatMoney(item.preco * amount) }
                    </Text>
                </View>
            </View>

            <CustomButton text={ 'Remover do Carrinho '} />
        </View>


        <View style={ styles.divisor }></View>

        </>
	)
}

export default Service
