import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import * as zod from 'zod'

import { HandPalm, Play } from 'phosphor-react'

import {
  CountdownContainer,
  HomeContainer,
  Separator,
  StartCountownButton,
  StopCountDownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import Countdown from './components/Countdown'

const validationNewCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmout: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof validationNewCycleSchema>

interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amoutSecondsPassed, setAmoutSecondsPassed] = useState(0)

  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(validationNewCycleSchema),
    defaultValues: {
      task: '',
      minutesAmout: 0,
    },
  })

  const activeCycle = cycles.find(
    (currentCycle) => currentCycle.id === activeCycleId,
  )

  const totalSeconds = activeCycle ? activeCycle.minutesAmout * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amoutSecondsPassed : 0

  const minutesAmout = Math.floor(currentSeconds / 60)
  const secondsAmout = currentSeconds % 60

  const minutes = String(minutesAmout).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')

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

  useEffect(() => {
    if (activeCycle) document.title = `Ignite timer - ${minutes}: ${seconds}`
  }, [minutes, seconds, activeCycle])

  const handleCreateNewCycle = ({ task, minutesAmout }: NewCycleFormData) => {
    const id = new Date().getTime().toString()

    const newCycle = {
      id,
      task,
      minutesAmout,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmoutSecondsPassed(0)

    reset()
  }

  const handleInterrupCycle = () => {
    const cycleInterrupted = cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() }
      }

      return cycle
    })

    setCycles(cycleInterrupted)
    setActiveCycleId(null)
  }

  const task = watch('task')
  const isActive = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterrupCycle} type="button">
            <HandPalm />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountownButton disabled={isActive} type="submit">
            <Play />
            Começar
          </StartCountownButton>
        )}
      </form>
    </HomeContainer>
  )
}
