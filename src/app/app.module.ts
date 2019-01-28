import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
// import { QuotesDetailsComponent } from './quote-details/quote-details.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
//  import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    // QuotesDetailsComponent,
    QuoteDetailsComponent,
     QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
