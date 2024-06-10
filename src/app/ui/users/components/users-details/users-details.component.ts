import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectSelectedUser } from '../../../../data/state/users/selectors/user.selector';
import * as UserActions from '../../../../data/state/users/actions/users.actions';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit {
  selectedUser$: Observable<any>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.selectedUser$ = this.store.pipe(select(selectSelectedUser));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      if (userId) {
        this.store.dispatch(UserActions.loadUser({ id: userId }));
      }
    });
  }
}
