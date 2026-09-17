import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.comp.html',
    styleUrls: ['./app.comp.css']
})
export class AppComponent {
    shopName = 'IT Shop';
    onProductAdded(productName: string): void {
        alert('тОвар додано до кошикаа ж ${productName');

    }
}