const lessons = [
  {title:"ما هي البرمجة؟",text:"البرمجة هي كتابة أوامر للكمبيوتر.",code:'alert("مرحبا");',explain:"يعرض رسالة.",question:"ما معنى البرمجة؟",answers:["كتابة أوامر للكمبيوتر","رسم صورة","فتح الإنترنت"],correct:"كتابة أوامر للكمبيوتر"},
  {title:"HTML",text:"HTML تبني عناصر الصفحة.",code:"<h1>مرحبا</h1>",explain:"يعرض عنوانًا.",question:"ما فائدة HTML؟",answers:["بناء الصفحة","تلوين الصفحة","حساب الأرقام"],correct:"بناء الصفحة"},
  {title:"CSS",text:"CSS تستخدم لتجميل الصفحة.",code:"h1 { color: blue; }",explain:"يجعل العنوان أزرق.",question:"ما فائدة CSS؟",answers:["تجميل الصفحة","إنشاء متغير","عرض رسالة"],correct:"تجميل الصفحة"},
  {title:"JavaScript",text:"JavaScript تضيف التفاعل.",code:'alert("أهلا");',explain:"يعرض رسالة.",question:"ما فائدة JavaScript؟",answers:["إضافة التفاعل","كتابة العناوين فقط","حفظ الصور"],correct:"إضافة التفاعل"},
  {title:"المتغيرات",text:"المتغير يخزن قيمة.",code:'let name = "سالم";',explain:"يحفظ اسمًا.",question:"لماذا نستخدم المتغير؟",answers:["لتخزين قيمة","لحذف الصفحة","لتكبير الشاشة"],correct:"لتخزين قيمة"},
  {title:"let",text:"let تستخدم لإنشاء متغير.",code:"let age = 20;",explain:"يحفظ العمر.",question:"ماذا تفعل let؟",answers:["تنشئ متغيرًا","تنشئ صورة","تغلق الصفحة"],correct:"تنشئ متغيرًا"},
  {title:"النصوص",text:"النصوص تكتب بين علامات اقتباس.",code:'let msg = "مرحبا";',explain:"يحفظ نصًا.",question:"كيف نكتب النص؟",answers:["بين علامتي اقتباس","بدون علامات","داخل أقواس فقط"],correct:"بين علامتي اقتباس"},
  {title:"الأرقام",text:"يمكن إجراء عمليات حسابية.",code:"let total = 5 + 3;",explain:"يجمع رقمين.",question:"ما ناتج 5 + 3؟",answers:["8","2","15"],correct:"8"},
  {title:"الجمع",text:"نستخدم + للجمع.",code:"let x = 10 + 2;",explain:"الناتج 12.",question:"أي رمز للجمع؟",answers:["+","-","*"],correct:"+"},
  {title:"الطرح",text:"نستخدم - للطرح.",code:"let x = 10 - 2;",explain:"الناتج 8.",question:"أي رمز للطرح؟",answers:["-","+","/"],correct:"-"},
  {title:"الضرب",text:"نستخدم * للضرب.",code:"let x = 4 * 3;",explain:"الناتج 12.",question:"أي رمز للضرب؟",answers:["*","+","="],correct:"*"},
  {title:"القسمة",text:"نستخدم / للقسمة.",code:"let x = 10 / 2;",explain:"الناتج 5.",question:"أي رمز للقسمة؟",answers:["/","*","-"],correct:"/"},
  {title:"alert",text:"alert تعرض رسالة.",code:'alert("تعلمت alert");',explain:"تظهر نافذة صغيرة.",question:"ماذا تفعل alert؟",answers:["تعرض رسالة","تغير اللون","تنشئ زرًا"],correct:"تعرض رسالة"},
  {title:"console.log",text:"تطبع في Console.",code:'console.log("مرحبا");',explain:"تظهر في أدوات المطور.",question:"أين يظهر console.log؟",answers:["في Console","في العنوان","في الصورة"],correct:"في Console"},
  {title:"الدوال",text:"الدالة مجموعة أوامر.",code:'function hello(){ alert("Hi"); }',explain:"ينشئ دالة.",question:"ما فائدة الدالة؟",answers:["إعادة استخدام الأوامر","حذف الكود","تغيير المتصفح"],correct:"إعادة استخدام الأوامر"},
  {title:"استدعاء الدالة",text:"نشغل الدالة بكتابة اسمها.",code:"hello();",explain:"يشغل دالة hello.",question:"كيف نستدعي دالة hello؟",answers:["hello();","call hello","run hello"],correct:"hello();"},
  {title:"if",text:"if تجعل البرنامج يقرر.",code:"if (age >= 18) { alert('كبير'); }",explain:"يتحقق من العمر.",question:"ماذا تفعل if؟",answers:["تتخذ قرارًا","تلون الزر","تنشئ ملفًا"],correct:"تتخذ قرارًا"},
  {title:"else",text:"else تعمل إذا الشرط خطأ.",code:"if (x > 5){} else {}",explain:"مسار بديل.",question:"متى تعمل else؟",answers:["عندما يكون الشرط خطأ","دائمًا","قبل if"],correct:"عندما يكون الشرط خطأ"},
  {title:"المقارنة",text:"نستخدم === للمقارنة.",code:"if (name === 'سالم') {}",explain:"يقارن القيم.",question:"أي رمز للمقارنة الدقيقة؟",answers:["===","=","+"],correct:"==="},
  {title:"أكبر من",text:"نستخدم >.",code:"if (score > 10) {}",explain:"يتحقق إذا أكبر.",question:"ما رمز أكبر من؟",answers:[">","<","="],correct:">"},
  {title:"أصغر من",text:"نستخدم <.",code:"if (score < 10) {}",explain:"يتحقق إذا أصغر.",question:"ما رمز أصغر من؟",answers:["<",">","+"],correct:"<"},
  {title:"المصفوفة",text:"المصفوفة تحفظ عدة قيم.",code:'let items = ["HTML","CSS"];',explain:"يحفظ عنصرين.",question:"ما فائدة المصفوفة؟",answers:["حفظ أكثر من قيمة","حفظ قيمة واحدة فقط","إغلاق الصفحة"],correct:"حفظ أكثر من قيمة"},
  {title:"فهرس المصفوفة",text:"أول عنصر رقمه 0.",code:"items[0]",explain:"يجلب أول عنصر.",question:"ما رقم أول عنصر؟",answers:["0","1","2"],correct:"0"},
  {title:"length",text:"length تعطي عدد العناصر.",code:"items.length",explain:"يعرض طول المصفوفة.",question:"ماذا تعطي length؟",answers:["عدد العناصر","لون العنصر","اسم الملف"],correct:"عدد العناصر"},
  {title:"push",text:"push تضيف عنصرًا للمصفوفة.",code:"items.push('JS');",explain:"يضيف JS.",question:"ماذا تفعل push؟",answers:["تضيف عنصرًا","تحذف عنصرًا","تغير اللون"],correct:"تضيف عنصرًا"},
  {title:"for",text:"for تكرر الأوامر.",code:"for (let i=0; i<3; i++) {}",explain:"تكرر 3 مرات.",question:"ما فائدة for؟",answers:["تكرار الأوامر","عرض صورة","تغيير ملف"],correct:"تكرار الأوامر"},
  {title:"i++",text:"تزيد i بمقدار 1.",code:"i++",explain:"يزيد العداد.",question:"ماذا تفعل i++؟",answers:["تزيد 1","تنقص 1","تحذف i"],correct:"تزيد 1"},
  {title:"document",text:"يمثل صفحة HTML.",code:"document.getElementById('title')",explain:"يبحث عن عنصر.",question:"ماذا يمثل document؟",answers:["صفحة HTML","ملف CSS","المتصفح فقط"],correct:"صفحة HTML"},
  {title:"getElementById",text:"يجلب عنصرًا بالمعرف.",code:"document.getElementById('box')",explain:"يجلب box.",question:"ماذا يفعل getElementById؟",answers:["يجلب عنصرًا","يحذف عنصرًا","ينشئ متصفحًا"],correct:"يجلب عنصرًا"},
  {title:"textContent",text:"تغير النص.",code:"title.textContent = 'مرحبا';",explain:"يغير النص.",question:"ماذا تفعل textContent؟",answers:["تغير النص","تغير الصورة","تغلق الصفحة"],correct:"تغير النص"},
  {title:"style",text:"تغير التصميم من JavaScript.",code:"box.style.color = 'red';",explain:"يجعل اللون أحمر.",question:"ماذا يغير style؟",answers:["التصميم","اسم الملف","لغة الجهاز"],correct:"التصميم"},
  {title:"addEventListener",text:"يراقب حدثًا مثل الضغط.",code:"btn.addEventListener('click', run);",explain:"يشغل run عند الضغط.",question:"ماذا يفعل addEventListener؟",answers:["يراقب حدثًا","يحفظ صورة","ينشئ HTML"],correct:"يراقب حدثًا"},
  {title:"click",text:"حدث الضغط.",code:"button.addEventListener('click', fn);",explain:"عند الضغط يشغل الدالة.",question:"ماذا يعني click؟",answers:["ضغط","كتابة","حذف"],correct:"ضغط"},
  {title:"input",text:"حقل لإدخال البيانات.",code:'<input id="name">',explain:"ينشئ حقلًا.",question:"ما فائدة input؟",answers:["إدخال بيانات","عرض عنوان","تلوين النص"],correct:"إدخال بيانات"},
  {title:"value",text:"تأخذ قيمة input.",code:"nameInput.value",explain:"يحصل على النص المكتوب.",question:"ماذا تعطي value؟",answers:["القيمة المكتوبة","لون الصفحة","عدد الملفات"],correct:"القيمة المكتوبة"},
  {title:"button",text:"زر في HTML.",code:"<button>ابدأ</button>",explain:"يعرض زرًا.",question:"ما فائدة button؟",answers:["إنشاء زر","إنشاء صورة","إنشاء قائمة فقط"],correct:"إنشاء زر"},
  {title:"class",text:"تستخدم للتنسيق.",code:'<div class="card"></div>',explain:"يعطي العنصر كلاس.",question:"ما فائدة class؟",answers:["التنسيق والتحديد","حساب الأرقام","عرض رسالة"],correct:"التنسيق والتحديد"},
  {title:"id",text:"معرف فريد للعنصر.",code:'<h1 id="title"></h1>',explain:"يعطي معرفًا.",question:"ما فائدة id؟",answers:["تحديد عنصر واحد","تكرار العنصر","حذف الصفحة"],correct:"تحديد عنصر واحد"},
  {title:"الربط مع CSS",text:"نربط CSS داخل head.",code:'<link rel="stylesheet" href="style.css">',explain:"يربط ملف التصميم.",question:"أي وسم يربط CSS؟",answers:["link","script","button"],correct:"link"},
  {title:"الربط مع JS",text:"نربط JS باستخدام script.",code:'<script src="script.js"></script>',explain:"يربط JavaScript.",question:"أي وسم يربط JavaScript؟",answers:["script","link","style"],correct:"script"},
  {title:"background-color",text:"تغير لون الخلفية.",code:"body { background-color: blue; }",explain:"يجعل الخلفية زرقاء.",question:"ما الخاصية للون الخلفية؟",answers:["background-color","font-size","padding"],correct:"background-color"},
  {title:"color",text:"تغير لون النص.",code:"p { color: red; }",explain:"يجعل النص أحمر.",question:"ما الخاصية للون النص؟",answers:["color","margin","border"],correct:"color"},
  {title:"font-size",text:"تغير حجم الخط.",code:"h1 { font-size: 30px; }",explain:"يكبر العنوان.",question:"ما الخاصية لحجم الخط؟",answers:["font-size","color","display"],correct:"font-size"},
  {title:"padding",text:"مسافة داخلية.",code:"div { padding: 20px; }",explain:"يضيف مسافة داخل العنصر.",question:"ما معنى padding؟",answers:["مسافة داخلية","مسافة خارجية","لون"],correct:"مسافة داخلية"},
  {title:"margin",text:"مسافة خارجية.",code:"div { margin: 20px; }",explain:"يضيف مسافة خارج العنصر.",question:"ما معنى margin؟",answers:["مسافة خارجية","مسافة داخلية","حجم الخط"],correct:"مسافة خارجية"},
  {title:"border",text:"إطار حول العنصر.",code:"div { border: 1px solid black; }",explain:"يضيف إطارًا.",question:"ما فائدة border؟",answers:["إضافة إطار","تغيير النص","تشغيل كود"],correct:"إضافة إطار"},
  {title:"border-radius",text:"يجعل الحواف مستديرة.",code:"button { border-radius: 8px; }",explain:"يستدير الزر.",question:"ما فائدة border-radius؟",answers:["تدوير الحواف","تغيير اللون","إخفاء العنصر"],correct:"تدوير الحواف"},
  {title:"display flex",text:"يساعد في ترتيب العناصر.",code:"div { display: flex; }",explain:"يرتب العناصر بمرونة.",question:"ما فائدة flex؟",answers:["ترتيب العناصر","حفظ البيانات","إنشاء دالة"],correct:"ترتيب العناصر"},
  {title:"JSON",text:"شكل لتخزين البيانات.",code:'{"name":"سالم"}',explain:"بيانات على شكل مفتاح وقيمة.",question:"ما فائدة JSON؟",answers:["تنظيم البيانات","تلوين الصفحة","تشغيل زر"],correct:"تنظيم البيانات"},
  {title:"localStorage",text:"يحفظ بيانات في المتصفح.",code:"localStorage.setItem('name','سالم');",explain:"يحفظ الاسم.",question:"أين يحفظ localStorage؟",answers:["في المتصفح","في ملف CSS","في الصورة"],correct:"في المتصفح"}
];

