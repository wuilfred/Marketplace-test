import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-comprar',
  templateUrl: 'comprar.html'
})
export class ComprarPage {
  public dataForms: any;
  public allDataProduct: any;

  constructor(
              public navCtrl: NavController,
              public httpClient: HttpClient
  ) {
    this.dataForms = this.httpClient.get('http://localhost:8100/products');
    this.dataForms.subscribe(
      data => {
        let cours = new Array();
        for (let key in data) {
          for(let k in data[key]){
            cours.push(data[key][k]);
          }
        }
        this.allDataProduct = cours;
        console.log(this.allDataProduct);
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
