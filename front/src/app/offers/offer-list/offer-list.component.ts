import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'models/offer';
import { OfferServiceService } from 'Services/offer-service.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  @Input() data: Offer;
  offers: any;
  constructor(private serveOfers: OfferServiceService, private route: Route) { }

  ngOnInit() {
    
  }

}
