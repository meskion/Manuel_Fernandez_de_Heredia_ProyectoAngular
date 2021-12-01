import { Component, OnInit } from '@angular/core';
import { Num } from 'src/app/shared2/clases2/num';
//import { Canal } from 'src/app/shared2/interfaces2/canal'
import { NumberService } from "src/app/shared2/servicios2/number.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers: [NumberService]
})
export class BuscarComponent implements OnInit {

  public num: Num;

  constructor(private numberService: NumberService) {
    this.num = new Num();
  }

  ngOnInit(): void {
  }



  public submit(): void {
    
    this.numberService.buscarNumero(this.num.numero).subscribe(
      (data) => {
        this.num.dato = data;

      }
    );
  }
}
