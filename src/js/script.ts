//hard, timer, moves_limit, 
import { originCards } from "./origin.js"

import { interfaceCard, Card } from "./classes/card"

const i: number = Math.floor(Math.random() * 8)
const card1: interfaceCard = new Card(150, 250, 1, originCards[i])

console.log(card1.create())

