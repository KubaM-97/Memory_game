import { interfaceCard, Card } from "./../classes/card"
import { timer } from "./../variables"

export const gameCards: string[] = []

if(16 == 16) {
    const originCards: string[] = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"]

    while (gameCards.length < 16) {

        const i: number = Math.floor(Math.random() * 8)
        const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[i])
        if (isThereTwoSuchCards.length == 2) {
            continue
        } else {
            gameCards.push(originCards[i])
            const card: interfaceCard = new Card(170, 170, 1, originCards[i])
            card.create()
        }

    }
}
if(1==1){
    timer.style.display = "block"
}