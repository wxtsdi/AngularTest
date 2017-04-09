import { Directive,ElementRef,Input } from '@angular/core';
//无参数指令
@Directive({
    selector:'[backgroundChange]'
})
export class backgroundChangeDirective {
    constructor(el:ElementRef) {
        el.nativeElement.style.backgroundColor='yellow';
        console.log("backgroundChangeDirective run");
        
    }
}

//有参数指令
@Directive({
    selector:'[changeBackground]'
})
export class changeBackgroundDirective {
private el:HTMLElement;

    @Input('changeBackground') set backColor(colorName:string){
        console.log("target");
        
        this.el.style.backgroundColor=colorName;
    }
    
    constructor(el:ElementRef) {
        console.log("changeBackgroundDirective initiated");
        this.el=el.nativeElement;
    }


}