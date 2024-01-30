import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class LoginComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const toggleButton = this.el.nativeElement.querySelector('.toggle');
    const container = this.el.nativeElement.querySelector('.container');

    this.renderer.listen(toggleButton, 'click', () => {
      this.renderer.addClass(container, 'active');
    });

    const closeButton = this.el.nativeElement.querySelector('.close');
    this.renderer.listen(closeButton, 'click', () => {
      this.renderer.removeClass(container, 'active');
    });
  }
}
