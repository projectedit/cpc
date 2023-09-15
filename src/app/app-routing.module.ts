import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'home', component:HomeComponent },
  {path: 'menu', component:MenuComponent},
  {path: 'gallary', component: GallaryComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
