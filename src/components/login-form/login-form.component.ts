import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormArray, Validators, FormGroup } from "@angular/forms";
import { Account } from "../../models/account.model";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  @Output()
  loginFormValues = new EventEmitter<Account>();

  loginForm = this.fb.group({
    uname: ["", Validators.required],
    pass: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onLogin() {
    let validAccount: Account = {
      uname: this.loginForm.get("uname").value,
      pass: this.loginForm.get("pass").value
    };

    if (this.loginForm.status == "VALID") {
      this.loginFormValues.emit(validAccount);
    }
  }
}
