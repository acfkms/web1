import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.comp.html',
    styleUrls: ['./header.comp.css']
})
export class HeaderComponent {
    @Input() title: string = '';
}