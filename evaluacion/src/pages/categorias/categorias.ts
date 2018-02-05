import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {
  public dataCategory: any;
  public allDataCategory: any;
  
  constructor(
    public navCtrl: NavController,
    public httpClient: HttpClient
  ) {

    this.dataCategory = this.httpClient.get('http://localhost:8100/category');
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
