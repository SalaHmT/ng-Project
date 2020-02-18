import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Employee } from "./employee";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ServiceEmpService } from "./service-emp.service";
@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule],
  providers: [ServiceEmpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
