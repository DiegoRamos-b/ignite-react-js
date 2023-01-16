import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, MinutesAmoutInput, TaskInput } from './styles'

const validationNewCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmout: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof validationNewCycleSchema>

export function NewCycleForm() {
  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(validationNewCycleSchema),
    defaultValues: {
      task: '',
      minutesAmout: 0,
    },
  })
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="De um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmout">Durante</label>
      <MinutesAmoutInput
        id="minutesAmout"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmout', { valueAsNumber: true })}
      />

      <span>Minutos.</span>
    </FormContainer>
  )
}
