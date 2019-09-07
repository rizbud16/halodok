import React, { Component } from 'react'
import { Icon, Container, Header,Left, Right, Body, Title, Content, Text, Form, Item, Input, Label, Button } from 'native-base'
import { connect } from 'react-redux'
import FormActions from '../Redux/FormRedux'

// Styles
import styles from './Styles/FormStyle'

class FormScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      age: null,
      phone: '',
      bpjs: false
    }
  }

  onSubmit = async() => {
    const { name, email, age, phone, bpjs } = this.state

    if(name == '' || email == '' || !age || phone == '' ) {
      alert('Isi semua')
    } else {
      await this.props.saveDataPasien({ ...this.state })

      alert('Sucess!')
    }
  }

  render () {
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
          <Form>
            <Item floatingLabel>
              <Label style={{ marginLeft: 10 }}>Nama Lengkap</Label>
              <Input 
                onChangeText={(name) => this.setState({ name })} 
              />
            </Item>
            <Item floatingLabel>
              <Icon name='person' />
              <Label style={{ marginLeft: 10 }}>Email</Label>
              <Input keyboardType={"email-address"} onChangeText={(email) => this.setState({ email })} />
            </Item>
            <Item floatingLabel>
              <Icon name='key' />
              <Label style={{ marginLeft: 10 }}>Umur</Label>
              <Input keyboardType={"number-pad"} onChangeText={(age) => this.setState({ age })} />
            </Item>
            <Item floatingLabel>
              <Icon name='key' />
              <Label style={{ marginLeft: 10 }}>No. HP</Label>
              <Input keyboardType={"phone-pad"} onChangeText={(phone) => this.setState({ phone })} />
            </Item>
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
