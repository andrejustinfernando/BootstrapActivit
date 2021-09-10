import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-txtfield',
  templateUrl: './txtfield.component.html',
  styleUrls: ['./txtfield.component.css'],
})
export class TxtfieldComponent implements OnInit {
  @Input() width: string = '';
  @Input() id: string = '';
  @Input() mod: string = '';
  purpose: string = '';
  constructor() {}

  ngOnInit(): void {}
}
