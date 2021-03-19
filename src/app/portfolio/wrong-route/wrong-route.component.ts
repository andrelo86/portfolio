import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrong-route',
  templateUrl: './wrong-route.component.html',
  styleUrls: ['./wrong-route.component.scss']
})
export class WrongRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
