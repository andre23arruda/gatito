import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// custom components
import CustomButton from '../CustomButton/CustomButton'
import NumberInput from '../NumberInput/NumberInput'

// utils
import { formatMoney } from '../../utils/money'

// styles
import styles from './styles'


function Service({ item, fixedBlock, buttonLabel }) {
    const [amount, setAmount] = useState(1)
    const [expand, setExpand] = useState(false)

	return (
        <>
        { !fixedBlock ? (
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
        )
        : (
            <View style={ styles.informacao } >
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
        )}

        { (expand || fixedBlock) &&
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

                <CustomButton text={ buttonLabel } />
            </View>
        }

        <View style={ styles.divisor }></View>

        </>
	)
}

export default Service
