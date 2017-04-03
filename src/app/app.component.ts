// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent  { name = 'Angular'; }


import { Component } from '@angular/core';

@Component({
    selector:"my-app",
    templateUrl:"./app.component.html",
    styles:["width:500px;height:30px;background-color:blue"]
})
export class AppComponent{
    private names:string[]=['a','b','c'];
}