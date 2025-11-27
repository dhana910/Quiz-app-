// --------------------- QUESTIONS BY CATEGORY --------------------- //

const questionBank = {
    gk: [
        { q: "Who was the first female Chief Justice of India?", a:["Indira Gandhi","Fathima Beevi","Sarojini Naidu","Sonia Gandhi"], c:1 },
        { q: "What is the fastest animal on land?", a:["Lion","Horse","Cheetah","Leopard"], c:2 },
        { q: "Which is the smallest ocean in the world?", a:["Indian","Atlantic","Arctic","Pacific"], c:2 },
        { q: "Who is called the Napoleon of India?", a:["Ashoka","Bindusara","Samudragupta","Chandragupta"], c:2 },
        { q: "Largest freshwater lake?", a:["Baikal","Victoria","Superior","Tanganyika"], c:2 },
        { q: "World Environment Day?", a:["June 3","June 4","June 5","June 6"], c:2 },
        { q:"National flower of India?", a:["Rose","Lily","Lotus","Sunflower"], c:2 },
        { q:"How many planets are in our solar system?", a:["7","8","9","10"], c:1 },
        { q:"Which country invented paper?", a:["China","Egypt","Greece","India"], c:0 },
        { q:"Who discovered penicillin?", a:["Marie Curie","Alexander Fleming","Newton","Einstein"], c:1 },
        { q:"Which is the largest continent?", a:["Africa","Asia","Europe","Antarctica"], c:1 },
        { q:"Which gas do plants absorb?", a:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], c:1 },
        { q:"Currency of Japan?", a:["Yen","Dollar","Rupee","Euro"], c:0 },
        { q:"Which planet is known as Red Planet?", a:["Mars","Venus","Mercury","Jupiter"], c:0 },
        { q:"Highest mountain in the world?", a:["K2","Everest","Kangchenjunga","Lhotse"], c:1 },
        { q:"Who painted Mona Lisa?", a:["Van Gogh","Picasso","Da Vinci","Rembrandt"], c:2 },
        { q:"Which is the smallest country?", a:["Monaco","Vatican City","Maldives","Liechtenstein"], c:1 },
        { q:"Which organ purifies blood?", a:["Heart","Kidney","Lungs","Liver"], c:1 },
        { q:"Who invented the telephone?", a:["Edison","Bell","Tesla","Marconi"], c:1 },
        { q:"Which element has chemical symbol 'O'?", a:["Gold","Oxygen","Silver","Iron"], c:1 }
    ],

    history: [
        { q: "Which river originates at Amarkantak?", a:["Ganga","Yamuna","Narmada","Godavari"], c:2 },
        { q: "First Chairman of Planning Commission?", a:["Rajendra Prasad","Nehru","Patel","Ambedkar"], c:1 },
        { q: "Who appoints UPSC Chairman?", a:["PM","CJI","Home Minister","President"], c:3 },
        { q: "Article for Lok Sabha composition?", a:["75","80","81","356"], c:2 },
        { q: "First Indian woman to scale Everest?", a:["Premlata","Bachendri Pal","Santosh Yadav","Poorna"], c:1 },
        { q:"Who wrote Arthashastra?", a:["Kalidas","Chanakya","Vyas","Valmiki"], c:1 },
        { q:"First Mughal emperor?", a:["Akbar","Babur","Aurangzeb","Shah Jahan"], c:1 },
        { q:"Indian Independence year?", a:["1945","1947","1950","1942"], c:1 },
        { q:"Founder of Sikhism?", a:["Guru Nanak","Guru Gobind Singh","Guru Tegh Bahadur","Guru Arjan"], c:0 },
        { q:"First president of India?", a:["Rajendra Prasad","Zakir Husain","Radhakrishnan","Patel"], c:0 },
        { q:"Who led the Salt March?", a:["Subhas Chandra Bose","Gandhi","Nehru","Bhagat Singh"], c:1 },
        { q:"First Indian to win Nobel Prize?", a:["Rabindranath Tagore","C.V. Raman","Hargobind Khorana","Mother Teresa"], c:0 },
        { q:"Who built Qutub Minar?", a:["Alauddin Khilji","Iltutmish","Firoz Shah","Akbar"], c:1 },
        { q:"Battle of Plassey year?", a:["1757","1761","1776","1748"], c:0 },
        { q:"Who wrote 'Discovery of India'?", a:["Nehru","Tilak","Tagore","Gandhi"], c:0 }
    ],

    policies: [
        { q:"Assertion: ONORC helps nationwide grain access. Reason: It uses Aadhaar biometric.", a:["Both true, (R) explains (A)","A true, R false","A false, R true","Both false"], c:0 },
        { q:"New PMFBY compensation category?", a:["Pest","Drought","Wild animal attacks + paddy inundation","Fertilizer shortage"], c:2 },
        { q:"Which scheme provides LPG subsidy?", a:["PM-KISAN","Ujjwala Yojana","Swachh Bharat","Digital India"], c:1 },
        { q:"Which is flagship rural job scheme?", a:["MGNREGA","PM-KISAN","Atal Pension","Smart Cities"], c:0 },
        { q:"Which scheme promotes digital payments?", a:["PM-KISAN","Digital India","Skill India","Startup India"], c:1 },
        { q:"Which scheme for farmers' income?", a:["PM-KISAN","PMFBY","MGNREGA","Pradhan Mantri Awas"], c:0 },
        { q:"Which is social security pension scheme?", a:["Atal Pension Yojana","Skill India","PM-KISAN","Swachh Bharat"], c:0 },
        { q:"Which scheme for affordable housing?", a:["PM-KISAN","PMFBY","Pradhan Mantri Awas Yojana","Smart Cities"], c:2 },
        { q:"Scheme for providing toilets?", a:["Swachh Bharat","Digital India","Skill India","Startup India"], c:0 },
        { q:"Which scheme for skill development?", a:["Skill India","PM-KISAN","PMFBY","Atal Pension"], c:0 },
        { q:"Scheme for clean energy?", a:["UJALA","PM-KISAN","Digital India","MGNREGA"], c:0 },
        { q:"Scheme for Startups?", a:["Startup India","Digital India","Skill India","PM-KISAN"], c:0 },
        { q:"Scheme for electrification in rural India?", a:["Saubhagya","PM-KISAN","MGNREGA","Digital India"], c:0 },
        { q:"Scheme for promoting women entrepreneurship?", a:["Stand Up India","Skill India","PMFBY","Atal Pension"], c:0 },
        { q:"Scheme for health insurance for poor?", a:["Ayushman Bharat","PM-KISAN","PMFBY","MGNREGA"], c:0 }
    ]
};


