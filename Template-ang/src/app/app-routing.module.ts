import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { MeetTeamComponent } from './meet-team/meet-team.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'meet-team', component: MeetTeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'get-in-touch', component: GetInTouchComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
