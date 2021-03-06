import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Ticket = ({ticket}) => {

    return (
        <View style={styles.listing}>
            <Text style={styles.text}>{ticket.title}</Text>
            <Text style={styles.text}> - ${ticket.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {

    }
})

export default Ticket

