import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ServicesComponent } from './services/services.component';
import { AnimatedNumberComponent } from './animated-number/animated-number.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MeetTeamComponent } from './meet-team/meet-team.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    ServicesComponent,
    AnimatedNumberComponent,
    PortfolioComponent,
    MeetTeamComponent,
    PricingComponent,
    BlogComponent,
    TestimonialComponent,
    GetInTouchComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
