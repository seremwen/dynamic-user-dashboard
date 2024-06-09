import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../data';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../../data/state/users/actions/users.actions';
import { selectSelectedUser } from '../../../data/state/users/selectors/user.selector';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {
 
  isCollapsed = false;
  searchQuery: string = '';
  users$: Observable<any> | undefined;
  page!: number;
  selectedUser$: Observable<any>; // Ideally replace 'any' with your user type

  constructor(private store: Store<any>) {
    
    this.selectedUser$ = this.store.pipe(select(selectSelectedUser));
  }


  ngOnInit(): void {
    this.page = 1; // Assuming the initial page is 1
    this.loadUsers();
  }

  loadUsers(): void {
    this.users$ = this.store.pipe(select('users'));
    this.store.dispatch(UserActions.loadUsers({ page: this.page }));
  }

  searchUsers(query: string): void {
    this.searchQuery = query.trim();
    if (this.searchQuery) {
      // Dispatch action to load user by ID
      this.store.dispatch(UserActions.loadUser({ id: this.searchQuery }));
    } else {
      this.loadUsers();
    }
  }
}


interface UserSearchResult {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
}
