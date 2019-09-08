import React, { Component } from 'react'
import { Container, Body, Header, Content, Text, Card, CardItem, Right, Icon } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DataPasienScreenStyle'

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
        <Header />
        <Content>
            {pasien.map((item, index) => (
          <Card key={index} style={{margin: 10}}>
              <CardItem>
                <Body>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
                <Text>{item.age} tahun</Text>
                <Text>{item.email}{"\n"}{item.phone}</Text>
                {item.bpjs === 'true' ? <Text>Pasien BPJS</Text> : <Text>Bukan Pasien BPJS</Text>}
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
