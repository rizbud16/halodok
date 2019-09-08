import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import DetailPasien from '../Containers/DetailPasien'
import DataPasienScreen from '../Containers/DataPasienScreen'
import FormScreen from '../Containers/Form'

import styles from './Styles/NavigationStyles'

/*
// Manifest of possible screens
const PrimaryNav = createSwitchNavigator({
  DetailPasien: { screen: DetailPasien },
  DataPasienScreen: { screen: DataPasienScreen },
  FormScreen: { screen: FormScreen },
  DataPasienScreen: { screen: DataPasienScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FormScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
*/

const AppStack = createStackNavigator({  DataPasienScreen: DataPasienScreen, DetailPasien: DetailPasien })
const FormStack = createStackNavigator({ FormScreen: FormScreen })

const PrimaryNav = createSwitchNavigator({
  App: AppStack,
  Form: FormStack
}, {
  initialRouteName: 'Form'
})

export default createAppContainer(PrimaryNav)
