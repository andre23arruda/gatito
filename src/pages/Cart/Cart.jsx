import React from 'react'
import { FlatList } from 'react-native'

// custom components
import MainScreen from '../../components/MainScreen/MainScreen'
import Service from '../../components/Service/Service'
import Status from './components/Status/Status'

// mocks
import { servicos } from '../../../mocks/servicos'

// styles
import styles from './styles'


function Cart() {
	return (
		<MainScreen>
            <Status services={ servicos }/>

            <FlatList
                style={ styles.list }
                data={ servicos }
                renderItem={ ({ item }) => <Service item={ item } fixedBlock={ true } buttonLabel={ 'Remover do Carrinho' } /> }
                keyExtractor={ item => item.nome }
                removeClippedSubviews={false}
            />
        </MainScreen>
	)
}

export default Cart
