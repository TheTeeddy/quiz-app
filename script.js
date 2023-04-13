"use strict";
document.addEventListener("DOMContentLoaded", () => {
    function changePage() {
        let quizNumber = 0,
            result = 0;
        const question = document.createElement("div"),
            divOfQuestions = document.createElement("div"),
            capital = document.createElement("div"),
            secondOption = document.createElement("div"),
            thirdOption = document.createElement("div"),
            fourthOption = document.createElement("div"),
            next = document.createElement("div"),
            nextDiv = document.createElement("div");
        beginQuiz();
        function beginQuiz() {
            const start = document.querySelector(".startbtn");
            start.addEventListener("click", () => {
                deletePage();
                quizStart(countries[quizNumber], quizNumber);
            });
        }

        function deletePage() {
            document.body.innerHTML = "";
        }
        function quizStart(country, index) {
            divOfQuestions.setAttribute("id", "answerDiv");
            nextDiv.classList.add("nextDiv");
            capital.classList.add("answer");
            secondOption.classList.add("answer");
            thirdOption.classList.add("answer");
            fourthOption.classList.add("answer");
            question.classList.add("question");
            question.innerHTML = `
            <h4> Which city is the capital of: <br> <span>${country}</span></h4>
        `;
            capital.innerHTML = `
            <span class="span" id="capital">${quizQuestion[index].cities[0]}</span>
        `;
            secondOption.innerHTML = `
            <span class="span">${quizQuestion[index].cities[1]}</span>
        `;
            thirdOption.innerHTML = `
            <span class="span">${quizQuestion[index].cities[2]}</span>
        `;
            fourthOption.innerHTML = `
            <span class="span">${quizQuestion[index].cities[3]}</span>
        `;
            next.innerHTML = `
            <span class="next">Next</span>
        `;
            document.body.append(question);
            document.body.append(divOfQuestions);
            divOfQuestions.append(capital);
            divOfQuestions.append(secondOption);
            divOfQuestions.append(thirdOption);
            divOfQuestions.append(fourthOption);
            document.body.append(nextDiv);
            nextDiv.append(next);

            function changeDiv() {
                const btns = document.querySelectorAll(".span");
                let answer = 0;

                btns.forEach(btn => {
                    btn.addEventListener("click", () => {
                        if (answer == 0 && btn.hasAttribute("id")) {
                            result++;
                            btn.classList.add("correct");
                        } else if (answer == 0) {
                            btn.classList.add("incorrect");
                        }
                        answer += 1;
                    });
                });
            }
            changeDiv();
            nextQuestion();
            // Task: make result and finish page for quiz, add webpack
        }
        function nextQuestion() {
            document.body.querySelector(".next").addEventListener("click", () => {
                deletePage();
                quizNumber += 1;
                quizStart(countries[quizNumber], quizNumber);
            });
        }
    }
    changePage();
    /**
     * ^
     * | change body
     * |
     */

    class Cities {
        constructor(country, cities) {
            this.country = country;
            this.cities = cities;
        }
    }

    const countries = [
        "Poland",
        "Spain",
        "Italy",
        "Germany",
        "France",
        "Hungary",
        "Republic of Moldova",
        "Romania",
        "Republic of Croatia",
        "Austria",
        "Switzerland",
        "Netherland",
        "Portugal",
        "Denmark",
        "Norway",
        "Sweden",
        "Finland",
        "Czech",
    ];

    const AnswerOptions = [
        ["Warszawa", "Krakow", "Lublin", "Katowice"],
        ["Madrid", "Barcelona", "Murcia", "Sevilla"],
        ["Roma", "Napoli", "Milano", "Palermo"],
        ["Berlin", "Frankfurt am Main", "Hamburg", "Munchen"],
        ["Paris", "Lyon", "Marseille", "Nantes"],
        ["Budapest", "Miskolc", "Pecs", "Szolnoc"],
        ["Chisinau", "Orhei", "Balti", "Briceni"],
        ["Bucharest", "Brasov", "Cluj Napoca", "Iasi"],
        ["Zagreb", "Cazma", "Ludbreg", "Karlovac"],
        ["Wien", "Graz", "Linz", "Wels"],
        ["Bern", "Luzern", "Winterthur", "Zurich"],
        ["Amsterdam", "Rotterdam", "Den Haag", "Zwolle"],
        ["Lisbon", "Porto", "Huelva", "Badajoz"],
        ["Kobenhavn", "Aarhus", "Aalborg", "Odense"],
        ["Oslo", "Bergen", "Drammen", "Kaupanger"],
        ["Stockholm", "Goterberg", "Kiruna", "Orebro"],
        ["Helsingfors", "Abo", "Tampere", "Oulu"],
        ["Prague", "Plzen", "Brno", "Pardubice"],
    ];
    const quizQuestion = [];

    for (let i = 0; i < countries.length; i++) {
        let question = new Cities(countries[i], AnswerOptions[i]);
        quizQuestion.push(question);
    }
    console.log(quizQuestion);

    // Task: make automatic quiz, add click event on answers!
});