let current = 0;
let score = 0;
let answered = false;

const studentName = document.getElementById("studentName");
const nameBox = document.getElementById("nameBox");
const lessonBox = document.getElementById("lessonBox");
const quizBox = document.getElementById("quizBox");
const progressText = document.getElementById("progressText");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const lessonCode = document.getElementById("lessonCode");
const codeExplain = document.getElementById("codeExplain");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");
const nextButton = document.getElementById("nextButton");
const finalResult = document.getElementById("finalResult");
const restartButton = document.getElementById("restartButton");
const practiceLab = document.getElementById("practiceLab");
const codeEditor = document.getElementById("codeEditor");
const codeOutput = document.getElementById("codeOutput");
const runCodeButton = document.getElementById("runCodeButton");
const printButton = document.getElementById("printButton");

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

  answered = false;
  progressText.textContent = "السؤال " + (current + 1) + " من " + lessons.length;
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
      checkAnswer(answer, button);
    });

    answers.appendChild(button);
  });

  nextButton.textContent = current === lessons.length - 1 ? "عرض النتيجة" : "السؤال التالي";
}

function checkAnswer(answer, selectedButton) {
  if (answered) {
    return;
  }

  answered = true;
  selectedButton.classList.add("answer-selected");

  if (answer === lessons[current].correct) {
    score = score + 1;
  }

  result.textContent = "تم تسجيل إجابتك.";

  const buttons = answers.querySelectorAll("button");
  buttons.forEach(function(button) {
    button.disabled = true;
  });
}

