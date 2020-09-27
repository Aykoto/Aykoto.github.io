export class ToetsEvent extends Event {
    static CHANGED = "quizChanged";

    constructor(questions, current) {
        super(ToetsEvent.CHANGED);
        this.questions = questions;
        this.current = current;
    }
}