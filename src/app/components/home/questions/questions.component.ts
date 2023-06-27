import { Component } from '@angular/core';
class question {
  VH:number = window.innerHeight / 100; VW:number = window.innerWidth / 100;
  question; response; size;
  constructor(question:string, response:string) {
    this.question = question;
    this.response = response;
    this.size = this.sizeDef(this.response.length);
  }
  expanded = false;
  sizeDef(length:number):number{
    let letters = length * (1.75 * this.VH);
    let cont = 92.625 * this.VW;
    let sents = 0;
    for (let x = letters; x > 0; sents++) {
      x -= cont;
    };
    return (sents * 2) + 2;
  }
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  questions:Array<question> = [
    new question('¿Qué es Dionisium?', 'Dionisium es un servicio de streaming enfocado al anime que ofrece un catalogo gigantesto. Todo lo Quieras ver, horas y horas de entretenimiento en la mejor calidad.'),
  ];

  showResponse(question:any){question.expanded = !question.expanded};
  height(question:any):number {
    if(question.expanded == true){
      return question.size;
    }
    return 0;
  }
}
