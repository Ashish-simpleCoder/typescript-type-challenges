/*
  8 - Readonly 2
  -------
  by Ashish-simpleCoder (@ashish-simpleCoder) #medium #readonly #object-keys

  ### Question

  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
    age: number
  }

  const todo: MyReadonly2<Todo, string> = {
    title: "Hey",
    description: "foobar",
    completed: false,
    age: 10
  }


  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  todo.age = 2400 // OK
  ```

  > View on GitHub: https://tsch.js.org/8
*/

/* _____________ Your Code Here _____________ */

type MyReadonly2ByType<T, Type extends {} | undefined | null = {} | undefined | null> = {
  readonly [Key in keyof T as T[Key] extends Type ? Key : never]: T[Key];
} & MyOmitByType<T, Type>

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'
import { Prettify } from '../../utils/Prettify'

type cases = [
  Expect<Alike<MyReadonly2ByType<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2ByType<Todo1, boolean>, Expected>>,
  Expect<Alike<MyReadonly2ByType<Todo2, string>, Expected2>>,
]


interface Todo1 {
  title: string
  description?: string
  completed: boolean
}




interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
  age: null
}

interface Expected {
  title: string
  description?: string
  readonly completed: boolean
}
interface Expected2 {
  readonly title: string
  description?: string
  completed: boolean
  age: null
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8/answer
  > View solutions: https://tsch.js.org/8/solutions
  > More Challenges: https://tsch.js.org
*/


// utility type for Omit
type MyOmitByType<T, K extends {} | undefined | null> = {
  [Key in keyof T as T[Key] extends K ? never : Key]: T[Key]
}