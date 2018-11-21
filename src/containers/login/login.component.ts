import { Component, OnInit, Output } from "@angular/core";
import { StudentService } from "../../services/student.service";
import { Student} from "../../models/student.model";
import { Account } from "../../models/account.model";
import { EventEmitter } from "../../../node_modules/protractor";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  accounts: Account[];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.studentService.getAccounts().subscribe(s=> this.accounts = s);
  }

  onLogin(event: Account) {
    
    for(let i = 0; i < this.accounts.length; i++){
      if(event.uname == this.accounts[i].uname && event.pass == this.accounts[i].pass){
        this.router.navigate(['/','home']);
        this.studentService.login(event);
        break;
      }
    }
    console.log("Account not found");
  }
}
