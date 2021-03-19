import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './portfolio-routing.module';
import { AppComponent } from './portfolio.component';
import { LandingPageComponent } from './portfolio/landing-page/landing-page.component';
import { JobDescriptionComponent } from './portfolio/job-description/job-description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioHeaderComponent } from './portfolio/portfolio-header/portfolio-header.component';
import { PortfolioBodyComponent } from './portfolio/portfolio-body/portfolio-body.component';
import { PortfolioFooterComponent } from './portfolio/portfolio-footer/portfolio-footer.component';
import { WrongRouteComponent } from './portfolio/wrong-route/wrong-route.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    JobDescriptionComponent,
    PortfolioHeaderComponent,
    PortfolioBodyComponent,
    PortfolioFooterComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    JobDescriptionComponent
  ]
})
export class AppModule { }
