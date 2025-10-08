// Personality types data with icons
const personalityTypes = {
    INTJ: {
        icon: "fas fa-chess-rook",
        title: "The Architect",
        description: "INTJs are analytical problem-solvers who value intelligence, competence, and structure. They're strategic thinkers who approach dating with the same methodical approach they apply to other areas of life.",
        traits: ["Analytical", "Strategic", "Independent", "Curious", "Efficient", "Reserved"],
        datingStyle: "INTJs approach dating with a long-term perspective. They're selective about partners and value intellectual compatibility. They prefer deep, meaningful conversations over small talk and are attracted to intelligence and competence.",
        tinderTips: "Highlight your intellectual interests in your bio. Use photos that show your thoughtful side. Be direct about what you're looking for. Look for profiles that suggest intelligence and depth. Don't be afraid to initiate conversations about interesting topics.",
        compatibility: ["ENFP", "ENTP", "INFJ", "INFP"]
    },
    INTP: {
        icon: "fas fa-flask",
        title: "The Logician",
        description: "INTPs are innovative inventors with an unquenchable thirst for knowledge. They're logical, analytical, and creative thinkers who enjoy exploring complex ideas and theories.",
        traits: ["Innovative", "Curious", "Logical", "Abstract", "Independent", "Flexible"],
        datingStyle: "INTPs value intellectual stimulation and independence in relationships. They enjoy deep conversations and exploring new ideas with their partners. They can be slow to commit but are loyal once they do.",
        tinderTips: "Showcase your unique interests and hobbies. Use photos that reflect your personality. Be authentic and don't try to be someone you're not. Look for profiles that suggest curiosity and open-mindedness. Start conversations with interesting questions or topics.",
        compatibility: ["ENTJ", "ESTJ", "INFJ", "INFP"]
    },
    ENTJ: {
        icon: "fas fa-crown",
        title: "The Commander",
        description: "ENTJs are bold, strong-willed leaders who approach everything with analytical rigor. They're strategic, organized, and natural-born leaders who value efficiency and competence.",
        traits: ["Bold", "Strategic", "Confident", "Organized", "Efficient", "Decisive"],
        datingStyle: "ENTJs approach dating with confidence and directness. They're attracted to ambitious, intelligent partners who can match their energy. They value growth and improvement in relationships.",
        tinderTips: "Highlight your ambitions and achievements in your bio. Use confident, professional photos. Be direct about your intentions. Look for profiles that suggest ambition and drive. Don't be afraid to take the lead in conversations.",
        compatibility: ["INFP", "INTP", "ENFP", "ENTP"]
    },
    ENTP: {
        icon: "fas fa-comments",
        title: "The Debater",
        description: "ENTPs are smart and curious thinkers who love intellectual challenges. They're quick-witted, innovative, and enjoy exploring new ideas and possibilities.",
        traits: ["Innovative", "Curious", "Witty", "Energetic", "Analytical", "Adaptable"],
        datingStyle: "ENTPs enjoy intellectual banter and stimulating conversations. They're attracted to partners who can challenge them mentally. They value independence and intellectual growth in relationships.",
        tinderTips: "Showcase your wit and intelligence in your bio. Use photos that show your energetic personality. Be playful and engaging in conversations. Look for profiles that suggest intelligence and a sense of humor. Don't be afraid to debate or discuss interesting topics.",
        compatibility: ["INFJ", "INTJ", "ENFP", "INFP"]
    },
    INFJ: {
        icon: "fas fa-dove",
        title: "The Advocate",
        description: "INFJs are creative, insightful, and inspiring individuals. They're idealistic and principled, with a deep concern for helping others and making the world a better place.",
        traits: ["Insightful", "Creative", "Empathetic", "Idealistic", "Principled", "Reserved"],
        datingStyle: "INFJs approach dating with depth and sincerity. They value emotional connection and shared values. They're looking for meaningful, long-term relationships with partners who understand their complex inner world.",
        tinderTips: "Express your values and passions in your bio. Use authentic, thoughtful photos. Be genuine and sincere in conversations. Look for profiles that suggest depth and emotional intelligence. Don't be afraid to share your dreams and aspirations.",
        compatibility: ["ENFP", "ENTP", "INTJ", "INFP"]
    },
    INFP: {
        icon: "fas fa-heart",
        title: "The Mediator",
        description: "INFPs are poetic, kind, and altruistic individuals. They're guided by their principles and values, with a deep concern for others and a rich inner world.",
        traits: ["Empathetic", "Idealistic", "Creative", "Authentic", "Principled", "Reserved"],
        datingStyle: "INFPs approach dating with hope and idealism. They value emotional connection and shared values. They're looking for authentic relationships where they can be their true selves.",
        tinderTips: "Express your authentic self in your bio. Use photos that reflect your personality and interests. Be genuine and open in conversations. Look for profiles that suggest kindness and emotional depth. Don't be afraid to share your feelings and values.",
        compatibility: ["ENFJ", "ENTJ", "INFJ", "INTJ"]
    },
    ENFJ: {
        icon: "fas fa-hands-helping",
        title: "The Protagonist",
        description: "ENFJs are charismatic leaders who are passionate about helping others. They're warm, empathetic, and inspiring individuals who excel at bringing people together.",
        traits: ["Charismatic", "Empathetic", "Inspiring", "Organized", "Altruistic", "Energetic"],
        datingStyle: "ENFJs approach dating with warmth and enthusiasm. They value emotional connection and shared values. They're natural nurturers who enjoy supporting their partners' growth and happiness.",
        tinderTips: "Express your warmth and empathy in your bio. Use photos that show your social nature. Be engaging and attentive in conversations. Look for profiles that suggest emotional intelligence and kindness. Don't be afraid to show your caring nature.",
        compatibility: ["INFP", "ISFP", "ENFP", "ENTP"]
    },
    ENFP: {
        icon: "fas fa-rainbow",
        title: "The Campaigner",
        description: "ENFPs are enthusiastic, creative, and sociable free spirits. They're charismatic and inspiring individuals who see possibilities everywhere and love connecting with people.",
        traits: ["Enthusiastic", "Creative", "Sociable", "Empathetic", "Optimistic", "Spontaneous"],
        datingStyle: "ENFPs approach dating with enthusiasm and optimism. They value emotional connection and shared experiences. They're looking for partners who can match their energy and share their zest for life.",
        tinderTips: "Express your enthusiasm and creativity in your bio. Use colorful, energetic photos. Be engaging and playful in conversations. Look for profiles that suggest creativity and a positive outlook. Don't be afraid to share your dreams and passions.",
        compatibility: ["INFJ", "INTJ", "ENFJ", "ENTJ"]
    },
    ISTJ: {
        icon: "fas fa-balance-scale",
        title: "The Logistician",
        description: "ISTJs are practical, fact-minded individuals who value responsibility and tradition. They're reliable, organized, and detail-oriented with a strong sense of duty.",
        traits: ["Practical", "Reliable", "Organized", "Detail-oriented", "Responsible", "Traditional"],
        datingStyle: "ISTJs approach dating with seriousness and commitment. They value stability and shared values. They're looking for reliable, long-term relationships with partners who share their practical approach to life.",
        tinderTips: "Express your reliability and values in your bio. Use classic, well-presented photos. Be straightforward and honest in conversations. Look for profiles that suggest stability and responsibility. Don't be afraid to share your goals and plans.",
        compatibility: ["ESFP", "ESTP", "ISFJ", "ISTP"]
    },
    ISFJ: {
        icon: "fas fa-shield-alt",
        title: "The Protector",
        description: "ISFJs are warm, practical, and caring individuals who are dedicated to helping others. They're reliable, observant, and have a strong sense of responsibility.",
        traits: ["Warm", "Practical", "Caring", "Reliable", "Observant", "Traditional"],
        datingStyle: "ISFJs approach dating with warmth and dedication. They value emotional connection and shared values. They're looking for stable, committed relationships where they can care for their partners.",
        tinderTips: "Express your caring nature in your bio. Use warm, approachable photos. Be attentive and supportive in conversations. Look for profiles that suggest kindness and reliability. Don't be afraid to show your nurturing side.",
        compatibility: ["ESFP", "ESTP", "ENFJ", "ENTJ"]
    },
    ESTJ: {
        icon: "fas fa-landmark",
        title: "The Executive",
        description: "ESTJs are organized, practical, and decisive individuals who value tradition and order. They're natural leaders who excel at bringing people together and getting things done.",
        traits: ["Organized", "Practical", "Decisive", "Responsible", "Traditional", "Efficient"],
        datingStyle: "ESTJs approach dating with directness and commitment. They value stability and shared values. They're looking for reliable, long-term relationships with partners who share their practical approach to life.",
        tinderTips: "Express your reliability and leadership in your bio. Use confident, professional photos. Be direct and honest in conversations. Look for profiles that suggest stability and responsibility. Don't be afraid to take charge in planning dates.",
        compatibility: ["INFP", "INTP", "ISFP", "ISTP"]
    },
    ESFJ: {
        icon: "fas fa-hands",
        title: "The Consul",
        description: "ESFJs are warm, caring, and sociable individuals who are dedicated to helping others. They're organized, practical, and have a strong sense of responsibility.",
        traits: ["Warm", "Caring", "Sociable", "Organized", "Practical", "Responsible"],
        datingStyle: "ESFJs approach dating with warmth and enthusiasm. They value emotional connection and shared values. They're looking for stable, committed relationships where they can care for their partners.",
        tinderTips: "Express your warmth and sociability in your bio. Use friendly, approachable photos. Be engaging and supportive in conversations. Look for profiles that suggest kindness and reliability. Don't be afraid to show your caring nature.",
        compatibility: ["INFP", "ISFP", "ENFP", "ENTP"]
    },
    ISTP: {
        icon: "fas fa-tools",
        title: "The Virtuoso",
        description: "ISTPs are bold, practical, and experimental individuals who love exploring and mastering the physical world. They're logical, adaptable, and have a knack for understanding how things work.",
        traits: ["Bold", "Practical", "Experimental", "Logical", "Adaptable", "Independent"],
        datingStyle: "ISTPs approach dating with a relaxed, practical attitude. They value independence and shared experiences. They're looking for partners who can match their adventurous spirit and respect their need for space.",
        tinderTips: "Express your practical skills and interests in your bio. Use active, adventurous photos. Be straightforward and relaxed in conversations. Look for profiles that suggest adventure and independence. Don't be afraid to suggest exciting dates.",
        compatibility: ["ESFJ", "ESTJ", "ENFJ", "ENTJ"]
    },
    ISFP: {
        icon: "fas fa-palette",
        title: "The Adventurer",
        description: "ISFPs are flexible, charming, and artistic individuals who love exploring new possibilities. They're sensitive, observant, and have a deep appreciation for beauty and aesthetics.",
        traits: ["Flexible", "Charming", "Artistic", "Sensitive", "Observant", "Adventurous"],
        datingStyle: "ISFPs approach dating with openness and authenticity. They value emotional connection and shared experiences. They're looking for relationships where they can express their creativity and be their true selves.",
        tinderTips: "Express your artistic side in your bio. Use creative, aesthetic photos. Be genuine and open in conversations. Look for profiles that suggest creativity and sensitivity. Don't be afraid to share your passions and interests.",
        compatibility: ["ESFJ", "ESTJ", "ENFJ", "ENTJ"]
    },
    ESTP: {
        icon: "fas fa-rocket",
        title: "The Entrepreneur",
        description: "ESTPs are energetic, action-oriented individuals who love living in the moment. They're perceptive, practical, and have a knack for adapting to new situations.",
        traits: ["Energetic", "Action-oriented", "Perceptive", "Practical", "Adaptable", "Spontaneous"],
        datingStyle: "ESTPs approach dating with energy and spontaneity. They value excitement and shared experiences. They're looking for partners who can match their adventurous spirit and keep up with their active lifestyle.",
        tinderTips: "Express your energy and spontaneity in your bio. Use active, exciting photos. Be engaging and playful in conversations. Look for profiles that suggest adventure and excitement. Don't be afraid to suggest spontaneous dates.",
        compatibility: ["ISFJ", "ISTJ", "INFJ", "INTJ"]
    },
    ESFP: {
        icon: "fas fa-theater-masks",
        title: "The Entertainer",
        description: "ESFPs are enthusiastic, friendly, and spontaneous individuals who love being the center of attention. They're warm, practical, and have a knack for entertaining others.",
        traits: ["Enthusiastic", "Friendly", "Spontaneous", "Warm", "Practical", "Sociable"],
        datingStyle: "ESFPs approach dating with enthusiasm and warmth. They value fun and shared experiences. They're looking for partners who can match their energy and share their love for life.",
        tinderTips: "Express your enthusiasm and sociability in your bio. Use colorful, energetic photos. Be engaging and playful in conversations. Look for profiles that suggest fun and sociability. Don't be afraid to show your entertaining side.",
        compatibility: ["ISFJ", "ISTJ", "INFJ", "INTJ"]
    }
};

