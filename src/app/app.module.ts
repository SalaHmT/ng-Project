import { NotFoundComponent } from "./not-found/not-found.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Employee } from "./employee";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ServiceEmpService } from "./service-emp.service";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NotFoundComponent,
    ListEmpComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: EmployeeComponent },
      { path: "details/:id", component: ListEmpComponent },
      { path: "empname", component: EmployeeComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [ServiceEmpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
