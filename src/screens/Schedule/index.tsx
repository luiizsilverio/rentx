import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { generateInterval } from '../../utils/generateInterval'

import { 
  MyCalendar, 
  DayProps,
  MarkedDateProps
} from '../../components/MyCalendar'

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

interface RentalPeriod {
  start: number
  startFormatted: string
  end: number
  endFormatted: string
}

export function Schedule(){
  const [lastSelDate, setLastSelDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const navigation = useNavigation()

  function handleClick() {
    navigation.navigate('ScheduleDetails')
  }

  function handleSelectDate(date: DayProps) {
    let start = !lastSelDate.timestamp ? date : lastSelDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelDate(end)

    const interval = generateInterval(start, end)
    console.log('start, end:', start, end)
    setMarkedDates(interval)
    console.log('interval:', interval)
    const datas = Object.keys(interval)
    const firstDate = datas[0]
    const endDate = datas[datas.length - 1]

    // console.log('firstDate:', datas[0])
    // console.log('endDate:', datas[datas.length - 1])
    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(new Date(firstDate), 'dd/MM/yyyy'),
      endFormatted: format(new Date(endDate), 'dd/MM/yyyy'),
    })

  }
  
  return (
    <Container>
      <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      
      <Header>
        <BackButton color="white" />     

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title> 

        <Period>
          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue selected={ !!rentalPeriod.startFormatted }>
              { rentalPeriod.startFormatted }
            </DateValue>
          </DateInfo>
          
          <ArrowSvg />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue selected={ !!rentalPeriod.endFormatted }>
            { rentalPeriod.endFormatted }
            </DateValue>
          </DateInfo>
        </Period>

      </Header>

      <Content>
        <MyCalendar 
          markedDates={markedDates}
          onDayPress={handleSelectDate}
        />
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
