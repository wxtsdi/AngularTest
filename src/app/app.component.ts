import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styles: ["width:500px;height:30px;background-color:blue"]
})
export class AppComponent {
    private msgFromChild:string="";
    showMessage(obj:any) {
        console.log("父模块开始接收");
        this.msgFromChild=obj;
    }
}