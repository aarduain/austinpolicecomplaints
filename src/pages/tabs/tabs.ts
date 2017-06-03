import { Component } from '@angular/core';

import { GoToFormsPage } from '../go-to-forms/go-to-forms';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GoToFormsPage;

  constructor() {

  }
}
