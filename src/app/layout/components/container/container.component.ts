import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../data';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../../data/state/users/actions/users.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {
  isCollapsed = false;
  searchQuery: string = '';
  users$!: Observable<any[]>;
  page!: number;
  constructor(private store: Store, private userService: UserService) { }

  ngOnInit(): void {
    // this.users$ = this.store.pipe(select('users'));
  }

  searchUsers(query: string): void {
    this.searchQuery = query.trim();
    if (this.searchQuery) {
      console.log('ser');
      
      this.store.dispatch(UserActions.searchUsers({ query: this.searchQuery }));
    } else {
      const page= 1
      this.store.dispatch(UserActions.loadUsers({page}));
    }
  }
}