function nextLesson() {
  if (!answered) {
    result.textContent = "اختر إجابة أولًا.";
    return;
  }

  if (current === lessons.length - 1) {
    showFinalResult();
    return;
  }

  current = current + 1;
  showLesson();
}

function showFinalResult() {
  const name = studentName.value.trim() || "المتعلم";
  const percent = Math.round((score / lessons.length) * 100);

  nameBox.style.display = "none";
  lessonBox.style.display = "none";
  quizBox.style.display = "none";
  nextButton.style.display = "none";

  document.getElementById("finalName").textContent = name;
  document.getElementById("finalScore").textContent = score + " / " + lessons.length;
  document.getElementById("finalPercent").textContent = percent + "%";

  if (percent >= 70) {
    document.getElementById("finalMessage").textContent = "مبروك، نجحت ويمكنك الحصول على الشهادة.";
    showCertificate(name);
  } else {
    document.getElementById("finalMessage").textContent = "تحتاج إلى مراجعة الدروس والمحاولة مرة أخرى.";
  }

  finalResult.style.display = "block";
  practiceLab.style.display = "block";
  finalResult.scrollIntoView({ behavior: "smooth" });
}

function showCertificate(name) {
  const today = new Date().toLocaleDateString("ar");

  document.getElementById("certificateName").textContent = name;
  document.getElementById("certificateScore").textContent = score + " / " + lessons.length;
  document.getElementById("certificateDate").textContent = today;
  document.getElementById("certificateSection").style.display = "block";
}

