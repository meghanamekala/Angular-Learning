import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries',];
   finishedChores = [ 'Empty dishwasher','Complete LaunchCode prep work','Buy groceries','Shopping','test'];

   targetImage = 'https://as1.ftcdn.net/v2/jpg/02/22/69/80/1000_F_222698039_NXsqKQNxbi2ZaSOkmtdi4unbNeBMGafT.jpg';

   constructor() { }

   ngOnInit() {
   }

}
