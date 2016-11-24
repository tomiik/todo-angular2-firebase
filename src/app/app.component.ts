import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputMessage: string = '';
  inputChecked: boolean = false;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items',{
      query: {
        orderBy: "$done"
      }
    });
  }
  delete(key: string) {
    this.items.remove(key);
  }
  save() {
    this.addCard();
  }
  checkboxChanged(item){
    this.items.update(item.$key, { done: item.done});
  }
  changed(item,event){
    console.log(item.$key);
    console.log(event);
    this.items.update(item.$key, { message: event})
  }
  enterkey(){
    this.addCard();

  }
  addCard(){
    if(this.inputMessage !== ""){
      this.items.push({message: this.inputMessage, done: false})
    }
    this.inputMessage="";
  }
}
