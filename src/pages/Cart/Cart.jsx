import React from 'react'
import { FlatList } from 'react-native'

// components
import MainScreen from '../../components/MainScreen/MainScreen'
import Service from './components/Service/Service'
import Status from './components/Status/Status'

// mocks
import { servicos } from '../../../mocks/servicos'
import styles from './styles'


function Cart() {
	return (
		<MainScreen>
            <Status services={ servicos }/>

            <FlatList
                style={ styles.list }
                data={ servicos }
                renderItem={ ({ item }) => <Service item={ item } /> }
                keyExtractor={ item => item.nome }
            />
        </MainScreen>
	)
}

export default Cart
