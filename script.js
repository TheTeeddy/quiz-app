"use strict";
document.addEventListener("DOMContentLoaded", () => {
    function changePage() {
        let quizNumber = 0,
            finalResult = 0;
        const question = document.createElement("div"),
            divOfQuestions = document.createElement("div"),
            capital = document.createElement("div"),
            answers = document.createElement("div"),
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

        function shuffle(array) {
            let currentIndex = array.length,
                randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }

            return array;
        }

        function deletePage() {
            document.body.innerHTML = "";
        }
        function quizStart(country, index) {
            let answer = 0;

            divOfQuestions.setAttribute("id", "answerDiv");
            nextDiv.classList.add("nextDiv");
            capital.classList.add("answer");
            answers.classList.add("answer");
            secondOption.classList.add("answer");
            thirdOption.classList.add("answer");
            fourthOption.classList.add("answer");
            question.classList.add("question");
            question.innerHTML = `
            <h4> Which city is the capital of: <br> <span>${country}</span></h4>
        `;
            //     capital.innerHTML = `
            //     <span class="span" id="capital">${quizQuestion[index].cities[0]}</span>
            // `;
            //     secondOption.innerHTML = `
            //     <span class="span">${quizQuestion[index].cities[1]}</span>
            // `;
            //     thirdOption.innerHTML = `
            //     <span class="span">${quizQuestion[index].cities[2]}</span>
            // `;
            //     fourthOption.innerHTML = `
            //     <span class="span">${quizQuestion[index].cities[3]}</span>
            // `;
            next.innerHTML = `
                <span class="next">Next</span>
            `;
            divOfQuestions.innerHTML = "";
            const citiesIndex = [];
            for (let i = 0; i < quizQuestion[0].cities.length; i++) {
                citiesIndex.push(i);
            }

            console.log(shuffle(citiesIndex));
            shuffle(citiesIndex).forEach(i => {
                const answer = document.createElement("div"),
                    span = document.createElement("span");
                answer.classList.add("answer");
                span.classList.add("span");
                span.innerHTML = quizQuestion[index].cities[i];
                if (i == 0) {
                    span.setAttribute("id", "capital");
                }
                divOfQuestions.append(answer);
                answer.append(span);
            });
            document.body.append(question);
            document.body.append(divOfQuestions);
            // divOfQuestions.append(capital);
            // divOfQuestions.append(secondOption);
            // divOfQuestions.append(thirdOption);
            // divOfQuestions.append(fourthOption);
            document.body.append(nextDiv);
            nextDiv.append(next);

            function changeDiv() {
                const btns = document.querySelectorAll(".span");

                btns.forEach(btn => {
                    btn.addEventListener("click", () => {
                        if (answer == 0 && btn.hasAttribute("id")) {
                            finalResult++;
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

            function nextQuestion() {
                document.body.querySelector(".next").addEventListener("click", () => {
                    quizNumber += 1;
                    if (quizNumber == quizQuestion.length - 1) {
                        quizStart(countries[quizNumber], quizNumber);
                        document.body.querySelector(".next").textContent = "Finish quiz";
                        document.body.querySelector(".next").addEventListener("click", () => {
                            showResult();
                        });
                    } else {
                        quizStart(countries[quizNumber], quizNumber);
                    }
                });
            }
            function showResult() {
                const result = document.createElement("div"),
                    restartQuiz = document.createElement("div");

                restartQuiz.classList.add("restart");
                result.classList.add("result");
                result.innerHTML = `
                    Your result is:<br> <span class="red">${finalResult}/${quizQuestion.length}</span> 

                    `;
                restartQuiz.innerHTML = `
                    <span class="restartQuiz">Restart quiz</span>
                `;
                deletePage();
                document.body.append(result);
                document.body.append(restartQuiz);
                document.body.querySelector(".restartQuiz").addEventListener("click", () => {
                    location.reload(true);
                });
            }
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
    // console.log(quizQuestion);

    // Task: make automatic quiz, add click event on answers!
});
