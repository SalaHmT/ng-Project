import { Employee } from "./../employee";
import { ServiceEmpService } from "./../service-emp.service";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent {
  constructor(
    private _ServiceEmpService: ServiceEmpService,
    private router: Router
  ) {}
  public listEmp = [];
  public emp = new Employee();
  public listemp: any = [];
  ngOnInit() {
    this.listEmp = this._ServiceEmpService.getListEmp();
  }
  onclick(i: Employee) {
    this.emp = i;
    this.router.navigate(["/details", this.emp.id]);
    return this.emp;
  }
}
