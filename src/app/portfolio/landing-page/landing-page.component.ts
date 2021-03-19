import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobDescriptionComponent } from '../job-description/job-description.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  open(org: string) {
    const modalRef = this.modalService.open(JobDescriptionComponent, { scrollable: true, centered: true });
    modalRef.componentInstance.organization = org;
  }

}
