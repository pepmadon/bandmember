import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SigninComponent } from '@bandmember/shared/ui-signin';
import { SignupComponent } from '@bandmember/shared/ui-signup';



@Component({
  selector: 'bandmember-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent  {
  //TODO ADD AUTH
  // @Select(AuthState.isLoggedIn)
  //isLoggedIn$: Observable<boolean>;
  isLoggedIn$ =  0; //test

  constructor(private dialog: MatDialog) {}

  public login() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SigninComponent, dialogConfig);
  }

  // public logout() {
  
  // }

  public signup() {
//TODO refactor
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SignupComponent, dialogConfig);
   
  }

}
