import { Directive,ElementRef,Input } from '@angular/core';
//无参数指令
@Directive({
    selector:'[backgroundChange]'
})
export class backgroundChangeDirective {
    constructor(el:ElementRef) {
        el.nativeElement.style.backgroundColor='yellow';
    }
}

//有参数指令
@Directive({
    selector:'[changeBackground]'
})
export class changeBackgroundDirective {
private el:HTMLElement;

    @Input('changeBackground') set backColor(colorName:string){
        this.el.style.backgroundColor=colorName;
    }
    
    constructor(el:ElementRef) {
        this.el=el.nativeElement;
    }


}