import { Component, OnInit } from '@angular/core';
import { Bitacora } from '../bitacora';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bitacora-consultas',
  templateUrl: './bitacora-consultas.component.html',
  styleUrls: ['./bitacora-consultas.component.css']
})
export class BitacoraConsultasComponent implements OnInit {

  constructor(private characterService:CharacterService, private router:Router){}

  bitacoras:Bitacora[];

  ngOnInit(): void {
    this.getBitacoras();
  }

  private getBitacoras(){
    this.characterService.getBitacoraList().subscribe(dato => {
      this.bitacoras = dato;
    });
  }
}
