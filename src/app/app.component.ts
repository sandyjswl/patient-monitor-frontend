import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'patient-monitor-forentend';


  patientData;
  patienInfo;
  patiendId;
  values = '';
  socket = io('http://localhost:8080', {transports: ['websocket', 'polling', 'flashsocket']});


  constructor() {
  }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
    this.values += event.target.value;
  }

  sendMsg() {
    this.socket.emit('message', this.values);
    this.socket.on('message', (data) => {
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
