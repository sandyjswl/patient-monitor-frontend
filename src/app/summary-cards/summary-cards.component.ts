import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit {

  constructor(private router: Router) {
  }

  values = '';

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.values += event.target.value;
  }

  submit() {
    this.router.navigate(['patient', this.values]);

  }
}
