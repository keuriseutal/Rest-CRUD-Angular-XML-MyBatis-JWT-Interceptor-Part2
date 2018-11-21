import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

//containers
import { HomeComponent } from "../containers/home/home.component";
import { LoginComponent } from "../containers/login/login.component";

//components
import { FormComponent } from "../components/form/form.component";
import { ListComponent } from "../components/list/list.component";
import { LoginFormComponent } from "../components/login-form/login-form.component";

//services
import { StudentService } from "../services/student.service";

//interceptor
import { Interceptor } from "../services/interceptor";

// routes
export const ROUTES: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormComponent,
    ListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    StudentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
