import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {

  $jobData: Observable<object>;
  @Input() organization: string;

  constructor(public modal: NgbActiveModal, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.$jobData = this.portfolioService.getJobData(this.organization);
  }


  close() {
    this.modal.close();
  }

}
