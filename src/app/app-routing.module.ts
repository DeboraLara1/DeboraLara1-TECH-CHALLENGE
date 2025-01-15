import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';
import { MyCardsComponent } from './pages/other-services/my-cards/my-cards.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'investments', component: InvestmentsComponent },
      { path: 'otherServices', component: OtherServicesComponent },
      { path: 'myAccount', component: MyAccountComponent },
      { path: 'otherServices/myCadrs', component: MyCardsComponent },
      { path: '**', component: ErrorPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
