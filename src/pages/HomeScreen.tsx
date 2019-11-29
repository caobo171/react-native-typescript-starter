import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import {NavigationContext} from 'react-navigation'
import { add } from '@/store/math/functions'
import { useNumber } from '@/store/math/hooks'

const HomeScreen = ()=>{

    const nav = useContext(NavigationContext)
    const value = useNumber()
    return (
        <View style={{
            height: 50,
            width: 100
        }}>
            <Button title={'test'} onPress={()=>
                add(3)
            }/>
            <Text>{`${value}`}</Text>
            <Text>{'Home Screen '}</Text>
        </View>
    )
}

export default HomeScreen ;