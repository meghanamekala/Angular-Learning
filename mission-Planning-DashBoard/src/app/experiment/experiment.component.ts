import { Component } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {
  experimentArray = ['Mars soil sample','Plant growth in habitat','Human bone density'];
}
