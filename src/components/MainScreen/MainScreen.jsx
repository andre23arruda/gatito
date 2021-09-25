import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'

// mocks
import createStyle, { colors } from '../../../stylesGlobal'

function MainScreen(props) {
	const styles = createStyle(props.backgroundColor)

	return (
		<SafeAreaView style={ styles.fill }>
			<StatusBar style="auto" backgroundColor={ colors.roxo }/>

            <Text style={{ marginTop: 10}}> </Text>

            { props.children }

		</SafeAreaView>
	)
}

export default MainScreen
