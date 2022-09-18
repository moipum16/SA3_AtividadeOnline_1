import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { BannerComponent } from './components/banner/banner.component';
import { IconBoxesComponent } from './components/icon-boxes/icon-boxes.component';
import { Menu5Component } from './components/menu5/menu5.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Menu2Component,
    MenuComponent,
    SpacerComponent,
    BannerComponent,
    IconBoxesComponent,
    Menu5Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
