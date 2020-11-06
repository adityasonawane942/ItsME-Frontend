import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  c = 0;
  ngOnInit() {
  }
  cli(){
    if(this.c<1){
    for( var i=1; i<9; i++){
    document.getElementById('sli'+i.toString()).click()
    }
    this.c+=1;}
  }
}
