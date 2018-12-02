import { IQuestion } from './IQuestion';
export class PythonQuestion extends IQuestion{
    askQuestion():string{
        return "What is Python?";
    }      
}