import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  constructor() {
  }

  socket = io('http://localhost:8080', {transports: ['websocket', 'polling', 'flashsocket']});
  patientData;
  patienInfo;
  patiendId;

  ngOnInit() {
    console.log('hello');
    this.socket.on('get_data', (data) => {
      this.patientData = data;
      console.log(data);
      if (this.patientData) {
        this.patienInfo = Object.keys(this.patientData).map(key => this.patientData[key])[0];
        this.patiendId = Object.keys(this.patientData)[0];
        console.log(this.patienInfo);
      }
    });

  }

}
