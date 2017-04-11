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
         var pr:any=this.sharedService.GetValue(value);
         this.onSend.emit(pr);       
    }

    constructor(private _sharedService:SharedService){
        this.sharedService=_sharedService;
        console.log("child view constructed!");
        
    }

}