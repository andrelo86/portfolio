import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './portfolio/landing-page/landing-page.component';
import { WrongRouteComponent } from './portfolio/wrong-route/wrong-route.component';


const routes: Routes = [{
  path: '', redirectTo: '/avaninetti', pathMatch: 'full'
}, {
  path: 'avaninetti',
  component: LandingPageComponent
}, {
  path: '*', redirectTo: '/avaninetti'
}, {
  path: '**', pathMatch: 'full', component: WrongRouteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
