import {Component} from 'react'
import BiBold from 'react-icons/bi'
import {Container, MainContainer} from './styledComponents'

class Display extends Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <BiBold />
        </MainContainer>
      </Container>
    )
  }
}

export default Display
