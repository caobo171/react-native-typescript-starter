import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'


const StyledView = styled.View`
    height: 30px;
    width: 100%;
`

const Test = ()=>{
    return (<View>
        <Text>{'test'}</Text>
    </View>)
}

export default Test