// Quiz questions
const questions = [
    {
        dimension: "EI",
        question: "At a party, you're more likely to:",
        options: [
            { text: "Spend time talking with many different people", value: "E" },
            { text: "Have deep conversations with a few close friends", value: "I" }
        ]
    },
    {
        dimension: "SN",
        question: "When making a decision, you rely more on:",
        options: [
            { text: "Facts and concrete details", value: "S" },
            { text: "Patterns and future possibilities", value: "N" }
        ]
    },
    {
        dimension: "TF",
        question: "When solving a problem, you prioritize:",
        options: [
            { text: "Logic and objective analysis", value: "T" },
            { text: "People's feelings and harmony", value: "F" }
        ]
    },
    {
        dimension: "JP",
        question: "You prefer to:",
        options: [
            { text: "Plan things in advance and stick to the plan", value: "J" },
            { text: "Keep your options open and adapt as you go", value: "P" }
        ]
    },
    {
        dimension: "EI",
        question: "After a long day, you feel more energized by:",
        options: [
            { text: "Spending time with friends or socializing", value: "E" },
            { text: "Having quiet time alone to recharge", value: "I" }
        ]
    },
    {
        dimension: "SN",
        question: "You're more interested in:",
        options: [
            { text: "What is actually happening now", value: "S" },
            { text: "What could happen in the future", value: "N" }
        ]
    },
    {
        dimension: "TF",
        question: "When giving feedback, you focus on:",
        options: [
            { text: "What's correct and logical", value: "T" },
            { text: "How it will make the person feel", value: "F" }
        ]
    },
    {
        dimension: "JP",
        question: "You work best when:",
        options: [
            { text: "You have clear deadlines and structure", value: "J" },
            { text: "You have flexibility and can be spontaneous", value: "P" }
        ]
    },
    {
        dimension: "EI",
        question: "In group discussions, you tend to:",
        options: [
            { text: "Speak up readily and share your ideas", value: "E" },
            { text: "Listen carefully and think before speaking", value: "I" }
        ]
    },
    {
        dimension: "SN",
        question: "You trust more in:",
        options: [
            { text: "Your past experiences and proven methods", value: "S" },
            { text: "Your intuition and new approaches", value: "N" }
        ]
    }
];

