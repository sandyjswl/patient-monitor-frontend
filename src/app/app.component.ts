import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('mainBody', {static: false}) mainBody: ElementRef;
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




  sendMsg() {

  }


}
