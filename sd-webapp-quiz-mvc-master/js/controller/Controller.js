import {Toets} from "../model/Toets.js"
import {ToetsView} from "../view/ToetsView.js"

export class Controller {
    constructor() {
        this.toets = new Toets();

        this.toetsView = new ToetsView(this.toets);

        // Koppel de handlers aan de buttons
        this.toetsView.bindNextQuestionButton(this.handleNextQuestion);
        this.toetsView.bindPreviousQuestionButton(this.handlePreviousQuestion);
        this.toetsView.bindChoiceButton(this.handleChoice);
        this.toetsView.bindSubmitButton(this.handleSubmit);

        // Display eerste vraag
        this.toets._commit();
    }

    handleNextQuestion = () => {
        this.toets.setNextQuestion();
    };

    handlePreviousQuestion = () => {
        this.toets.setPreviousQuestion();
    };

    handleChoice = (id) => {
        this.toets.setGivenAnswer(id)
    };

    handleSubmit = () => {
        this.toetsView.showResult();
    };
}
