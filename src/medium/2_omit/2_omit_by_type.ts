/*
  3 - Omit By Type
  -------
  by Ashish-simpleCoder (@ashish-simpleCoder) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, boolean>

  const todo: TodoPreview = {
    title: string,
    description: string
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/

/* _____________ Your Code Here _____________ */

type MyOmit<T, K extends {} | undefined | null> = {
    [Key in keyof T as T[Key] extends K ? never: Key]: T[Key]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, boolean>>>,
  Expect<Equal<Expected2, MyOmit<Todo, string>>>,
  Expect<Equal<Expected3, MyOmit<Todo, string| number>>>,
]

// // @ts-expect-error
// type error = MyOmit<Todo, NaN>

interface Todo {
  title: string
  description: string
  completed: boolean,
  age: number,
  obj: {
    key: "value"
  }
}

interface Expected1 {
  title: string
  description: string
  age: number,
  obj: {
    key: "value"
  }
}

interface Expected2 {
  completed: boolean
  age: number,
  obj: {
    key: "value"
  }
}

interface Expected3 {
    completed: boolean
    obj: {
      key: "value"
    }
  }

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3/answer
  > View solutions: https://tsch.js.org/3/solutions
  > More Challenges: https://tsch.js.org
*/
