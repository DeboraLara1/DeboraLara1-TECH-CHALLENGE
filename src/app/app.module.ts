import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardCenterComponent } from './components/card-center/card-center.component';
import { CardCenterNewTransactionComponent } from './components/card-center-new-transaction/card-center-new-transaction.component';
import { ExtractMenuComponent } from './components/extract-menu/extract-menu.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardCenterServicesAvailableComponent } from './components/card-center-services-available/card-center-services-available.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { MyCardsComponent } from './pages/other-services/my-cards/my-cards.component';
import { CardMyCardsComponent } from './components/card-my-cards/card-my-cards.component';
import { CardPaymentCardViewComponent } from './components/card-payment-card-view/card-payment-card-view.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { CardInvestmentsComponent } from './components/card-investments/card-investments.component';
import { CardRectangularComponent } from './components/card-rectangular/card-rectangular.component';
import { CardLargeComponent } from './components/card-large/card-large.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CardMyAccountComponent } from './components/card-my-account/card-my-account.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    DashboardComponent,
    HeaderUserComponent,
    CardCenterComponent,
    CardCenterNewTransactionComponent,
    ExtractMenuComponent,
    OtherServicesComponent,
    SideBarComponent,
    CardCenterServicesAvailableComponent,
    CardSmallComponent,
    MyCardsComponent,
    CardMyCardsComponent,
    CardPaymentCardViewComponent,
    ButtonsComponent,
    InvestmentsComponent,
    CardInvestmentsComponent,
    CardRectangularComponent,
    CardLargeComponent,
    DonutChartComponent,
    MyAccountComponent,
    CardMyAccountComponent,
    CommonLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
