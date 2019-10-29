import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  fulldata:any;
 first_name:any;
  
  regForm:object={"first_name":"", "last_name":"", "dob":"", "address":"","gender":"", "email":""};






  constructor(public http:HttpClient) {
  
   }
  



  ngOnInit() {
    this.post_records()
    this.get_records()

  }
  post_records(){
    // var url:"http://127.0.0.1:8000/api/add/"
    var headers = new HttpHeaders(
      {
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
    )
    var form = { }
    form["first_name"] = this.regForm['first_name'];
    form['last_name'] = this.regForm['last_name'];
    form["dob"] = this.regForm['dob'];
    form['gender'] = this.regForm['gender'];
    form["address"] = this.regForm['address'];
    form['email'] = this.regForm['email'];

    console.log(form);
    var body = JSON.stringify(form);

    

    this.http.patch("http://127.0.0.1:8000/api/patch/",body,{'headers':headers}).subscribe(
      data =>{
        console.log(data);

      },
      error =>{
        console.log(error)
      }
    )
 
    }
  
    

  




  get_records(){
    const httpOptions={
      headers:new HttpHeaders({
        'content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
      })

    } 
    this.http.get('http://127.0.0.1:8000/api/all/',httpOptions).subscribe(
      data=>{
        this.fulldata=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }

  put_records(){
    // var url:"http://127.0.0.1:8000/api/add/"
    var headers = new HttpHeaders(
      {
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
    )
    var form = { }
    form["first_name"] = this.regForm['first_name'];
    form['last_name'] = this.regForm['last_name'];

    console.log(form);
    var body = JSON.stringify(form);

    

    this.http.put("http://127.0.0.1:8000/api/update/",body,{'headers':headers}).subscribe(
      data =>{
        console.log(data);

      },
      error =>{
        console.log(error)
      }
    )
 
    }

    delete_records(){
      var headers = new HttpHeaders({

      }) 
      var form={ }
      form["first_name"] = this.regForm['first_name'];

      console.log(form);
      var body = JSON.stringify(form);

      this.http.delete("http://localhost:8000/api/delete/"+"regForm['first_name']",{'headers':headers}).subscribe(
        data =>{
          console.log(data);
  
        },
        error =>{
          console.log(error)
        }
      )
    }

    patch_records(){
    // var url:"http://127.0.0.1:8000/api/add/"
    var headers = new HttpHeaders(
      {
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
    )
    var form = { }
    form["first_name"] = this.regForm['first_name'];
    form['last_name'] = this.regForm['last_name'];
    form["dob"] = this.regForm['dob'];
    form['gender'] = this.regForm['gender'];
    form["address"] = this.regForm['address'];
    form['email'] = this.regForm['email'];

    console.log(form);
    var body = JSON.stringify(form);

    

    this.http.patch("http://127.0.0.1:8000/api/patch/",body,{'headers':headers}).subscribe(
      data =>{
        console.log(data);

      },
      error =>{
        console.log(error)
      }
    )
 
    }
}
