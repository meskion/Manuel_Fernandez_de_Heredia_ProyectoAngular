import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/shared2/interfaces2/canal'
import { NumberService } from "src/app/shared2/servicios2/number.service";

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.css'],
  providers: [NumberService]
})
export class CanalesComponent implements OnInit {

  public listaCanales: Canal[];

  constructor(private numberService : NumberService) {
    this.listaCanales = [];
  }

  ngOnInit(): void {
    this.buscarNumero('1');
    this.buscarNumero('7');
    this.buscarNumero('100');
    

  }

  private buscarNumero(n : string) :void {
    var trivia : Canal;
      this.numberService.buscarNumero(n).subscribe(
        (data) => {
         trivia = {numero: n, dato: data};
         this.listaCanales.push(trivia);
        }
      );
  }

}

