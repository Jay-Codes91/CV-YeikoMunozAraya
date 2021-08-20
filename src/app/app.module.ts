import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatTabsModule} from '@angular/material/tabs';

//servicios
import { DatosService } from './datos.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
