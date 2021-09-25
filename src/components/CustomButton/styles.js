import { StyleSheet } from 'react-native'
import { colors } from '../../../stylesGlobal'

export default (pequeno=false, invertido=false) => StyleSheet.create({
    button: {
        width: '40%',
        paddingVertical: pequeno ? 3 : 9,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: invertido ? colors.laranja : colors.roxo,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: invertido ? colors.roxo : colors.laranja,
    }
})