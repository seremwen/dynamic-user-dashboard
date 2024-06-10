import { Component, Injector, OnInit } from '@angular/core';
import {
  EnvironmentInterface,
  _environment,
} from '../../../../data';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../../../../data/state/users/actions/users.actions';
import {
  selectAllUsers,
  selectUserMetadata,
} from '../../../../data/state/users/selectors/user.selector';
import { setLoadingSpinner } from '../../../../shared/store/Shared/shared.actions';
import { AppState } from '../../../../shared/components/app.state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {

  page!: number;
  baseUrl!: string;
  users$: Observable<any[]>;
  searchQuery: string = '';
  metadata$: Observable<{ page: number, per_page: number, total_items: number, total_pages: number }>;
  showLoading!: Observable<boolean>;
  total_items!: number;
  constructor(
    private store: Store<AppState>,
    private injector: Injector
  ) {
    this.users$ = this.store.pipe(select(selectAllUsers));
    
    this.metadata$ = this.store.pipe(select(selectUserMetadata));
    this.baseUrl =
      this.injector.get<EnvironmentInterface>(_environment).environment;
  }

  ngOnInit(): void {
  
    this.metadata$.subscribe(metadata => {
      this.page = metadata.page;
      this.total_items = metadata.total_items;
    });
    this.load(this.page); // Load initial page
  }

  load(page: number): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(UserActions.loadUsers({ page }));
  }
 
 
  
}
