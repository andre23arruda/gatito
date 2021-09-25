import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, Text } from 'react-native'

// components
import Service from './components/Service/Service'

// mocks
import { servicos } from '../../../mocks/servicos'


function Services() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="auto" />

            <Text style={{ marginTop: 10}}> </Text>

            <FlatList
                data={ servicos }
                renderItem={ ({ item }) => <Service item={ item } /> }
                keyExtractor={ item => item.nome }
            />

		</SafeAreaView>
	)
}

export default Services
