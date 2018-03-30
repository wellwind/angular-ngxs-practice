import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { TodoState } from './states/todo/todo-state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([TodoState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
