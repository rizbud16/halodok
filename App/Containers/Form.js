import React, { Component } from 'react'
import { Icon, Container, Header,Left, Right, Body, Title, Content, Text, Form, Item, Input, Label, Button } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FormStyle'

class FormScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userEmail: '',
      userName: '',
      userPassword: ''
    }
  }

  onSubmit = () => {
    const { userEmail, userName, userPassword } = this.state

    if(userEmail != '' || userName != '' || userPassword != '' ) {
      alert('Isi semua')
    } else {
      
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
              <Icon name='mail' />
              <Label style={{ marginLeft: 10 }}>Email</Label>
              <Input onChangeText={(userEmail) => this.setState(userEmail)} />
            </Item>
            <Item floatingLabel>
              <Icon name='person' />
              <Label style={{ marginLeft: 10 }}>Username</Label>
              <Input onChangeText={(userName) => this.setState(userName)} />
            </Item>
            <Item floatingLabel>
              <Icon name='key' />
              <Label style={{ marginLeft: 10 }}>Password</Label>
              <Input onChangeText={(userPassword) => this.setState(userPassword)} />
            </Item>
          </Form>
          <Button block style={{ margin: 15 }}>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen)
