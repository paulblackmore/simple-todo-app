import { useForm, SubmitHandler } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAddTodo } from '../hooks/useAddTodo';
import styles from './TodoForm.module.css';

type Input = {
  value: string;
};
export const TodoForm = () => {
  const handleAddTodo = useAddTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      value: '',
    },
    resolver: yupResolver(
      yup.object({
        value: yup.string().trim().required('Please enter a todo'),
      })
    ),
  });

  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    handleAddTodo.mutate({
      ...data,
      id: nanoid(),
      done: false,
      createdAt: Date.now(),
    });

    reset();
  };

  return (
    <>
      <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='What do you need to do?'
          autoFocus
          {...register('value')}
        />
        <button type='submit'>Add todo</button>
      </form>
      {errors.value && <p className={styles.error}>{errors.value.message}</p>}
    </>
  );
};
