import {Component} from 'react'
import BsTypeBold from 'react-icons/bs'
import {Container, MainContainer} from './styledComponents'

class Display extends Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <BsTypeBold />
        </MainContainer>
      </Container>
    )
  }
}

export default Display
