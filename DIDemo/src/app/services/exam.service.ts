import { IQuestion } from './IQuestion';
export class ExamService{
    iQestion : IQuestion;

    constructor(private iQuestion:IQuestion){}

    startExam():void{
        this.iQestion.askQuestion();
    }
}