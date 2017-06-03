import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoToFormsPage } from './go-to-forms';

@NgModule({
  declarations: [
    GoToFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoToFormsPage),
  ],
  exports: [
    GoToFormsPage
  ]
})
export class GoToFormsPageModule {}
