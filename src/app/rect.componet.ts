import { Component,Input,Output,EventEmitter } from '@angular/core';
import { SharedService } from "./sharedService.service";

@Component({ 
    selector:"my-rect",
    templateUrl:"./rect.component.html",
    styleUrls:["./rect.component.css"],
    providers:[SharedService]
})
export class RectComponent{
    @Output() onSend=new EventEmitter<string>();

    private sharedService:SharedService;
  
    buttonClick(value:string){
         var pr:number=this.sharedService.GetPrice(value);
         this.onSend.emit(pr.toString());       
    }

    constructor(private _sharedService:SharedService){
        this.sharedService=_sharedService;
    }

}