import React, { Component } from 'react'
import { Container, Body, Header, Left, Title, Content, Text, Card, CardItem, Right, Icon } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DataPasienScreenStyle'
import { TouchableOpacity } from 'react-native';

class DataPasienScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {

    const { pasien } = this.props.form

    return (
      <Container>
        <Header>
          <Left style={{ flex: 1}} />
          <Body style={{ flex: 1, alignSelf: 'center' }}>
            <Title>Data Pasien</Title>
          </Body>
          <Right style={{ flex: 1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Form')}>
              <Icon name="add" color="#ffffff" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Card>
          <CardItem button onPress={() => this.props.navigation.navigate('Form')}>
                <Body>
                  <Text>New Pasien</Text>
                </Body>
              </CardItem>
          </Card>
            {pasien.map((item, index) => (
          <Card key={index} >
              <CardItem button onPress={() => this.props.navigation.navigate('Detail', { item, index })} style={{margin: 10}}>
                <Body>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
                <Text>{item.gender}, {item.age} tahun</Text>
                </Body>
                <Right>
                  <Icon name="arrow-dropright" />
                </Right>
              </CardItem>
          </Card>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(DataPasienScreen)
