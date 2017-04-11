import { Component, TemplateRef, ViewContainerRef,ViewRef, ViewChild } from '@angular/core';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styles: ["width:500px;height:30px;background-color:blue"]
})
export class AppComponent  {
    private msgFromChild: string = "";

    @ViewChild('rectTemp') tempRect:TemplateRef<any>;
    @ViewChild('rectTemp',{read:ViewContainerRef}) vcRef:ViewContainerRef;
    //通过模板局部变量rectTemp可以返回一个ElementRef对象（这里的template）和一个ViewContainerRef对象，如果不加{read:ViewContainerRef}
    //返回的是ElementRef对象，如果加上{read:ViewContainerRef}返回才是ViewContainerRef对象


    showMessage(obj: any) {
        this.msgFromChild = "价格："+obj;
    }

    addChildComp() {
        let vr:ViewRef= this.vcRef.createEmbeddedView(this.tempRect);
    }





}