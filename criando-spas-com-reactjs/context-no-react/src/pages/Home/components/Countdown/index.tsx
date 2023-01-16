import { useContext, useEffect, useState } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

export default function Countdown() {
  const { activeCycle, markCurrentCycleAsFinish } = useContext(CyclesContext)
  const [amoutSecondsPassed, setAmoutSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amoutSecondsPassed : 0

  const minutesAmout = Math.floor(currentSeconds / 60)
  const secondsAmout = currentSeconds % 60

  const minutes = String(minutesAmout).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) document.title = `Ignite timer - ${minutes}: ${seconds}`
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          clearInterval(interval)
          setAmoutSecondsPassed(totalSeconds)
          return markCurrentCycleAsFinish()
        }

        return setAmoutSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, markCurrentCycleAsFinish, totalSeconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
