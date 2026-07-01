const lessons = [
  {
    title: "ما هي البرمجة؟",
    text: "البرمجة هي كتابة أوامر للكمبيوتر حتى ينفذها.",
    code: 'alert("مرحبا بك في عالم البرمجة");',
    explain: "هذا الكود يعرض رسالة صغيرة للمستخدم.",
    question: "ما معنى البرمجة؟",
    answers: ["كتابة أوامر للكمبيوتر", "رسم صورة فقط", "فتح الإنترنت"],
    correct: "كتابة أوامر للكمبيوتر"
  },
  {
    title: "ما هو HTML؟",
    text: "HTML نستخدمه لبناء عناصر الصفحة مثل العنوان والنص والزر.",
    code: "<h1>مرحبا</h1>\n<p>هذا نص</p>",
    explain: "هذا الكود يعرض عنوانا ونصا في الصفحة.",
    question: "ما فائدة HTML؟",
    answers: ["بناء الصفحة", "تلوين الصفحة", "حساب النقاط"],
    correct: "بناء الصفحة"
  },
  {
    title: "ما هو CSS؟",
    text: "CSS نستخدمه لتجميل الصفحة وتغيير الألوان والخطوط.",
    code: "h1 {\n  color: blue;\n}",
    explain: "هذا الكود يجعل لون العنوان أزرق.",
    question: "ما فائدة CSS؟",
    answers: ["تجميل الصفحة", "إنشاء قاعدة بيانات", "تشغيل الكمبيوتر"],
    correct: "تجميل الصفحة"
  },
  {
    title: "ما هو JavaScript؟",
    text: "JavaScript تجعل الصفحة تتفاعل مع المستخدم.",
    code: 'function hello() {\n  alert("أهلا");\n}',
    explain: "هذا الكود ينشئ دالة تعرض رسالة.",
    question: "ما فائدة JavaScript؟",
    answers: ["إضافة التفاعل", "تغيير اسم الملف", "إغلاق الموقع"],
    correct: "إضافة التفاعل"
  },
  {
    title: "المتغيرات",
    text: "المتغير يخزن قيمة مثل الاسم أو العمر أو النقاط.",
    code: 'let name = "سالم";\nalert(name);',
    explain: "هذا الكود يخزن اسما ثم يعرضه.",
    question: "لماذا نستخدم المتغير؟",
    answers: ["لتخزين قيمة", "لحذف الكود", "لتغيير المتصفح"],
    correct: "لتخزين قيمة"
  },
  {
    title: "الأرقام",
    text: "يمكن استخدام JavaScript لحساب الأرقام.",
    code: "let total = 5 + 3;\nalert(total);",
    explain: "هذا الكود يجمع 5 و 3 ثم يعرض الناتج.",
    question: "ما ناتج 5 + 3؟",
    answers: ["8", "2", "15"],
    correct: "8"
  },
  {
    title: "النصوص",
    text: "النصوص تكتب بين علامتي اقتباس.",
    code: 'let message = "أنا أتعلم البرمجة";',
    explain: "هذا الكود يحفظ جملة داخل متغير.",
    question: "أين نكتب النص في JavaScript؟",
    answers: ["بين علامتي اقتباس", "بدون أي علامات", "داخل صورة"],
    correct: "بين علامتي اقتباس"
  },
  {
    title: "الشروط",
    text: "الشروط تجعل البرنامج يتخذ قرارا.",
    code: 'let score = 7;\nif (score >= 5) {\n  alert("ناجح");\n}',
    explain: "إذا كانت النقاط 5 أو أكثر تظهر رسالة ناجح.",
    question: "ماذا تفعل if؟",
    answers: ["تتخذ قرارا", "تلون الصفحة", "تنشئ ملفا"],
    correct: "تتخذ قرارا"
  },
  {
    title: "else",
    text: "else تعمل عندما يكون الشرط غير صحيح.",
    code: 'let score = 3;\nif (score >= 5) {\n  alert("ناجح");\n} else {\n  alert("حاول مرة أخرى");\n}',
    explain: "إذا كانت النقاط أقل من 5 تظهر رسالة حاول مرة أخرى.",
    question: "متى تعمل else؟",
    answers: ["عندما يكون الشرط خطأ", "دائما", "قبل if"],
    correct: "عندما يكون الشرط خطأ"
  },
  {
    title: "الدوال",
    text: "الدالة مجموعة أوامر لها اسم.",
    code: 'function welcome() {\n  alert("مرحبا");\n}\nwelcome();',
    explain: "هذا الكود ينشئ دالة ثم يشغلها.",
    question: "ما فائدة الدالة؟",
    answers: ["إعادة استخدام الأوامر", "حذف الصفحة", "تغيير اللغة"],
    correct: "إعادة استخدام الأوامر"
  },
  {
    title: "الأزرار",
    text: "يمكن جعل الزر يشغل كود JavaScript.",
    code: '<button onclick="welcome()">اضغط</button>',
    explain: "عند الضغط على الزر يتم تشغيل دالة welcome.",
    question: "ماذا يعني onclick؟",
    answers: ["عند الضغط", "عند حذف الملف", "عند فتح الجهاز"],
    correct: "عند الضغط"
  },
  {
    title: "المصفوفات",
    text: "المصفوفة تحفظ أكثر من قيمة.",
    code: 'let languages = ["HTML", "CSS", "JavaScript"];',
    explain: "هذا الكود يحفظ ثلاث لغات في متغير واحد.",
    question: "ما فائدة المصفوفة؟",
    answers: ["حفظ أكثر من قيمة", "تغيير لون واحد", "إغلاق الصفحة"],
    correct: "حفظ أكثر من قيمة"
  },
  {
    title: "الفهرس داخل المصفوفة",
    text: "أول عنصر في المصفوفة رقمه 0.",
    code: 'let lessons = ["HTML", "CSS"];\nalert(lessons[0]);',
    explain: "هذا الكود يعرض أول عنصر وهو HTML.",
    question: "ما رقم أول عنصر في المصفوفة؟",
    answers: ["0", "1", "10"],
    correct: "0"
  },
  {
    title: "الحلقات",
    text: "الحلقة تكرر الكود أكثر من مرة.",
    code: "for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
    explain: "هذا الكود يطبع الأرقام من 1 إلى 3.",
    question: "ما فائدة الحلقة؟",
    answers: ["تكرار الأوامر", "حذف الصور", "تغيير اسم الموقع"],
    correct: "تكرار الأوامر"
  },
  {
    title: "تغيير محتوى الصفحة",
    text: "يمكن تغيير النص داخل الصفحة باستخدام JavaScript.",
    code: 'document.getElementById("title").textContent = "مرحبا";',
    explain: "هذا الكود يبحث عن عنصر ثم يغير النص داخله.",
    question: "ماذا تفعل textContent؟",
    answers: ["تغير النص", "تغير اسم الملف", "تغلق المتصفح"],
    correct: "تغير النص"
  }
];

