import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  id: number | undefined;
  babysitterName: string | undefined;
  messages: any[] = [];
  newMessage: string = '';
  // Add a new property for the content
  newContent: string = '';


  constructor(
    private route: ActivatedRoute,
    private jarwis: JarwisService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.babysitterName =this.route.snapshot.queryParams['name'];; // get name from query
    this.fetchMessages();
  }

  fetchMessages() {
    if (this.id !== undefined) {
      this.jarwis.getInboxMessages(this.id).subscribe(
        (messages) => {
          this.messages = messages?.data;
        },
        (error) => {
          console.error('Error fetching messages:', error);
          // Handle the error, e.g., show an error message to the user
        }
      );
    }
  }


  sendMessage() {
    console.log('sendMessage function called');
    if (this.id !== undefined && this.newContent.trim() !== '') {
      // Send the message to the server with "content" field
      this.jarwis.sendMessageToUser(this.id, this.newContent)
        .subscribe(
          (response) => {
            // Handle successful response if needed
            console.log('Message sent successfully:', response);

            // Clear the input fields after sending the message
            this.newContent = '';

            // Add the sent message to the local messages array at first position
            this.messages?.unshift(response.data)

          },
          (error) => {
            // Handle error
            console.error('Error sending message:', error);
          }
        );
    }
  }
}

