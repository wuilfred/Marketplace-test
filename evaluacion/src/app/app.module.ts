import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CotizarPage } from '../pages/cotizar/cotizar';
import { ComprarPage } from '../pages/comprar/comprar';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PerfilPage } from '../pages/perfil/perfil';
import { InformacionPage } from '../pages/informacion/informacion';
import { CategoriasPage } from '../pages/categorias/categorias';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesProvider } from '../providers/services/services';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    MyApp,
    CotizarPage,
    ComprarPage,
    PedidosPage,
    TabsControllerPage,
    PerfilPage,
    InformacionPage,
    CategoriasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CotizarPage,
    ComprarPage,
    PedidosPage,
    TabsControllerPage,
    PerfilPage,
    InformacionPage,
    CategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}