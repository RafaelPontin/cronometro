import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  minutos: number = 0;
  segundos: number = 0;
  hora: number = 0;
  tempoPassado: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  start(){
    this.interval = setInterval(() => {
        if(this.tempoPassado < 60){
            this.tempoPassado++;
            this.segundos = this.tempoPassado;
        }
        else
        {
          this.minutos += 1;
          this.tempoPassado = 0;
          this.segundos = 0;
          if(this.minutos == 60){
              this.minutos = 0;
              this.hora += 1;
          }
        }

    },1000)
  }

  pause(){
    clearInterval(this.interval);
  }

}
