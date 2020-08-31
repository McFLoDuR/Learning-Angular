import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  isUserEmpty() {
    if(this.username === '')
      return true;
    else
      return false;
  }

  clearUsername() {
    this.username = '';
  }
}
