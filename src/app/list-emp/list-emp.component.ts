import { ServiceEmpService } from "./../service-emp.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list-emp",
  templateUrl: "./list-emp.component.html",
  styleUrls: ["./list-emp.component.css"]
})
export class ListEmpComponent implements OnInit {
  constructor(
    private _ServiceEmpService: ServiceEmpService,
    private route: ActivatedRoute
  ) {}
  public empid;
  public listEmp = [];
  public emp = new Employee();
  ngOnInit() {
    this.listEmp = this._ServiceEmpService.getListEmp();
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.empid = id;
  }

  done(id: number) {
    this.emp = this.listEmp[id];
  }
}
