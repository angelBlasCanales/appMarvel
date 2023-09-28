import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id:number;
  character:Character;

  constructor(private route:ActivatedRoute, private characterService:CharacterService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.character = new Character();

    this.characterService.getCharacterById(this.id).subscribe(dato=>{
      this.character = dato;
    });

  }

}
