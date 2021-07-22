import React from 'react'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import { 
  Container, 
  Header, 
  SliderContainer,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories
  } from './styles'

export function CarDetails() {
  return (
    <Container>    
      <Header>
        <BackButton onPress={() => {}} />      
      </Header>

      <SliderContainer>
        <ImageSlider imagesUrl= {['https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png']}/>
      </SliderContainer>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
        
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>


        <Acessories>
          <Acessory name="380Km/h"   icon={SpeedSvg} />
          <Acessory name="3.2s"      icon={AccelerationSvg} />
          <Acessory name="880 HP"    icon={ForceSvg} />
          <Acessory name="Gasolina"  icon={GasolineSvg} />
          <Acessory name="Auto"      icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário 
          touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

    </Container>
  )
}
