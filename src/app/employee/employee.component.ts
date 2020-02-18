import { Employee } from "./../employee";
import { ServiceEmpService } from "./../service-emp.service";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent {
  public listEmp = [];
  public listemp: any = [];
  public emp = new Employee();
  constructor(private _ServiceEmpService: ServiceEmpService) {}

  ngOnInit() {
    this.listEmp = this._ServiceEmpService.getListEmp();
  }
  onclick(i: Employee) {
    this.emp = i;
  }
}
