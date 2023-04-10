document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector(".startbtn");

    start.addEventListener("click", () => {
        deletePage();
        setTimeout(quizStart, 500);
    });

    function deletePage() {
        document.body.style.cssText = `opacity: 0.4`;
        setTimeout(() => {
            document.body.innerHTML = "";
            document.body.style.cssText = `opacity: 1`;
        }, 300);
    }
    function quizStart() {
        const question = document.createElement("div");
        question.classList.add("question");
        question.innerHTML = `
        <h4> Which city is the capital of </h4>
        `;

        document.body.append(question);
    }

    /**
     * ^
     * | change body
     * |
     */
});
