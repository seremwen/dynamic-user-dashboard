import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { SharedModule } from '../../shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from '../../data/state/users/reducers/user.reducer';
import { UserEffects } from '../../data/state/users/effects/user.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
