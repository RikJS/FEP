import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  constructor(private router: Router) {
  }

  onSubmit(detailsId) {
    this.router.navigate(['details', detailsId]);
  }

}
