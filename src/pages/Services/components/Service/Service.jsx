import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// components
import CustomButton from '../../../../components/CustomButton/CustomButton'
import NumberInput from '../../../../components/NumberInput/NumberInput'
import { formatMoney } from '../../../../utils/money'

import styles from './styles'

const Service = ({ item }) => {
    const [amount, setAmount] = useState(1)
    const [expand, setExpand] = useState(false)

	return (
        <>
        <TouchableOpacity
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
        </TouchableOpacity>

        { expand &&
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

                <CustomButton text={ 'Adicionar ao Carrinho '} />
            </View>
        }

        <View style={ styles.divisor }></View>

        </>
	)
}

export default Service
