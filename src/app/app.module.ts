import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

//modules
import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';

import { appReducer, appEffects } from './domain/store/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './core/interceptors/app.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(appEffects),

    CoreModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
