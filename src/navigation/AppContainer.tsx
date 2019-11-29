// import HomeScreen from '@pages/HomeScreen
import { createAppContainer , createSwitchNavigator } from 'react-navigation'
import AddingScreen from '@pages/AddingScreen'
import HomeScreen from '@pages/HomeScreen'


const SwitchNavigator = createSwitchNavigator({
    AddingScreen,
    HomeScreen
} , {
    initialRouteName:'HomeScreen'
})

export default createAppContainer(SwitchNavigator)