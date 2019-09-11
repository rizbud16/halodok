import React, { Component } from 'react'
import { Icon, Container, Header, Left, Right, Body, Title, Content, Text, Form, Item, Input, Label, Button } from 'native-base'
import { connect } from 'react-redux'
import { Picker, ToastAndroid, TouchableOpacity } from 'react-native'
import FormActions from '../Redux/FormRedux'

// Styles
import styles from './Styles/FormStyle'

class FormScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      age: null,
      gender: 'Laki-Laki',
      address: '',
      phone: '',
      bpjs: 'false'
    }
  }

  onSubmit = async() => {
    const { name, email, age, gender, address, phone, bpjs } = this.state

    if(name == '' || email == '' || !age || address == '' || phone == '') {
      alert('Isi semua')
    } else {
      await this.props.saveDataPasien({ ...this.state })

      ToastAndroid.show('Sukses menambahkan pasien', ToastAndroid.SHORT)

      this.props.navigation.goBack(null)
    }
  }

  render () {

    console.log(this.state.bpjs)
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Icon name="close" color="#ffffff" />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 1, alignSelf: 'center' }}>
            <Title>Tambah Pasien</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Form style={{ marginRight: 10}}>
            <Item floatingLabel>
              <Label>Nama Lengkap</Label>
              <Input onChangeText={(name) => this.setState({ name })} 
              />
            </Item>
              <Label style={{ marginLeft: 15, marginTop: 15 }}>Jenis Kelamin</Label>
              <Picker
                style={{marginLeft: 10, marginBottom: 15}}
                selectedValue={this.state.gender}
                onValueChange={(jk) => this.setState({ gender: jk })}
                >
                <Picker.Item label="Laki-Laki" value="Laki-Laki" />
                <Picker.Item label="Perempuan" value="Perempuan" />
            </Picker>
            <Item floatingLabel>
              <Label>Usia</Label>
              <Input keyboardType={"number-pad"} onChangeText={(age) => this.setState({ age })} />
            </Item>
            <Item floatingLabel>
              <Label>Alamat</Label>
              <Input onChangeText={(address) => this.setState({ address })} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input autoCapitalize={"none"} keyboardType={"email-address"} onChangeText={(email) => this.setState({ email })} />
            </Item>
            <Item floatingLabel>
              <Label>No. HP</Label>
              <Input keyboardType={"phone-pad"} onChangeText={(phone) => this.setState({ phone })} />
            </Item>
              <Label style={{ marginLeft: 15, marginTop: 15 }}>BPJS</Label>
              <Picker
                style={{marginLeft: 10}}
                selectedValue={this.state.bpjs}
                onValueChange={(isi) => this.setState({ bpjs: isi })}
                >
                <Picker.Item label="Ya" value="true" />
                <Picker.Item label="Tidak" value="false" />
            </Picker>
          </Form>
          <Button block style={{ margin: 15 }} onPress={() => this.onSubmit()}>
            <Text>TAMBAH</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDataPasien: value => dispatch(FormActions.saveDataPasien(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen)
