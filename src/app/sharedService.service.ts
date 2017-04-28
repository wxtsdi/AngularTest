import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Injectable()
export class SharedService {
    private ItemPrices: SurItem[];
    constructor(private _http: Http) {
        this.LoadData();
    }

    GetValue(ItemName:string): any {
        if (this.ItemPrices.find(f=>f.name==ItemName)!=undefined) {
            return this.ItemPrices.find(f=>f.name==ItemName).price;
        }
        else
        {
            return "没有找到"
        }

        

    }

    LoadData() {
        //this._http.get('./PriceData.json')
         this._http.get('http://localhost:8081/items')
            .map(res => res.json())   //将response字符串映射成json对象
            .subscribe(prices => { this.ItemPrices = prices; console.log("prices loaded"); console.dir(prices)});
    }
}


class SurItem {
    constructor(public name: string, public price: number) { }
}

