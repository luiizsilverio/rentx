import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'
import { Button } from '../../components/Button'

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  } from './styles'

export function ScheduleDetails() {
  const theme = useTheme()
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
        
        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(14)}
            color={theme.colors.text}
          />

          <DateInfo>    
            <DateTitle>até</DateTitle>
            <DateValue>19/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}
