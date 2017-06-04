import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelationshipPage } from './relationship';

@NgModule({
  declarations: [
    RelationshipPage,
  ],
  imports: [
    IonicPageModule.forChild(RelationshipPage),
  ],
  exports: [
    RelationshipPage
  ]
})
export class RelationshipPageModule {}
