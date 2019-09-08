import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import FormRedux from '../Redux/FormRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailPasienStyle'
import { Item } from 'native-base';

class DetailPasien extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {

    const { navigation } = this.props
    const item = navigation.getParam('item', 'no-data')
    const index = navigation.getParam('index', 'no-data')

    const { pasien } = this.props.form

    const { name, email, age, address, phone, bpjs } = pasien[index]

    return (
      <View>
        <Text>DetailPasien Container</Text>
        <Text>{name}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPasien)
