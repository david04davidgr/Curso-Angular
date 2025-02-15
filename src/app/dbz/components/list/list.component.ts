import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.services';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListDBZComponent {

  
  @Input() //Si no obtiene ningun character muestra este por defecto, si no los sustituye
  public characterList: Character[] = [{
    id: 'abc123',
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); //También se podria poner como: public onDelete = new EventEmitter<number>();
  
  emitOnDelete(id:string){
    this.onDelete.emit(id);
    
  } 

  onDeleteCharacter(id: string):void{
  }
  
}
