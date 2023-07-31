
type MyPick<T, Filter> = {
    [key in keyof T as T[key] extends Filter ? key : never]: T[key]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, boolean>>>,
  Expect<Equal<Expected2, MyPick<Todo, string>>>,
  Expect<Equal<Expected3, MyPick<Todo, number>>>,
  Expect<Equal<Expected4, MyPick<Todo, undefined| null>>>,
  Expect<Equal<Expected5, MyPick<Todo, number| string>>>,
]

interface Todo {
  title: string
  description: string
  completed: boolean,
  age: number
  rank: number
  house: undefined
  mango: null
}

interface Expected1 {
  completed: boolean
}

interface Expected2 {
  title: string
  description: string
}
interface Expected3 {
  age: number
  rank: number
}
interface Expected4{
  house: undefined
  mango: null
}
interface Expected5{
  age: number
  rank: number,
  title: string,
  description: string
}