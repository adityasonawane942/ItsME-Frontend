import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(
    private http: HttpClient
    ) { }
  name
  mobile
  email
  city
  qualification
  exp
  cv
  form = new FormGroup({});
  ngOnInit() {
  }
  
  submit(){
    // console.log(this.name)
    this.http.post("http://127.0.0.1:8000/createcareerprofile",{
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      location: this.city,
      qualification: this.qualification,
      exp: this.exp,
      // doc_url: this.cv
    }).subscribe(
      result =>{
        // console.log(result)
        alert("Your details have been recorded")
      },
      error => {
        // console.log(error)
        alert(JSON.stringify(error["error"]))
      },
      () => {}
    );
  }

}
