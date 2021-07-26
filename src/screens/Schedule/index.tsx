import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { MyCalendar } from '../../components/MyCalendar'

import ArrowSvg from '../../assets/arrow.svg'

import { 
  Container, 
  Header, 
  Title,
  Period,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
  } from './styles'

export function Schedule(){
  const navigation = useNavigation()

  function handleClick() {
    navigation.navigate('ScheduleDetails')
  }
  
  return (
    <Container>
      <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      
      <Header>
        <BackButton color="white" onPress={() => {}} />     

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title> 

        <Period>
          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue selected={true}>
              18/06/2021
            </DateValue>
          </DateInfo>
          
          <ArrowSvg />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue selected={true}>
              20/06/2021
            </DateValue>
          </DateInfo>
        </Period>

      </Header>

      <Content>
        <MyCalendar />
      </Content>
      
      <Footer>
        <Button 
          title="Confirmar" 
          onPress={handleClick} 
        />          
      </Footer>
      
    </Container>
  )
}
