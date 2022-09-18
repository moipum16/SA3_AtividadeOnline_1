import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { IconBoxesComponent } from "./components/icon-boxes/icon-boxes.component";
import { LoginComponent } from "./components/login/login.component";

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:IconBoxesComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
