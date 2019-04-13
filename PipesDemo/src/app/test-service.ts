import { Injectable } from '@angular/core';

@Injectable()
export class TestService{
    sayHello():string{
        return "Hello...!";
    }
}