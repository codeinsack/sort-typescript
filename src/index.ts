import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2])
const charactersCollection = new CharactersCollection('eugene')
const numberSorter = new Sorter(numbersCollection)
const stringSorter = new Sorter(charactersCollection)
numberSorter.sort()
stringSorter.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)
