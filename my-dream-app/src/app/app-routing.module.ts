import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyFtrialComponent } from "./my-ftrial/my-ftrial.component";
import { MenuComponent } from "./components/menu/menu.component";

const routes: Routes = [
  { path: "", component: MyFtrialComponent },

  { path: "Trial", component: MyFtrialComponent },
  { path: "menu", component: MenuComponent },

  { path: "**", redirectTo: "Trial" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
