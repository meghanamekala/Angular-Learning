import { Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {

  memberBeingEdited :{} ;

  crewArray =[

    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true},
  ]

  add(crewmemName :string ,isFirst : boolean){
    this.crewArray.push({name:crewmemName,firstMission:isFirst});

  }

  remove(crewmember :any){
    let index = this.crewArray.indexOf(crewmember);
    this.crewArray.splice(index,1);
  }

  updatedName(value :any, member: any) {
    member['name'] = value;
    this.memberBeingEdited = {};
  }

}
