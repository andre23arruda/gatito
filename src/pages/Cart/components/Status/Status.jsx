import React from 'react'
import { View, Text } from 'react-native'

// components
import CustomButton from '../../../../components/CustomButton/CustomButton'
import { formatMoney } from '../../../../utils/money'

import styles from './styles'


const Status = (props) => {
    const total = props.services.reduce((accum, item) => accum + (item.preco * item.quantidade) , 0);

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
