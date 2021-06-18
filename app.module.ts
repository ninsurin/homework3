import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserSettingComponent } from './userSetting/user-setting.component';
import { WorkspaceSettingComponent } from './workspaceSetting/workspace-setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule} from '@angular/material/tree';
import { MatTreeNode } from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    UserSettingComponent,
    WorkspaceSettingComponent,
    SidebarComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    
    MatListModule,
    MatTreeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
