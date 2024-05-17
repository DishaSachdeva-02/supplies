import { Routes } from '@angular/router';
import { SupplyComponent } from './supply/supply.component';
import { SupplyformComponent } from './supplyform/supplyform.component';
import { EditformComponent } from './editform/editform.component';

export const routes: Routes = [
    {path:"list", component:SupplyComponent},
    {path:"add",component:SupplyformComponent},
    {path:"",redirectTo:"list",pathMatch:"full"},
    {path:"update/:id", component:EditformComponent}
];
