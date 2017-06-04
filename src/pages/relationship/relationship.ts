import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
/**
 * Generated class for the RelationshipPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-relationship',
  templateUrl: 'relationship.html',
})
export class RelationshipPage {
  items: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // get the items from the listing
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelationshipPage');
  }

  submitPage(item) {
    this.navCtrl.push(HomePage, {
      items: this.items
    });
    // get to the next page with the selection
  }

  itemSelected(event) {
    this.items = event;
    alert(event);
  }

}
