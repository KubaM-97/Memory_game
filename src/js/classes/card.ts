export interface interfaceCard {
    width: number;
    height: number;
    index: number;
    character: string,
    create(): void
}
export class Card implements interfaceCard{
   constructor(
       readonly width: number,
       readonly height: number,
       readonly index: number,
       readonly character: string,
   ){};
   create(){
       console.log(this.character)
   }
}