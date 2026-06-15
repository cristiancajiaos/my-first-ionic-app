import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoIonic } from 'ionicons/icons';
@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon, IonItem, IonLabel, IonButton]
})
export class NewPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  items = Array.from({length: 50}, (_, i) => i);

  constructor() {
    addIcons({heart, logoIonic});
  }

  ngOnInit() {
  }

  public scrollToBottom(): void {
    this.content.scrollToBottom(300);
  }

}
