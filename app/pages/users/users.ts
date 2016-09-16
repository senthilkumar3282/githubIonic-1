import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from '../../models/user';
import {UserDetailsPage} from '../user-details/user-details';
/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage {
  users: User[];
  constructor(private navCtrl: NavController, githubUsers: GithubUsers) {
    githubUsers.load().then(users => this.users = users);
  }

  goToDetails(even, login) {
    this.navCtrl.push(UserDetailsPage, {login: login});
  }

}