let current = 0;
let score = 0;

const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const lessonCode = document.getElementById("lessonCode");
const codeExplain = document.getElementById("codeExplain");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("nextButton");

function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const oldValue = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = oldValue;
  }

  return newArray;
}

function showLesson() {
  const lesson = lessons[current];

  lessonTitle.textContent = lesson.title;
  lessonText.textContent = lesson.text;
  lessonCode.textContent = lesson.code;
  codeExplain.textContent = lesson.explain;
  question.textContent = lesson.question;
  result.textContent = "";
  answers.innerHTML = "";

  const randomAnswers = shuffleArray(lesson.answers);

  randomAnswers.forEach(function(answer) {
    const button = document.createElement("button");
    button.textContent = answer;

    button.addEventListener("click", function() {
      checkAnswer(answer);
    });

    answers.appendChild(button);
  });
}

function checkAnswer(answer) {
  const lesson = lessons[current];

  if (answer === lesson.correct) {
    score = score + 1;
    result.textContent = "إجابة صحيحة، أحسنت!";
  } else {
    result.textContent = "إجابة غير صحيحة، حاول مرة أخرى.";
  }

  scoreText.textContent = score;
}

function nextLesson() {
  current = current + 1;

  if (current >= lessons.length) {
    current = 0;
  }

  showLesson();
}

nextButton.addEventListener("click", nextLesson);

showLesson();
