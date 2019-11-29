import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import {NavigationContext} from 'react-navigation'

const HomeScreen = ()=>{

    const nav = useContext(NavigationContext)
    return (
        <View style={{
            height: 50,
            width: 100
        }}>
            <Button title={'test'} onPress={
                ()=> nav.navigate('AddingScreen')
            }/>
            <Text>{'Home Screen '}</Text>
        </View>
    )
}

export default HomeScreen ;