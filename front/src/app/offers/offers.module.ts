import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { OfferHomeComponent } from './offer-home/offer-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OfferListComponent, OfferFormComponent, OfferHomeComponent]
})
export class OffersModule { }
