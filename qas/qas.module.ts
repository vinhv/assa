import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { IndexComponent } from './index/index.component';
import { QASRoutingModule } from './qas-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    TabsComponent,
    SidebarComponent,
    ContentComponent,
    PaginatorComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    QASRoutingModule
  ]
})
export class QasModule { }
