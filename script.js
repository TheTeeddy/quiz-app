document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector(".startbtn");

    start.addEventListener("click", () => {
        deletePage();
        quizStart(countries[0]);
    });

    function deletePage() {
        document.body.innerHTML = "";
    }
    function quizStart(city) {
        const question = document.createElement("div"),
            divOfQuestions = document.createElement("div"),
            capital = document.createElement("div"),
            secondOption = document.createElement("div"),
            thirdOption = document.createElement("div"),
            fourthOption = document.createElement("div");

        // divOfQuestions.classList.add("empty");
        capital.classList.add("answer");
        secondOption.classList.add("answer");
        thirdOption.classList.add("answer");
        fourthOption.classList.add("answer");
        question.classList.add("question");
        question.innerHTML = `
        <h4> Which city is the capital of: <br> <span>${city}</span></h4>
        `;
        capital.innerHTML = `
        <h1><span>${quizQuestion[0].cities[0]}</span><h1>
        `;
        secondOption.innerHTML = `
        <h1><span>${quizQuestion[0].cities[1]}</span><h1>
        `;
        thirdOption.innerHTML = `
        <h1><span>${quizQuestion[0].cities[2]}</span><h1>
        `;
        fourthOption.innerHTML = `
        <h1><span>${quizQuestion[0].cities[3]}</span><h1>
        `;
        document.body.append(question);
        document.body.append(divOfQuestions);
        divOfQuestions.append(capital);
        divOfQuestions.append(secondOption);
        divOfQuestions.append(thirdOption);
        divOfQuestions.append(fourthOption);
    }

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

    // Task: make automatic quiz, add click event on answers
});
