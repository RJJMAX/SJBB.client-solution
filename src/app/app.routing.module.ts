import { NgModule } from "@angular/core"
import { RouterModule, Routes} from '@angular/router'
import { EmployeeCreateComponent } from "./employee/employee-create/employee-create.component"
import { EmployeeDetailComponent } from "./employee/employee-detail/employee-detail.component";
import { EmployeeEditComponent } from "./employee/employee-edit/employee-edit.component";

const routes: Routes = [
    {path: "", redirectTo: "/employee/list", pathMatch: "full"},
    {path: "employee/create", component: EmployeeCreateComponent},
    {path: "employee/detail", component: EmployeeDetailComponent},
    {path: "employee/edit", component: EmployeeEditComponent},
    {path: "customer/list", component: EmployeeEditComponent},
    {path: "customer/create", component: EmployeeEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }