import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  showMessages(): void {
    this.router.navigate([{outlets:{popup:['messages']}}]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.router.navigate([{outlets:{popup:null}}]);
    this.messageService.isDisplayed = false;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/