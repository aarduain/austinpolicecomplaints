import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GoToFormsPage } from '../pages/go-to-forms/go-to-forms';
import { TabsPage } from '../pages/tabs/tabs';
import { RelationshipPage } from '../pages/relationship/relationship';
import { UserinfoPage } from '../pages/userinfo/userinfo';

@NgModule({
  declarations: [
    MyApp,
    GoToFormsPage,
    HomePage,
    TabsPage,
    RelationshipPage,
    UserinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoToFormsPage,
    HomePage,
    TabsPage,
    RelationshipPage,
    UserinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
