import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    // Connect to WebSocket server
    this.socket$ = webSocket('ws://your-websocket-server-url');
  }

  // Send a message
  sendMessage(message: any) {
    this.socket$.next(message);
  }

  // Receive messages
  receiveMessages() {
    return this.socket$.asObservable();
  }
}


