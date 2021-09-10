import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BootstrapActivity';
  repno: string = '';
  reqno: string = '';
  repstat: string = '';
  statd: string = '';
  appr: string = '';
  reqby: string = '';
  dev: string = '';
  repdate: string = '';
  reqdate: string = '';
  projname: string = '';
  proploc: string = '';
  province: string = '';
  city: string = '';
  scheme: string = '';
  purpose: string = '';
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
