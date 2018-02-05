import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CotizarPage } from '../cotizar/cotizar';
import { ComprarPage } from '../comprar/comprar';
import { PedidosPage } from '../pedidos/pedidos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CotizarPage;
  tab2Root: any = ComprarPage;
  tab3Root: any = PedidosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
