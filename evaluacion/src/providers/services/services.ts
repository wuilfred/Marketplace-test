import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  public dataCategory: any;
  public allDataCategory: any;
  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }
  
  getAllCategory(){
    this.dataCategory = this.http.get('http://localhost:8100/category');
    this.dataCategory.subscribe(
      data => {
        let catego = new Array();
        for (let key in data) {
          for(let t in data[key]){
            //console.log();
            catego.push(data[key][t]);
          }
        }
        this.allDataCategory = catego;
        
       },
      (err) => {
        console.log(err);
      },
    
      () => {
        console.log("completed");
      }
    );
  }
}
