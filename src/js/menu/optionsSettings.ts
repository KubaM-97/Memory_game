import { enumIndex } from './options';

interface Options {
    cardsNumber: number;
    time: null | number;
    selectedTime: number
}

export const selectedOptions: Options = {
    cardsNumber: 16,
    time: null,
    selectedTime: 11 - enumIndex
}

export enum enumCardsNumber{
    opt1 = 16,
    opt2 = 20,
    opt3 = 24
}

export enum enumTimer{
    opt1 = 15,
    opt2 = 20,
    opt3 = 25,
    opt4 = 30,
    opt5 = 35,
    opt6 = 40,
    opt7 = 45,
    opt8 = 50,
    opt9 = 55,
    opt10 = 60
};
