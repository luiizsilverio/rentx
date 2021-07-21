import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Container, Header, HeaderContent, TotalCars } from './styles'

export function Home(){
  const carData1 = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png'
  }
  const carData2 = {
    brand: 'Porshe',
    name: 'Panamera',
    rent: {
      period: 'ao dia',
      price: 340
    },
    thumbnail: 'https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png'
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
            />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={ carData1 } />
      <Car data={ carData2 } />
    </Container>
  )
}