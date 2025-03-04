import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class DbzService {
    constructor() { }
    
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }]; 
    
    addCharacter( character: Character ):void{
        
        //const newCharacter: Character = { id: uuid(), ...character } Esta opción pondria el id y las demas propiedades las pone auto
        const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power,
        }

        this.characters.push(newCharacter);
    }

    // onDeleteCharacter( index: number ):void{
    //     this.characters.splice(index, 1);
    // }

    deleteCharacterById( id:string ){
        this.characters = this.characters.filter( character => character.id !== id); //Este genera un nuevo array de los que NO tienen ese id y se guardan los que NO lo tienen
    }

}