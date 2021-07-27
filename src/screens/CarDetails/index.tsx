import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'
import { Button } from '../../components/Button'
import { CarData } from '../../dtos'

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
  Acessories,
  Footer
  } from './styles'

interface Params {
  car: CarData
}

export function CarDetails() {
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as Params
  
  function handleRental() {
    navigation.navigate('Schedule')
  }

  return (
    <Container>    
      <Header>
        <BackButton />      
      </Header>

      <SliderContainer>
        <ImageSlider imagesUrl= { car.photos }/>
      </SliderContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{ car.brand }</Brand>
            <Name>{ car.name }</Name>
          </Description>
        
          <Rent>
            <Period>{ car.rent.period }</Period>
            <Price>R$ { car.rent.price }</Price>
          </Rent>
        </Details>


        <Acessories>
          {
            car.accessories.map(accessory => (
              <Acessory
                key={ accessory.type }
                name={ accessory.name }
                icon={ SpeedSvg }
              />
            ))
          }
          {/* <Acessory name="380Km/h"   icon={SpeedSvg} />
          <Acessory name="3.2s"      icon={AccelerationSvg} />
          <Acessory name="880 HP"    icon={ForceSvg} />
          <Acessory name="Gasolina"  icon={GasolineSvg} />
          <Acessory name="Auto"      icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} /> */}
        </Acessories>

        <About>{ car.about }</About>
      </Content>

      <Footer>
        <Button 
          title="Escolher período do aluguel" 
          onPress={handleRental} 
        />
      </Footer>
    </Container>
  )
}
