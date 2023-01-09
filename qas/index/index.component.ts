import { StateService } from './../../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  $state = this.state.$state

  constructor(public state: StateService) { }

  ngOnInit(): void {
    // this.state.nextState()
  }

  a() {
    this.state.nextState()
  }
}
