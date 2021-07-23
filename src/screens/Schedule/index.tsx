import React from 'react'
import { StatusBar } from 'react-native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
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
      </Content>
      
      <Footer>
        <Button title="Confirmar" />          
      </Footer>
      
    </Container>
  )
}