// --------------------- VARIABLES --------------------- //

let questions = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

// HTML elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionBox = document.getElementById("question-box");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");


// --------------------- START CATEGORY --------------------- //

document.querySelectorAll(".category").forEach(btn => {
    btn.onclick = () => {
        let cat = btn.dataset.cat;
        questions = shuffle([...questionBank[cat]]); // Randomize order
        startQuiz();
    };
});


// --------------------- QUIZ FUNCTIONS --------------------- //

function startQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    index = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    timerEl.textContent = timeLeft;

    startTimer();

    let q = questions[index];

    questionBox.textContent = q.q;
    answersDiv.innerHTML = "";
    nextBtn.style.display = "none";

    q.a.forEach((ans, i) => {
        let btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = ans;

        btn.onclick = () => checkAnswer(btn, i);

        answersDiv.appendChild(btn);
    });

    updateProgress();
}

function checkAnswer(btn, i) {
    clearInterval(timer);

    let correct = questions[index].c;

    let allButtons = document.querySelectorAll(".answer-btn");

    if (i === correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        allButtons[correct].classList.add("correct"); // Show correct answer
    }

    allButtons.forEach(b => b.disabled = true);

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    index++;
    if (index < questions.length) loadQuestion();
    else endQuiz();
};

function endQuiz() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
}

document.getElementById("restart-btn").onclick = () => {
    window.location.reload();
};


// --------------------- EXTRA FEATURES --------------------- //

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoFail();
        }
    }, 1000);
}

// If time ends → show correct answer
function autoFail() {
    let correct = questions[index].c;
    let buttons = document.querySelectorAll(".answer-btn");

    buttons[correct].classList.add("correct");  
    buttons.forEach(b => b.disabled = true);

    nextBtn.style.display = "block";
}

function updateProgress() {
    let percent = ((index) / questions.length) * 100;
    progressBar.style.width = percent + "%";
}

// Random shuffle function
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}