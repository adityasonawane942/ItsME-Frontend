import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itsme';
  constructor() {
    $(window).on('load',function() {
      $("#loader").fadeOut("fast");
    });}
}
