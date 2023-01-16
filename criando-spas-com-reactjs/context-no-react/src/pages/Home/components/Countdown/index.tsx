import { useEffect, useState } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'

export default function Countdown() {
  const [amoutSecondsPassed, setAmoutSecondsPassed] = useState(0)

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          const cycleInterrupted = cycles.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            }

            return cycle
          })

          clearInterval(interval)
          setAmoutSecondsPassed(totalSeconds)
          return setCycles(cycleInterrupted)
        }

        return setAmoutSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, cycles, activeCycleId])

  const totalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0

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
