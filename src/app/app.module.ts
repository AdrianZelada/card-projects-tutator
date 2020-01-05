import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ImageAsyncComponent } from './image-async/image-async.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusProjectDirective } from './directives/status-project.directive';
import { SearchProjectsPipe } from './pipes/search-projects.pipe';
import { YearPipe } from './pipes/year.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    ListProjectsComponent,
    CardProjectComponent,
    ImageAsyncComponent,
    StatusProjectDirective,
    SearchProjectsPipe,
    YearPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
