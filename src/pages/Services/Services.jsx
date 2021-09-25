import React from 'react'
import { FlatList } from 'react-native'

// components
import Service from './components/Service/Service'
import MainScreen from '../../components/MainScreen/MainScreen'

// mocks
import { servicos } from '../../../mocks/servicos'


function Services() {
	return (
		<MainScreen backgroundColor={ 'white' }>
            <FlatList
                data={ servicos }
                renderItem={ ({ item }) => <Service item={ item } /> }
                keyExtractor={ item => item.nome }
            />
        </MainScreen>
	)
}

export default Services
