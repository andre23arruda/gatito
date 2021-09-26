import React from 'react'

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// pages
import Services from './src/pages/Services/Services'
import Cart from './src/pages/Cart/Cart'

// styles
import { colors } from './stylesGlobal';

const Tab = createBottomTabNavigator();


export default function Routes() {
	return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.roxo,
                    tabBarInactiveTintColor: colors.claro,
                    tabBarActiveBackgroundColor: colors.roxo,
                    tabBarInactiveBackgroundColor: colors.laranja,
                    tabBarStyle: {
                        height: 60
                    },
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelStyle: {
                        width: '100%',
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        paddingTop: 21,
                        marginTop: 3,
                        backgroundColor: colors.laranja
                    }

                }}
            >
                <Tab.Screen name="Serviços" component={ Services } />
                <Tab.Screen name="Carrinho" component={ Cart } />
            </Tab.Navigator>
        </NavigationContainer>
	)
}
