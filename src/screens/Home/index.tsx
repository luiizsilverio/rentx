import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Car } from '../../components/Car'
import { CarData } from '../../dtos'
import { Loading } from '../../components/Loading'

import { 
  Container, 
  Header, 
  HeaderContent, 
  TotalCars, 
  CarList, 
  MyCarButton 
} from './styles'

export function Home(){
  const [cars, setCars] = useState<CarData[]>([])
  const [loading, setLoading] = useState(true)
  
  const navigation = useNavigation()
  const theme = useTheme()

  function handleCarDetails(car: CarData) {
    navigation.navigate('CarDetails', { car })
  }

  function handleMyCar() {
    navigation.navigate('MyCars')
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)

      } catch (error) {
        console.error(error)

      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

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
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>

      {
        loading ? <Loading />
        :      
        <CarList
          data={ cars }
          keyExtractor={(item => item.id)}
          renderItem={({ item }) => (
            <Car data={ item } 
              onPress={() => handleCarDetails(item)} 
            /> 
          )}
        />
      }

      <MyCarButton onPress={handleMyCar}>
        <Ionicons 
          name="ios-car-sport" 
          size={38}
          color={theme.colors.shape}
        />
      </MyCarButton>
    </Container>
  )
}