import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  faTwitter,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
// import {AuthUser} from '../+state/auth.models';
// import * as AuthActions from '../+state/auth.actions';

// import { Store } from '@ngrx/store';
// import {AuthFacade} from '../+state/auth.facade';

/** @dynamic */
@Component({
  selector: 'bandmember-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public infoMsg!: string;
  public errorMsg!: string;
  inputType = 'password';
  visible = false;
  signinForm: FormGroup;

  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faGithub = faGithub;

  // user!: AuthUser;

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    fb: FormBuilder,
    // private authFacade: AuthFacade,
    ///private store: Store,

    @Inject(MAT_DIALOG_DATA) public data: { infoMsg: string },
    public dialogRef: MatDialogRef<SigninComponent>
  ) {
    if (data) {
      this.infoMsg = data.infoMsg;
    }
    this.signinForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
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

  initSSO() {
    console.log('initSSO');
  }

  onSubmit() {
    const { email, password } = this.signinForm.value;

    if (this.signinForm.invalid) {
      console.log(JSON.stringify(this.signinForm.value, null, 2));
      return;
    }
    ///this.store.dispatch(AuthActions.signinRequest({ email, password }));

    // console.log('email:' + this.signinForm.get('email').value);
    // console.log('Password:' + this.signinForm.get('password').value);
    // console.log(JSON.stringify(this.signinForm.value, null, 2));
    // const { email, password } = this.signinForm.value;
    // this.authFacade.signin(email, password);
  }
}
