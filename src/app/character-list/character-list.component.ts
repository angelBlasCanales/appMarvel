import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from './../character'
import { Component, OnInit } from '@angular/core';
import { Block } from '@angular/compiler';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters:Character[];

  characterInfo:Character;

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
   // this.router.navigate(['character-detail',id]);
   var coso = document.getElementById("modalito");

   this.characterInfo = new Character();

    this.characterService.getCharacterById(id).subscribe(dato=>{
      this.characterInfo = dato;
    });

   if(coso != null){
    coso.style.display="block";
   }

  }

  hideModalito(){
    var coso = document.getElementById("modalito");
    if(coso != null){
     coso.style.display="none";
    }
  }

}