import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fla:any;

  constructor(public http:HttpClient) {}
  


ngOnInit(){
  this.getdjango()
}
getdjango(){
  var headers=new HttpHeaders(
    {
      // 'content-Type':'application/json',
      "Access-Control-Allow-Origin":"*"
    }
  )
  this.http.get('http://127.0.0.1:8000/yuiop/all/',{"headers":headers}).subscribe(
    data=>{
      this.fla=data;
      console.log(data);

    }



  )
}
}