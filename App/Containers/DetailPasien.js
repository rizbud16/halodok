import React, { Component } from 'react'
import { Container, Body, Content, Text, Card, CardItem } from 'native-base'
import { Images } from '../Themes'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import FormRedux from '../Redux/FormRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailPasienStyle'

class DetailPasien extends Component {
  static navigationOptions = {
     title: 'Detail Pasien'
  }

  render () {

    const { navigation } = this.props
    const index = navigation.getParam('index', 'no-data')

    const { pasien } = this.props.form

    const { name, email, age, gender, address, phone, bpjs } = pasien[index]

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                {gender === 'Perempuan' ? <Image style={{ alignSelf: 'center' }} source={Images.female} /> : <Image style={{ alignSelf: 'center' }} source={Images.male} />}
                <Text>Nama Pasien : {name}{"\n"}Jenis Kelamin : {gender}{"\n"}Usia : {age}</Text>
                <Text>Alamat : {address}{"\n"}No. HP : {phone}{"\n"}Email : {email}</Text>
                {bpjs === 'true' ? <Text>Pasien BPJS</Text> : <Text>Bukan Pasien BPJS</Text>}
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
