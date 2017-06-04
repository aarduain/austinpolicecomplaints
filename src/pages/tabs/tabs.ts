import { Component } from '@angular/core';

import { GoToFormsPage } from '../go-to-forms/go-to-forms';
import { HomePage } from '../home/home';
import { RelationshipPage } from '../relationship/relationship';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RelationshipPage;
  tab2Root = GoToFormsPage;

  constructor() {

  }
}