// Quiz state
let currentQuestion = 0;
let answers = {};
let personalityType = '';

// DOM elements
const welcomeScreen = document.querySelector('.welcome-screen');
const quizScreen = document.querySelector('.quiz-screen');
const resultScreen = document.querySelector('.result-screen');
const startQuizBtn = document.getElementById('startQuiz');
const questionCard = document.getElementById('questionCard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const personalityTypeEl = document.getElementById('personalityType');
const personalityIcon = document.getElementById('personalityIcon');
const personalityTitle = document.getElementById('personalityTitle');
const personalityDescription = document.getElementById('personalityDescription');
const traitsList = document.getElementById('traitsList');
const datingStyle = document.getElementById('datingStyle');
const tinderTips = document.getElementById('tinderTips');
const compatibilityTypes = document.getElementById('compatibilityTypes');
const shareBtn = document.getElementById('shareBtn');
const restartBtn = document.getElementById('restartBtn');

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
shareBtn.addEventListener('click', shareResults);
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    answers = {};
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionCard.innerHTML = `
        <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
        <div class="question-text">${question.question}</div>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option" data-index="${index}" data-value="${option.value}">
                    <div class="option-icon"><i class="fas fa-circle"></i></div>
                    <div>${option.text}</div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners to options
    const options = questionCard.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    // Update progress bar
    updateProgressBar();

        // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = true;
}

function selectOption(e) {
    const options = questionCard.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    e.currentTarget.classList.add('selected');
    answers[questions[currentQuestion].dimension] = e.currentTarget.dataset.value;
    nextBtn.disabled = false;
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function showResults() {
    // Calculate personality type
    let type = '';
    
    // Determine each dimension
    const eiCount = { E: 0, I: 0 };
    const snCount = { S: 0, N: 0 };
    const tfCount = { T: 0, F: 0 };
    const jpCount = { J: 0, P: 0 };
    
    questions.forEach(question => {
        const answer = answers[question.dimension];
        if (answer) {
            if (question.dimension === 'EI') {
                eiCount[answer]++;
            } else if (question.dimension === 'SN') {
                snCount[answer]++;
            } else if (question.dimension === 'TF') {
                tfCount[answer]++;
            } else if (question.dimension === 'JP') {
                jpCount[answer]++;
            }
        }
    });
    
    type += eiCount.E >= eiCount.I ? 'E' : 'I';
    type += snCount.N >= snCount.S ? 'N' : 'S';
    type += tfCount.F >= tfCount.T ? 'F' : 'T';
    type += jpCount.P >= jpCount.J ? 'P' : 'J';
    
    personalityType = type;
    
    // Update result screen
    const personality = personalityTypes[type];
    personalityTypeEl.textContent = type;
    personalityIcon.innerHTML = `<i class="${personality.icon}"></i>`;
    personalityTitle.textContent = personality.title;
    personalityDescription.textContent = personality.description;
    datingStyle.textContent = personality.datingStyle;
    tinderTips.textContent = personality.tinderTips;

    // Update traits
    traitsList.innerHTML = '';
    personality.traits.forEach(trait => {
        const span = document.createElement('span');
        span.className = 'trait';
        span.textContent = trait;
        traitsList.appendChild(span);
    });
    
    // Update compatibility types
    compatibilityTypes.innerHTML = '';
    personality.compatibility.forEach(compType => {
        const comp = personalityTypes[compType];
        const div = document.createElement('div');
        div.className = 'compatibility-type';
        div.innerHTML = `
            <div class="compatibility-code">${compType}</div>
            <div class="compatibility-name">${comp.title}</div>
        `;
        compatibilityTypes.appendChild(div);
    });
    
    // Show result screen
    quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
}

function shareResults() {
    const personality = personalityTypes[personalityType];
    const text = `I just discovered I'm an ${personalityType} - ${personality.title}!

 ${personality.description}

My Dating Style: ${personality.datingStyle}

My Personality Traits: ${personality.traits.join(', ')}

Tinder Tips for me: ${personality.tinderTips}

Find your personality type at Mindzy!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Mindzy Personality Type',
            text: text
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // Show notification
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#333';
        notification.style.color = '#fff';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.textContent = 'Personality details copied to clipboard!';
        document.body.appendChild(notification);

    setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    currentQuestion = 0;
    answers = {};
}
