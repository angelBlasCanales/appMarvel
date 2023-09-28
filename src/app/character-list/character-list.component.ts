import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from './../character'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters:Character[];

  constructor(private characterService:CharacterService, private router:Router){}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(){
    this.characterService.getCharacterList().subscribe(dato => {
      this.characters = dato;
    });
  }

  getCharacterDetails(id:number){
    this.router.navigate(['character-detail',id]);
  }
}