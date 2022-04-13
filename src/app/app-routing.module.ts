import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', component: Page1Component},
  {path: 'page1', component: Page1Component},
  {path: 'cart', component: CartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faq', component: FAQComponent},


  {path: '',  component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
