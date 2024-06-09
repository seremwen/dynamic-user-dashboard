import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../../../../data';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit {
  @Input() id!: number;
  user: User | any;
  constructor(private router: ActivatedRoute, private service: UserService,){
    this.id = this.router.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getAccount();
  }
  getAccount(): void {
    this.service.getUserById(this.id).subscribe((result:any) => {
      this.user = result.data;
    });
  }
}
