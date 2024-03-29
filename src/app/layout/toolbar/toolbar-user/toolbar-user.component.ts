import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../pages/authentication/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss'],
})
export class ToolbarUserComponent implements OnInit {
  user: any = {};
  userName: string;
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    public auth: AuthService,
    private message: MessageService,
  ) {}

  goToAccount() {
    this.router.navigate(['/account']);
  }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user || {};
      if (!!user) {
        this.userName =
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.firstName || user.lastName || user.displayName || '';
      }
      this.isLoggedIn = !!user && !user.isAnonymous;
    });
  }
}
