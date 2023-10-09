import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from './../character'
import { Component, OnInit } from '@angular/core';
import { Block } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  msjError : string;

  characters:Character[];

  characterInfo:Character;

  constructor(private characterService:CharacterService, private router:Router){}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getAllCharacters().subscribe(
      (result: Character[] | string) => {
        if (typeof result === 'string') {
          this.msjError = 'Ocurrió un error en la solicitud.';
        } else {
          this.characters = result as Character[];
        }
      }
    );
  }
  getCharacterDetails(id:number){
    var modal = document.getElementById("modalInfo");
    
    this.characterService.getCharacterById(id).subscribe((result: Character | string) => {
      if (typeof result === 'string') {
        this.msjError = 'Ocurrió un error en la solicitud.';
      } else {
        this.characterInfo = result as Character;
        if(modal != null){
          modal.style.display="block";
       }
      }
    });
  }

  hideModal(){
    var modal = document.getElementById("modalInfo");
    if(modal != null){
      modal.style.display="none";
    }
  }

}