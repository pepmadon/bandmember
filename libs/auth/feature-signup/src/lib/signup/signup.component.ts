
import { AfterViewInit, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
// open signup modal/mtdialog when clicks on tool bar menu "sign up" - this signup menu is on toolbar component 
// user model 
// input: material dialog for email and password to create/register account
// input from with validate email and password
// action send user model to server 
// send client confirmation email link
//   






@Component({
  selector: 'bandmember-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent  {
  
  public infoMsg!: string;
  public errorMsg!: string;
  inputType = 'password';
  visible = false;
  signupForm: FormGroup;

  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faGithub=faGithub;
  isSubmitted = false;

  constructor(fb: FormBuilder,
    private cd: ChangeDetectorRef,
private dialog: MatDialog,
@Inject(MAT_DIALOG_DATA) public data: { infoMsg: string },
public dialogRef: MatDialogRef<SignupComponent>
    
    ) {
      if (data) {
        this.infoMsg = data.infoMsg;
      }
  this.signupForm = fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required, Validators.minLength(4)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    rememberMe: false,
  });
  
  }

  toggleInputType() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  initSSO(){
    console.log("initSSO");
  }
  onSubmit() {
    this.isSubmitted = true;
    if(this.signupForm.invalid){
      return;
    }
    //TODO replace console log with service this.authService.signUp
    console.log(this.signupForm.value);
    console.log(JSON.stringify(this.signupForm.value, null, 2));
  //  this.router.navigateByUrl('/admin');
  }

  get formControls() { return this.signupForm.controls; }


}
