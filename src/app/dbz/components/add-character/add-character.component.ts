import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class addCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: 'abc123',
    name: '',
    power: 0
  }

  emitCharacter(){
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id: 'abc123' ,name: '', power: 0};

  }

 }
