import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListDBZComponent {

  
  @Input() //Si no obtiene ningun character muestra este por defecto, si no los sustituye
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter(); //También se podria poner como: public onDelete = new EventEmitter<number>();
  
  emitOnDelete(index:number){
    this.onDelete.emit(index);
  } 

  onDeleteCharacter(index: number):void{
    console.log(index);
  }
  
}
