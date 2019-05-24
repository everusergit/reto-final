import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from 'models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = '';

  }

  getOffers() {
    return this.http.get<Offer[]>(this.url);
  }
}


