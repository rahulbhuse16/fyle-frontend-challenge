import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  username: string = '';
  title = 'gith-app';

  userSearchHandler(username: string) {
    this.username = username;
  }
}