function restartQuiz() {
  current = 0;
  score = 0;
  answered = false;

  nameBox.style.display = "block";
  lessonBox.style.display = "block";
  quizBox.style.display = "block";
  nextButton.style.display = "inline-block";
  finalResult.style.display = "none";
  practiceLab.style.display = "none";
  document.getElementById("certificateSection").style.display = "none";

  showLesson();
}

function openPracticeOnly() {
  nameBox.style.display = "none";
  lessonBox.style.display = "none";
  quizBox.style.display = "none";
  nextButton.style.display = "none";
  finalResult.style.display = "none";
  document.getElementById("certificateSection").style.display = "none";

  practiceLab.style.display = "block";
  practiceLab.scrollIntoView({ behavior: "smooth" });
}

runCodeButton.addEventListener("click", function() {
  codeOutput.textContent = "";

  function print(value) {
    codeOutput.textContent = codeOutput.textContent + value + "\n";
  }

  try {
    new Function("print", codeEditor.value)(print);

    if (codeOutput.textContent.trim() === "") {
      codeOutput.textContent = "تم تشغيل الكود، لكن لم يتم طباعة أي نتيجة. استخدم print لعرض النتيجة هنا.";
    }
  } catch (error) {
    codeOutput.textContent = "يوجد خطأ في الكود: " + error.message;
  }
});

nextButton.addEventListener("click", nextLesson);
restartButton.addEventListener("click", restartQuiz);
printButton.addEventListener("click", function() {
  window.print();
});

if (window.location.hash === "#practice") {
  openPracticeOnly();
} else {
  showLesson();
}
