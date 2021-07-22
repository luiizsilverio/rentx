import React from 'react'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Container, Header, SliderContainer } from './styles'

export function CarDetails() {
  return (
    <Container>    
      <Header>
        <BackButton onPress={() => {}} />      
      </Header>

      <SliderContainer>
        <ImageSlider imagesUrl= {['https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png']}/>
      </SliderContainer>
    </Container>
  )
}