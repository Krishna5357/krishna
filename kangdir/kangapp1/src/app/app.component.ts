import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kangapp1';
  fla:any;

  constructor(public http:HttpClient) {}
//   getdjango(){
//     const headers=new HttpHeaders(
//       {
//         'content-Type':'application/json',
//         "access-control-allow-origin":"*"
//       }
//     )
//     this.http.get('http://127.0.0.1:8000/yuiop/all/',{"headers":headers}).subscribe(
//       data=>{
//         this.fla=data;
//         // console.log(data);

//       }



//     )
// }
}