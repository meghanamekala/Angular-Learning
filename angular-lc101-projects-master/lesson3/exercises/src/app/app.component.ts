import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  width = 0;
  height = 0;
  message = 'Space shuttle ready for takeoff!';
  isDisabled = true;

  takeOff(image)
  {
      let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
      if (result) {
        image.style.bottom = '100px';
         this.color = 'blue';
         this.message = 'Shuttle in flight.';
         this.height = 10000;
      }
      this.isDisabled = false;

  }

  landing(image)
  {

    let result = window.confirm('The shuttle is landing. Landing gear engaged');
    if (result) {
       this.color = 'green';
       this.message = 'The shuttle has landed';
       image.style.bottom = '0px';
       this.height = 0;
    }
    this.isDisabled = true;
  }

  missionAbort(image){
      let result = window.confirm('Do you want to abort the mission');
      if (result) {
         this.color = 'red';
         this.message = 'Mission aborted';
         image.style.bottom ='0px';
         this.height= 0;
    }
    this.isDisabled = true;
  }

  moveRocket(image,direction){
    if(direction=='right'){
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement;
      this.width += 1000;
    }
    else if (direction == 'left'){
      let movement = parseInt(image.style.left) - 10 + 'px';
      image.style.left = movement;
      this.width -= 1000;
    }
    else if(direction=='up'){
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      image.style.bottom = movement;
      this.height += 1000;

    }
    else if (direction == 'down'){
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      image.style.bottom = movement;
      this.height -= 1000;
    }
  }

  get MovingOut()
  {
    return this.height < 0 || this.width < 0 || this.height > 35000 || this.width > 45000 ;
  }


}






