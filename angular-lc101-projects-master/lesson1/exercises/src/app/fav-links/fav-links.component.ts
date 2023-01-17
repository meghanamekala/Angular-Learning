import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favlink = ['https://Google.com','https://Gmail.com'];
  constructor() { }

  ngOnInit() {
  }

}
