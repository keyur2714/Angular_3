import { IQuestion } from './IQuestion';
export class SpringQuestion extends IQuestion{
    askQuestion():string{
        return "What is Spring?";
    }      
}