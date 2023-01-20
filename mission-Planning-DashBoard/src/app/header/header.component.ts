import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  missionName : string = "Mission launch";
  editMissionName: boolean;
  carrierRocket : string = 'Plasma Max';
  editCarrierName : boolean;

  changeMissionName(name:any){
    this.missionName = name;
    this.editMissionName = false;
  }
  changecarrierRocketName(carrierNames:any){
    this.carrierRocket = carrierNames;
    this.editCarrierName = false;
  }
}
