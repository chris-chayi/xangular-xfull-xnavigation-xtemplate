import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController, ModalController } from '@ionic/angular';
import { ModalBaseComponent } from 'src/app/components/modal-base/modal-base.component';
import { ModalContentPage } from '../modal-content/modal-content.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalController: ModalController,
    private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.open('first');
    // this.menuCtrl.open('second');

  }

  async presentModal() {
    const modal = await this.modalController.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: ModalBaseComponent,
      componentProps: {
        rootPage: ModalContentPage,
      },
    });

    await modal.present();
  }
}
