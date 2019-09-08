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

const PrimaryNav = createStackNavigator({
  List: { screen: DataPasienScreen },
  Form: { screen: FormScreen },
  Detail: { screen: DetailPasien }
}, {
  initialRouteName: 'List'
})

export default createAppContainer(PrimaryNav)
