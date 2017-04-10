import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {
    public Prices=new  Map<string, number>();
    constructor() {
        this.Prices.set('zj',15);
        this.Prices.set('tyg',3);
        this.Prices.set('szy',80);
        this.Prices.set('tqg',2);
    }

    public GetPrice(name:string){
        return this.Prices.has(name)?this.Prices.get(name):0;
    }

}

