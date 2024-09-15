type BaseMsg = { user: string }
type TextMsg = BaseMsg & { text: string }
type UrlMsg = BaseMsg & { url: string }
type ImgMsg = BaseMsg & { img: string }

type TypesArr = [TextMsg, UrlMsg, ImgMsg]

type MergeArrTypes<TypesArr extends any[], Result = {}> = TypesArr extends [infer Head, ...infer Rest] ? MergeArrTypes<Rest, Result & Head> : Result


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import type { Prettify } from '../utils/Prettify'

type cases = [
    Expect<Equal<Expected1, Prettify<MergeArrTypes<TypesArr>>>>,
    // @ts-expect-error
    Expect<Equal<Expected2, Prettify<MergeArrTypes<TypesArr>>>>,
]


interface Expected1 {
    user: string
    text: string
    url: string
    img: string
}


interface Expected2 {
    user: string
    text: string
    url: string
}

