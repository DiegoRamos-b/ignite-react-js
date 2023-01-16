import { differenceInSeconds } from 'date-fns'
import { createContext, useEffect, useState } from 'react'

import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,
  StartCountownButton,
  StopCountDownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import Countdown from './components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  cycles: Cycle[]
  markCurrentCycleAsFinish: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const markCurrentCycleAsFinish = () => {
    const cycleInterrupted = cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, finishedDate: new Date() }
      }

      return cycle
    })

    setCycles(cycleInterrupted)
  }

  const activeCycle = cycles.find(
    (currentCycle) => currentCycle.id === activeCycleId,
  )

  // const handleCreateNewCycle = ({ task, minutesAmout }: NewCycleFormData) => {
  //   const id = new Date().getTime().toString()

  //   const newCycle = {
  //     id,
  //     task,
  //     minutesAmout,
  //     startDate: new Date(),
  //   }

  //   setCycles((state) => [...state, newCycle])
  //   setActiveCycleId(id)
  //   setAmoutSecondsPassed(0)

  //   reset()
  // }

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

  // const task = watch('task')
  // const isActive = !task

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            cycles,
            markCurrentCycleAsFinish,
          }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterrupCycle} type="button">
            <HandPalm />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountownButton /* disabled={isActive} */ type="submit">
            <Play />
            Começar
          </StartCountownButton>
        )}
      </form>
    </HomeContainer>
  )
}
