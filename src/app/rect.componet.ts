import { Component,Input } from '@angular/core';

@Component({
    selector:"my-rect",
    templateUrl:"./rect.component.html",
    styles:[`width:500px;height:30px;color:blue`]
})
export class RectComponent{
    @Input() RectName:string;
}