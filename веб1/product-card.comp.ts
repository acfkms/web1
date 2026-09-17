import { Compoent, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.comp.html',
    styleUrls: ['./product-card.comp.css']
})
export class ProductCardComponent {
    @Input() name: string = '';
    @Input() price: number = 0;
    @Input() description: string = '';
    @Output() buy = new EventEmitter<string>();
    onBuyClick() {
        this.buy.emit(this.name);
    }
}