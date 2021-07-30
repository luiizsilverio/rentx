import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons'

import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'
import api from '../../services/api'
import { CarData } from '../../dtos'

import { 
  Container, 
  Header, 
  Title, 
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQtd,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles'

interface CarProps {
  id: string
  user_id: string
  car: CarData
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const theme = useTheme()
  
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
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
      <Header>
        <BackButton color="white" />     

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>         

        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>
      </Header>      

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQtd>05</AppointmentsQtd>
        </Appointments>
       
        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Periodo</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>01/01/2021</CarFooterDate>
                  <AntDesign 
                    name="arrowright"
                    size={20}
                    color={theme.colors.title}
                    style={{marginHorizontal: 10}}
                  />
                  <CarFooterDate>02/01/2021</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
        />

      </Content>
    </Container>
  )
}