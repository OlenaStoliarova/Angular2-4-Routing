import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent, UserFormComponent, UserListComponent } from './components';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    ...UsersRoutingModule.components,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
