import React, { Component } from 'react'
import { Icon, Container, Header,Left, Right, Body, Title, Content, Text, Form, Item, Input, Label, Button } from 'native-base'
import { connect } from 'react-redux'
import { Picker } from 'react-native'
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
      address: '',
      phone: '',
      bpjs: ''
    }
  }

  onSubmit = async() => {
    const { name, email, age, address, phone, bpjs } = this.state

    if(name == '' || email == '' || !age || address == '' || phone == '') {
      alert('Isi semua')
    } else {
      await this.props.saveDataPasien({ ...this.state })

      alert('Sucess!')

      this.props.navigation.navigate('DataPasienScreen')
    }
  }

  onBpjs() {
    if(isi === 'true') {
      this.setState({ bpjs: 'true'})
    } else {
      this.setState({ bpjs: 'false'})
    }
    console.log(this.state.bpjs)
  }

  render () {

    console.log(this.state.bpjs)
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1, alignSelf: 'center' }}>
            <Title>Sign Up First</Title>
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
            <Item floatingLabel>
              <Label>Email</Label>
              <Input keyboardType={"email-address"} onChangeText={(email) => this.setState({ email })} />
            </Item>
            <Item floatingLabel>
              <Label>Umur</Label>
              <Input keyboardType={"number-pad"} onChangeText={(age) => this.setState({ age })} />
            </Item>
            <Item floatingLabel>
              <Label>Alamat</Label>
              <Input onChangeText={(address) => this.setState({ address })} />
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
            <Text>SIGN UP</Text>
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
