import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [];
  isDisplayed = false;

  get messages(): string[] {
    return this._messages;
  }

  fetchMessages(): void {
    this._messages = ['Hello', 'World', 'Test 1 2 3...'];
  }
}