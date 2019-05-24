import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  @Input() data: Offer;
  offers: any;
  constructor(private serveOfers: , private route: ) { }

  ngOnInit() {
  }

}
