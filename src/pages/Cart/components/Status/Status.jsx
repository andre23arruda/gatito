import React from 'react'
import { View, Text } from 'react-native'

// custom components
import CustomButton from '../../../../components/CustomButton/CustomButton'

// utils
import { calculateTotal, formatMoney } from '../../../../utils/money'

// styles
import styles from './styles'


function Status(props) {
    const total = calculateTotal(props.services)

	return (
        <View style={ styles.conteudo }>
            <View style={ styles.total }>
                <Text style={ styles.descricao }>
                    Total do Carrinho
                </Text>

                <Text style={ styles.valor }>
                    { formatMoney(total) }
                </Text>
            </View>

            <CustomButton
                text={ 'Concluir Pedido'}
                style={ styles.botao }
                invertido={ true }
            />
        </View>
	)
}

export default Status
