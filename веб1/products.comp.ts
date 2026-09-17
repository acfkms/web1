import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-products',
    templateUrl: './products.comp.html'
    styleUrls: ['./products.comp.css']


})
export class ProductsComp {
    @Output() productAdded = new EventEmitter<string>();
    products = [
        {
            name: 'ноут'
            price: '18000'
            description: 'цвуакперноглшгдддшлекв'
        },
        {
            name: 'телефон'
            price: '8000'
            description: 'цвуакпернокуекглшгдддшлекв'
        }, 
        {
            name: 'холодильник'
            price: '98000'
            description: 'цвуакперногуцааааааааалшгдддшлекв'
        },               
    ];
    onProductBuy(productName: string) {
        this.productAdded.emit(productName);
    }
}