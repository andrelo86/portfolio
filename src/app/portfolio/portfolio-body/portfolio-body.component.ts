import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { JobDescriptionComponent } from '../job-description/job-description.component';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortfolioBodyComponent implements OnInit {

  $jobData: Observable<object>;

  constructor(public modalService: NgbModal, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.$jobData = this.portfolioService.getJobData();
  }

  open(org: string) {
    const modalRef = this.modalService.open(JobDescriptionComponent, { scrollable: true, centered: true });
    modalRef.componentInstance.organization = org;
  }

}
