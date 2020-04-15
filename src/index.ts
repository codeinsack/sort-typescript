import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 2])
const charactersCollection = new CharactersCollection('abracadabra')
const numberSorter = new Sorter(numbersCollection)
const stringSorter = new Sorter(charactersCollection)
numberSorter.sort()
stringSorter.sort()
console.log(numbersCollection.data)
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

const linkedSorter = new Sorter(linkedList)
linkedSorter.sort()
linkedList.print()
