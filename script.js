function sendMessage() {

    let input = document.getElementById("userInput");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    let chat = document.getElementById("chatMessages");


    // Show user's message

    let userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = message;

    chat.appendChild(userMessage);


    // Create bot response

    let botMessage = document.createElement("div");

    botMessage.className = "bot-message";


    let question = message.toLowerCase();


    if (question.includes("course")) {

        botMessage.innerHTML =
            "📚 Available courses:<br><br>" +
            "1. Data Science<br>" +
            "2. Python Programming<br>" +
            "3. Web Development<br>" +
            "4. Artificial Intelligence";

    }

    else if (
        question.includes("eligible") ||
        question.includes("eligibility")
    ) {

        botMessage.innerHTML =
            "✅ You can use the Eligibility Checker below " +
            "to check whether you meet the course requirement.";

    }

    else if (
        question.includes("register") ||
        question.includes("registration")
    ) {

        botMessage.innerHTML =
            "📝 Registration steps:<br><br>" +
            "1. Select your course.<br>" +
            "2. Check your eligibility.<br>" +
            "3. Enter your details.<br>" +
            "4. Submit the registration form.<br>" +
            "5. Wait for confirmation.";

    }

    else if (
        question.includes("hello") ||
        question.includes("hi")
    ) {

        botMessage.innerHTML =
            "Hello! 👋 How can I help you with course registration?";

    }

    else {

        botMessage.innerHTML =
            "🤖 I can help you with courses, eligibility and registration. " +
            "Try asking: 'What courses are available?'";

    }


    chat.appendChild(botMessage);

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}



function checkEligibility() {

    let name = document.getElementById("studentName").value;

    let course = document.getElementById("course").value;

    let percentage =
        Number(document.getElementById("percentage").value);

    let result =
        document.getElementById("eligibilityResult");


    if (
        name === "" ||
        course === "" ||
        percentage === 0
    ) {

        result.innerHTML =
            "⚠️ Please enter all the required details.";

        return;
    }


    if (percentage >= 50) {

        result.innerHTML =
            "✅ Congratulations " +
            name +
            "! You are eligible for " +
            course +
            ".";

    }

    else {

        result.innerHTML =
            "❌ Sorry " +
            name +
            ". You are not eligible for " +
            course +
            ". Minimum requirement is 50%.";

    }
}