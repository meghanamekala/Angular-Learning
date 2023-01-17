import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images for reference';
  image1 = './assets/Images/Movie1.jpg';
  image2 = './assets/Images/Movie2.jpg';
  image3 = './assets/Images/Movie3.jpeg';
  constructor() { }

  ngOnInit() {
  }

}
