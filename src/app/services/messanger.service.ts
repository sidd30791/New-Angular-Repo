import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService { 

  subject = new Subject();

  constructor() { }

  sendMsg(product){
    //console.log(product);
    this.subject.next(product) //trigering an event
  }

  getMsg(){
    return this.subject.asObservable()
  }
}
  