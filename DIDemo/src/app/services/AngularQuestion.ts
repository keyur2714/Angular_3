import { IQuestion } from './IQuestion';
export class AngularQuestion extends IQuestion{
    askQuestion():string{
        return "What is Angular?";
    }      
}