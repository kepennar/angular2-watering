import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/index';
// import { Effects } from './store/effects/index';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducers),
    // EffectsModule.run(Effects),
    AboutModule,
    HomeModule,
    SharedModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
