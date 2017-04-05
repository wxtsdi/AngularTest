import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:"my-rect",
    templateUrl:"./rect.component.html",
    styleUrls:["./rect.component.css"]
})
export class RectComponent{
    @Input() id:number;
    @Output() onSend=new EventEmitter<string>();

    private message:string="";
    buttonClick(value:string){
        this.onSend.emit(value);
        console.log("子模块发出："+value);
    }


}