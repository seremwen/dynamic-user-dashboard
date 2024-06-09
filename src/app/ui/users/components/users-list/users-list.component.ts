import { Component, Injector, OnInit } from '@angular/core';
import {
  EnvironmentInterface,
  User,
  UserService,
  _environment,
} from '../../../../data';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  members!: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  users: User | any;
  total_items!: number;
  constructor(
    private service: UserService,
    private injector: Injector,
    private nzMessageService: NzMessageService
  ) {
    this.baseUrl =
      this.injector.get<EnvironmentInterface>(_environment).environment;
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.service.getUsers(this.page).subscribe((res: any) => {
      this.users = res.data;
      this.total_items = res.total;
    });
  }
  load(event?: number) {
    this.page= this.page+ 1;
    this.service.getUsers(this.page).subscribe((res: any) => {
      this.users = res.data;
      this.total_items = res.total;
    });
  }
}
