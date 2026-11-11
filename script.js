
const subjects = [
    { id: "english", name: "Ingliz tili", emoji: "🇬🇧" },
    { id: "programming", name: "Dasturlash", emoji: "💻" },
    { id: "design", name: "Grafik dizayn", emoji: "🎨" },
    { id: "web", name: "Veb dizayn", emoji: "🌐" },
    { id: "ai", name: "Sun’iy intellekt", emoji: "🤖" },
    { id: "mobile", name: "Mobil ilovalar", emoji: "📱" },
    { id: "math", name: "Matematika", emoji: "🧮" },
    { id: "logic", name: "Mantiq", emoji: "🧠" }
];

const questions = {
    english: {
        easy: [
            ["What is the meaning of 'Apple'?", ["Olma", "Kitob", "Uy", "Maktab"], 0, "Apple — olma."],
            ["What is the opposite of 'Big'?", ["Tall", "Small", "Long", "Fast"], 1, "Big — katta, Small — kichik."],
            ["How do you say 'Salom' in English?", ["Goodbye", "Please", "Hello", "Thanks"], 2, "Hello — salom."],
            ["Choose the correct article: ___ orange.", ["A", "An", "Thee", "No"], 1, "Orange unli tovush bilan boshlanadi: an orange."],
            ["What is the plural of 'Child'?", ["Childs", "Childes", "Children", "Childrens"], 2, "Child so‘zining ko‘plik shakli — Children."]
        ],
        medium: [
            ["Choose the correct sentence.", ["She go to school.", "She goes to school.", "She going school.", "She gone school."], 1, "He/She/It bilan Present Simple'da fe'lga -s qo‘shiladi."],
            ["What is the past form of 'Write'?", ["Writed", "Written", "Wrote", "Writing"], 2, "Write — wrote — written."],
            ["Choose the correct word: I have lived here ___ 2020.", ["For", "Since", "During", "From"], 1, "Since aniq boshlanish vaqtini bildiradi."],
            ["What does 'Although' mean?", ["Chunki", "Shuning uchun", "Garchi", "Agar"], 2, "Although — garchi."],
            ["Which sentence is in Present Perfect?", ["I eat.", "I ate.", "I have eaten.", "I am eating."], 2, "Present Perfect: have/has + V3."]
        ],
        hard: [
            ["Choose the correct inversion.", ["Never I have seen this.", "Never have I seen this.", "Never seen I have this.", "Never I seen have this."], 1, "Never bilan gap boshida inversion ishlatiladi."],
            ["What is the meaning of 'Meticulous'?", ["Careless", "Very careful", "Angry", "Ordinary"], 1, "Meticulous — juda sinchkov, e'tiborli."],
            ["Choose the correct conditional.", ["If I had known, I would have helped.", "If I know, I helped.", "If I knew, I will helped.", "If I known, I help."], 0, "Third conditional: If + Past Perfect, would have + V3."],
            ["Which word is a synonym of 'Abundant'?", ["Scarce", "Rare", "Plentiful", "Empty"], 2, "Abundant — mo‘l-ko‘l."],
            ["Choose the correct reported speech: He said, 'I am tired.'", ["He said he is tired.", "He said he was tired.", "He said I was tired.", "He says he tired."], 1, "Reported speech'da am ko‘pincha was ga o‘zgaradi."]
        ]
    },

    programming: {
        easy: [
            ["Python'da ekranga matn chiqarish buyrug‘i qaysi?", ["input()", "print()", "int()", "type()"], 1, "print() ekranga ma'lumot chiqaradi."],
            ["HTML nimani anglatadi?", ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup", "Hyper Transfer Main Link"], 0, "HTML — gipermatn belgilash tili."],
            ["Python'da o‘zgaruvchi yaratish uchun qaysi belgi ishlatiladi?", ["=", "==", "!=", "=>"], 0, "Tenglik belgisi qiymatni o‘zgaruvchiga biriktiradi."],
            ["CSS nima uchun ishlatiladi?", ["Ma'lumot saqlash", "Veb sahifani bezash", "Server yaratish", "Video montaj"], 1, "CSS veb sahifa ko‘rinishini boshqaradi."],
            ["Java'da dastur bajarilishi odatda qaysi metoddan boshlanadi?", ["start()", "run()", "main()", "begin()"], 2, "Java dasturining kirish nuqtasi main() metodidir."]
        ],
        medium: [
            ["Python'da ro‘yxat (list) qaysi qavs bilan yoziladi?", ["{}", "()", "[]", "<>"], 2, "List kvadrat qavsda yoziladi."],
            ["JavaScript'da o‘zgarmas qiymat uchun nima ishlatiladi?", ["var", "let", "const", "static"], 2, "const qayta qiymat biriktirishni taqiqlaydi."],
            ["C++ da ma'lumot chiqarish operatori qaysi?", ["cin", "cout", "print", "input"], 1, "cout — standart chiqarish oqimi."],
            ["Funksiya nima?", ["Faqat matn", "Muayyan vazifani bajaruvchi kod bloki", "Rasm formati", "Ma'lumotlar bazasi"], 1, "Funksiya kodni qayta ishlatishga yordam beradi."],
            ["Python'da ro‘yxat uzunligini aniqlash funksiyasi qaysi?", ["size()", "count()", "len()", "length()"], 2, "len() elementlar sonini qaytaradi."]
        ],
        hard: [
            ["Python'da lambda qanday obyekt yaratadi?", ["Sinf", "Anonim funksiya", "Modul", "Ro‘yxat"], 1, "lambda qisqa anonim funksiya yaratadi."],
            ["OOP'da merosxo‘rlik nima?", ["Ma'lumotni o‘chirish", "Sinfning boshqa sinf xususiyatlarini olishi", "Dasturni to‘xtatish", "Funksiyani chaqirish"], 1, "Inheritance — sinflar o‘rtasida xususiyat va metodlarni meros olish."],
            ["Binary Search algoritmining vaqt murakkabligi qaysi?", ["O(n)", "O(n²)", "O(log n)", "O(1)"], 2, "Har qadamda qidiruv oralig‘i ikki baravar qisqaradi."],
            ["Java'da interface asosan nima uchun ishlatiladi?", ["Obyektni o‘chirish", "Umumiy metodlar shartnomasini belgilash", "Faylni ochish", "Xotirani tozalash"], 1, "Interface sinflar bajarishi kerak bo‘lgan metodlar shartnomasini belgilaydi."],
            ["SQL'da ma'lumotlarni saralash uchun qaysi buyruq ishlatiladi?", ["GROUP BY", "ORDER BY", "WHERE", "INSERT"], 1, "ORDER BY natijalarni tartiblaydi."]
        ]
    },

    design: {
        easy: [
            ["RGB rang modeli nechta asosiy rangdan iborat?", ["2", "3", "4", "5"], 1, "RGB — Red, Green, Blue."],
            ["Photoshop dasturi asosan nima uchun ishlatiladi?", ["Matn terish", "Rasmlarni tahrirlash", "Dastur yozish", "Hisoblash"], 1, "Photoshop rastr grafikasi bilan ishlaydi."],
            ["Logotip nima?", ["Musiqa", "Brend belgisi", "Jadval", "Animatsiya"], 1, "Logotip brendni tanituvchi grafik belgidir."],
            ["Canva qanday platforma?", ["Dizayn yaratish", "Dastur kompilyatsiya qilish", "Video o‘yin o‘ynash", "Ma'lumotlar bazasi"], 0, "Canva grafik dizayn uchun platforma."],
            ["Ranglar g‘ildiragi nima uchun kerak?", ["Kod yozish", "Ranglar uyg‘unligini tanlash", "Fayl saqlash", "Ovoz yozish"], 1, "Ranglar g‘ildiragi ranglar o‘rtasidagi munosabatni ko‘rsatadi."]
        ],
        medium: [
            ["CMYK qaysi sohada ko‘proq ishlatiladi?", ["Veb dasturlash", "Bosma mahsulotlar", "Audio", "Ma'lumotlar bazasi"], 1, "CMYK bosma mahsulotlarda ishlatiladigan rang modelidir."],
            ["Vektor grafikada tasvir nimaga asoslanadi?", ["Piksellarga", "Matematik shakl va chiziqlarga", "Faqat fotosuratlarga", "Ovoz to‘lqinlariga"], 1, "Vektor tasvir matematik obyektlardan tashkil topadi."],
            ["Kontrast dizaynda nima beradi?", ["Elementlarni farqlash", "Fayl hajmini oshirish", "Rangni o‘chirish", "Rasmni kesish"], 0, "Kontrast elementlarni bir-biridan ajratib ko‘rsatadi."],
            ["Photoshop'da qatlam qanday ataladi?", ["Layer", "Frame", "Sheet", "Page"], 0, "Layer — alohida tahrirlanadigan qatlam."],
            ["Tipografika nimani o‘rganadi?", ["Ovoz", "Shrift va matn joylashuvi", "Animatsiya", "Kodlash"], 1, "Tipografika matnning vizual taqdimotini o‘rganadi."]
        ],
        hard: [
            ["Dizaynda kerning nima?", ["Qator oralig‘i", "Ikki harf orasidagi masofa", "Rang yorqinligi", "Rasm o‘lchami"], 1, "Kerning — juft harflar orasidagi masofani sozlash."],
            ["Golden Ratio taxminan qaysi qiymatga teng?", ["1.414", "1.618", "2.718", "3.141"], 1, "Oltin nisbat taxminan 1.618 ga teng."],
            ["PPI nimani bildiradi?", ["Pixels Per Inch", "Print Per Image", "Page Pixel Index", "Picture Point Input"], 0, "PPI — bir dyuymdagi piksellar soni."],
            ["Rastr grafikasini kattalashtirishda nima sodir bo‘lishi mumkin?", ["Sifat o‘zgarishsiz qoladi", "Piksellanish kuzatiladi", "Vektor hosil bo‘ladi", "Ranglar yo‘qoladi"], 1, "Rastr tasvir kattalashtirilganda piksellanishi mumkin."],
            ["Komplementar ranglar qanday joylashadi?", ["Yonma-yon", "Ranglar g‘ildiragida qarama-qarshi", "Bir xil rangda", "Faqat oq-qora"], 1, "Komplementar ranglar g‘ildirakda bir-biriga qarama-qarshi turadi."]
        ]
    },

    web: {
        easy: [
            ["Veb sahifaning tuzilishini qaysi til belgilaydi?", ["CSS", "HTML", "SQL", "Python"], 1, "HTML sahifa tuzilishini belgilaydi."],
            ["CSS'da matn rangini o‘zgartirish xususiyati qaysi?", ["font-size", "color", "background", "display"], 1, "color matn rangini belgilaydi."],
            ["HTML'da havola yaratish tegi qaysi?", ["<p>", "<img>", "<a>", "<div>"], 2, "a tegi havola yaratadi."],
            ["JavaScript asosan nima uchun ishlatiladi?", ["Veb sahifaga interaktivlik qo‘shish", "Faqat rasm chizish", "Matn tarjima qilish", "Kompyuterni yoqish"], 0, "JavaScript interaktivlik va mantiqni boshqaradi."],
            ["Rasm qo‘shish uchun HTML tegi qaysi?", ["<picture-text>", "<img>", "<image>", "<photo>"], 1, "img tegi rasm ko‘rsatadi."]
        ],
        medium: [
            ["CSS Flexbox'da elementlarni markazga joylashtirish uchun qaysi xususiyat ishlatiladi?", ["justify-content", "font-style", "border", "overflow"], 0, "justify-content asosiy o‘q bo‘yicha joylashtiradi."],
            ["Responsive dizayn nima?", ["Faqat kompyuter uchun dizayn", "Turli ekranlarga moslashuvchi dizayn", "Faqat rang tanlash", "Server dasturi"], 1, "Responsive dizayn turli ekran o‘lchamlariga moslashadi."],
            ["JavaScript'da massivning oxiriga element qo‘shish metodi qaysi?", ["shift()", "pop()", "push()", "slice()"], 2, "push() massiv oxiriga element qo‘shadi."],
            ["CSS'da tashqi bo‘shliqni belgilovchi xususiyat qaysi?", ["padding", "margin", "border", "width"], 1, "margin element tashqarisidagi bo‘shliqni belgilaydi."],
            ["HTML formasi ma'lumot yuborishda qaysi atributdan foydalanadi?", ["action", "color", "font", "shadow"], 0, "action forma ma'lumoti yuboriladigan manzilni belgilaydi."]
        ],
        hard: [
            ["HTTP 404 xatosi nimani bildiradi?", ["Server topilmadi", "Sahifa topilmadi", "Ruxsat berildi", "So‘rov muvaffaqiyatli"], 1, "404 — Not Found."],
            ["CSS Grid'da ustunlar soni qaysi xususiyat bilan belgilanadi?", ["grid-template-columns", "grid-column-gap", "grid-area", "grid-auto-flow"], 0, "grid-template-columns ustunlar tuzilishini belgilaydi."],
            ["DOM nimaning qisqartmasi?", ["Data Object Model", "Document Object Model", "Digital Output Mode", "Document Order Method"], 1, "DOM HTML hujjatining obyektli modelidir."],
            ["JavaScript'da Promise qanday vazifani bajaradi?", ["Rang tanlaydi", "Asinxron operatsiya natijasini ifodalaydi", "HTML yaratadi", "Rasm siqadi"], 1, "Promise kelajakda bajariladigan yoki rad etiladigan natijani ifodalaydi."],
            ["LocalStorage ma'lumoti qachongacha saqlanadi?", ["Faqat 1 soniya", "Sahifa yopilguncha", "O‘chirilmaguncha", "Faqat internet borida"], 2, "LocalStorage ma'lumoti foydalanuvchi o‘chirmaguncha saqlanadi."]
        ]
    },

    ai: {
        easy: [
            ["AI qisqartmasi nimani anglatadi?", ["Automatic Internet", "Artificial Intelligence", "Advanced Interface", "Applied Information"], 1, "AI — sun’iy intellekt."],
            ["ChatGPT qanday texnologiyaga asoslangan?", ["Katta til modeli", "Oddiy kalkulyator", "Faqat ma'lumotlar bazasi", "Grafik karta"], 0, "ChatGPT katta til modeli asosida ishlaydi."],
            ["Prompt nima?", ["Kompyuter xotirasi", "AI ga beriladigan ko‘rsatma", "Rasm formati", "Internet kabeli"], 1, "Prompt — sun’iy intellektga beriladigan topshiriq."],
            ["AI yordamida rasm yaratish mumkinmi?", ["Ha", "Yo‘q", "Faqat telefonlarda", "Faqat matn bilan"], 0, "Ko‘plab generativ AI vositalari rasm yaratadi."],
            ["Machine Learning nimani anglatadi?", ["Mashina ta'mirlash", "Mashinali o‘rganish", "Veb dizayn", "Tarmoq sozlash"], 1, "Machine Learning — mashinali o‘rganish."]
        ],
        medium: [
            ["Generativ AI nima qiladi?", ["Faqat ma'lumot o‘chiradi", "Yangi matn, rasm yoki boshqa kontent yaratadi", "Faqat hisoblaydi", "Internet tezligini oshiradi"], 1, "Generativ AI yangi kontent yaratishi mumkin."],
            ["Neyron tarmoq qaysi tizimdan ilhomlangan?", ["Inson miyasi", "Elektr stansiyasi", "Printer", "Kamera"], 0, "Neyron tarmoqlar biologik neyronlardan ilhomlangan."],
            ["AI modelini o‘qitish jarayoni nima deb ataladi?", ["Training", "Printing", "Browsing", "Formatting"], 0, "Training — modelni ma'lumotlar asosida o‘qitish."],
            ["AI'dagi hallucination nimani bildiradi?", ["Modelning asossiz yoki noto‘g‘ri ma'lumot yaratishi", "Rasmni saqlash", "Internet uzilishi", "Ovoz balandligi"], 0, "Hallucination — AI ishonchli ko‘ringan, ammo noto‘g‘ri javob berishi."],
            ["Prompt engineering nima?", ["Kompyuter yig‘ish", "AI uchun samarali ko‘rsatmalar tuzish", "Rasmni kesish", "Kod kompilyatsiyasi"], 1, "Prompt engineering — aniq va samarali prompt tuzish."]
        ],
        hard: [
            ["Transformer arxitekturasining muhim mexanizmi qaysi?", ["Self-attention", "Pixel sorting", "File compression", "Screen rendering"], 0, "Self-attention tokenlar o‘rtasidagi bog‘lanishni o‘rganadi."],
            ["Overfitting nima?", ["Modelning o‘quv ma'lumotlariga haddan tashqari moslashishi", "Modelning umuman ishlamasligi", "Internet tezlashishi", "Ma'lumotni siqish"], 0, "Overfitting yangi ma'lumotlarda natijani yomonlashtirishi mumkin."],
            ["NLP nimani anglatadi?", ["Natural Language Processing", "Network Learning Protocol", "Neural Logic Program", "New Language Platform"], 0, "NLP — tabiiy tilni qayta ishlash."],
            ["Gradient Descent nima uchun ishlatiladi?", ["Model parametrlarini optimallashtirish", "Rasm chizish", "Faylni ochish", "Tarmoq ulash"], 0, "Gradient Descent yo‘qotish funksiyasini kamaytirish uchun ishlatiladi."],
            ["AI modelidagi bias nimani anglatadi?", ["Ma'lumot yoki modeldagi tizimli og‘ish", "Kompyuter tezligi", "Rang tanlash", "Xotira hajmi"], 0, "Bias model natijalarida tizimli og‘ish bo‘lishidir."]
        ]
    },

    mobile: {
        easy: [
            ["Android ilovalari uchun keng ishlatiladigan til qaysi?", ["Kotlin", "HTML", "SQL", "CSS"], 0, "Kotlin Android dasturlashda keng qo‘llanadi."],
            ["APK nima?", ["Android ilova paketi", "Rasm formati", "Matn hujjati", "Internet protokoli"], 0, "APK — Android Package Kit."],
            ["Flutter qaysi til bilan ishlaydi?", ["Python", "Dart", "C++", "PHP"], 1, "Flutter ilovalari Dart tilida yoziladi."],
            ["Android Studio nima?", ["Grafik muharrir", "Android dasturlash muhiti", "Brauzer", "O‘yin"], 1, "Android Studio Android ilovalarini yaratish uchun IDE."],
            ["Mobil ilova nima?", ["Telefon yoki planshetda ishlaydigan dastur", "Faqat veb sayt", "Printer", "Operatsion tizim"], 0, "Mobil ilova mobil qurilmalarda ishlaydi."]
        ],
        medium: [
            ["Kotlin'da o‘zgarmas o‘zgaruvchi qaysi kalit so‘z bilan yaratiladi?", ["var", "val", "fun", "class"], 1, "val qayta qiymat biriktirilmaydigan o‘zgaruvchi yaratadi."],
            ["Flutter'da ekranning asosiy UI elementi nima deb ataladi?", ["Widget", "Activity", "Fragment", "Service"], 0, "Flutter interfeysi widgetlardan tashkil topadi."],
            ["Android'da Activity nima?", ["Ilova ekranini ifodalovchi komponent", "Ma'lumotlar bazasi", "Rasm formati", "Tarmoq kabeli"], 0, "Activity foydalanuvchi bilan o‘zaro aloqadagi ekran komponentidir."],
            ["Kotlin'da funksiya qaysi kalit so‘z bilan boshlanadi?", ["function", "def", "fun", "method"], 2, "Kotlin funksiyasi fun bilan e'lon qilinadi."],
            ["Mobil ilovada ma'lumotlarni mahalliy saqlash uchun nima ishlatilishi mumkin?", ["SQLite", "HTML", "CSS", "PNG"], 0, "SQLite mahalliy ma'lumotlar bazasi sifatida ishlatilishi mumkin."]
        ],
        hard: [
            ["Kotlin'da null qiymatga ruxsat beruvchi tur qanday belgilanadi?", ["String!", "String?", "NullableString", "String#"], 1, "Savol belgisi nullable turini bildiradi."],
            ["Android'da ViewModel'ning vazifasi nima?", ["UI bilan bog‘liq ma'lumotlarni boshqarish", "Rasm chizish", "Internet tezligini oshirish", "APK siqish"], 0, "ViewModel UI ma'lumotlarini konfiguratsiya o‘zgarishlarida saqlashga yordam beradi."],
            ["Flutter'da Future nima?", ["Asinxron operatsiya natijasini ifodalovchi obyekt", "Widget rangi", "Matn turi", "Rasm formati"], 0, "Future kelajakda mavjud bo‘ladigan qiymatni ifodalaydi."],
            ["Kotlin Coroutines asosan nima uchun ishlatiladi?", ["Asinxron vazifalarni boshqarish", "Rang tanlash", "Matn formatlash", "Rasm kesish"], 0, "Coroutines asinxron vazifalarni qulay boshqaradi."],
            ["Android'da Intent nima?", ["Komponentlar o‘rtasida amal yoki ma'lumot uzatish vositasi", "Rang modeli", "Ma'lumotlar bazasi", "Ekran o‘lchami"], 0, "Intent komponentlar o‘rtasida harakatni boshlash yoki ma'lumot uzatishga xizmat qiladi."]
        ]
    },

    math: {
        easy: [
            ["12 × 8 nechaga teng?", ["86", "96", "108", "88"], 1, "12 × 8 = 96."],
            ["100 ning yarmi nechaga teng?", ["25", "40", "50", "75"], 2, "100 / 2 = 50."],
            ["15 + 27 nechaga teng?", ["42", "32", "52", "41"], 0, "15 + 27 = 42."],
            ["Kvadratning nechta tomoni bor?", ["3", "4", "5", "6"], 1, "Kvadratning 4 ta tomoni bor."],
            ["1 kilometr necha metr?", ["100", "500", "1000", "10000"], 2, "1 km = 1000 metr."]
        ],
        medium: [
            ["200 ning 15 foizi qancha?", ["15", "20", "30", "45"], 2, "200 × 0.15 = 30."],
            ["Tenglamani yeching: 3x = 27.", ["6", "9", "12", "8"], 1, "x = 27 / 3 = 9."],
            ["Uchburchak ichki burchaklari yig‘indisi?", ["90°", "180°", "270°", "360°"], 1, "Uchburchak ichki burchaklari yig‘indisi 180°."],
            ["√144 nechaga teng?", ["10", "11", "12", "14"], 2, "12 × 12 = 144."],
            ["2 ning 5-darajasi nechaga teng?", ["10", "16", "25", "32"], 3, "2⁵ = 32."]
        ],
        hard: [
            ["log₂ 32 nechaga teng?", ["4", "5", "6", "8"], 1, "2⁵ = 32."],
            ["Hosila: f(x) = x² funksiyaning hosilasi?", ["x", "2x", "x²", "2"], 1, "x² ning hosilasi 2x."],
            ["Sin 30° nechaga teng?", ["1", "0", "1/2", "√3/2"], 2, "sin 30° = 1/2."],
            ["1 dan 10 gacha natural sonlar yig‘indisi?", ["45", "50", "55", "60"], 2, "10 × 11 / 2 = 55."],
            ["(a+b)² formulasi qaysi?", ["a²+b²", "a²+2ab+b²", "a²-2ab+b²", "2a+2b"], 1, "(a+b)² = a² + 2ab + b²."]
        ]
    },

    logic: {
        easy: [
            ["Qaysi son keyingi: 2, 4, 6, 8, ...?", ["9", "10", "11", "12"], 1, "Har safar 2 qo‘shilmoqda."],
            ["Bir haftada necha kun bor?", ["5", "6", "7", "8"], 2, "Bir haftada 7 kun bor."],
            ["Qaysi biri ortiqcha: olma, nok, sabzi, uzum?", ["Olma", "Nok", "Sabzi", "Uzum"], 2, "Sabzi meva emas, sabzavot."],
            ["3 ta mushuk 3 ta sichqonni 3 daqiqada tutsa, 1 ta mushuk 1 ta sichqonni qancha vaqtda tutadi?", ["1 daqiqa", "2 daqiqa", "3 daqiqa", "9 daqiqa"], 2, "Har bir mushuk bitta sichqonni 3 daqiqada tutadi."],
            ["Qaysi son juft?", ["7", "13", "21", "24"], 3, "24 ikkiga qoldiqsiz bo‘linadi."]
        ],
        medium: [
            ["Ketma-ketlikni davom ettiring: 1, 4, 9, 16, ...?", ["20", "24", "25", "36"], 2, "Bu sonlar kvadratlar: 1², 2², 3², 4², 5²."],
            ["Soat 3:00 da soat millari orasidagi burchak?", ["45°", "60°", "90°", "180°"], 2, "Soat 3 da millar orasida 90° burchak bor."],
            ["5 ta mashina 5 daqiqada 5 ta buyum ishlab chiqarsa, 100 ta mashina 100 ta buyumni qancha vaqtda ishlab chiqaradi?", ["5 daqiqa", "20 daqiqa", "100 daqiqa", "500 daqiqa"], 0, "Har bir mashina 5 daqiqada bittadan buyum ishlab chiqaradi."],
            ["Bugun seshanba bo‘lsa, 10 kundan keyin qaysi kun?", ["Payshanba", "Juma", "Shanba", "Yakshanba"], 1, "10 kun — 7 + 3, seshanbadan 3 kun keyin juma."],
            ["Ikki ota va ikki o‘g‘il 3 ta olmani bo‘lishdi, har biri bittadan oldi. Bu qanday mumkin?", ["Olma yetmagan", "Ular 3 kishi: bobo, ota, o‘g‘il", "Yana olma bor", "Bu mumkin emas"], 1, "Bobo ham ota, ota ham o‘g‘il bo‘lishi mumkin."]
        ],
        hard: [
            ["Ketma-ketlik: 1, 1, 2, 3, 5, 8, ...?", ["11", "12", "13", "15"], 2, "Fibonacci: oldingi ikki son yig‘indisi."],
            ["Bir xonada 4 burchak bor. Har burchakda bittadan mushuk. Har mushuk qarshisida 3 mushuk bor. Jami nechta mushuk?", ["4", "8", "12", "16"], 0, "Jami 4 mushuk, har biri qolgan uchtasini ko‘radi."],
            ["Agar barcha ZOR lar KEL bo‘lsa va barcha KEL lar BIR bo‘lsa, barcha ZOR lar BIR bo‘ladimi?", ["Ha", "Yo‘q", "Ba'zilari", "Aniqlab bo‘lmaydi"], 0, "ZOR → KEL → BIR, demak ZOR → BIR."],
            ["1, 2, 6, 24, 120, ... keyingi son?", ["240", "360", "600", "720"], 3, "Sonlar faktoriallar: 1!, 2!, 3!, 4!, 5!, 6! = 720."],
            ["Agar 5 ta printer 5 daqiqada 5 ta sahifa chiqarsa, 10 ta printer 10 ta sahifani qancha vaqtda chiqaradi?", ["5 daqiqa", "10 daqiqa", "15 daqiqa", "20 daqiqa"], 0, "Har bir printer bir sahifani 5 daqiqada chiqaradi."]
        ]
    }
};

const $ = id => document.getElementById(id);

let selectedSubject = "english";
let selectedLevel = "easy";
let questionCount = 10;
let currentQuestions = [];
let currentIndex = 0;
let correct = 0;
let wrong = 0;
let points = 0;
let timeLeft = 20;
let timerInterval = null;
let answered = false;
let savedResult = false;

const levelNames = {
    easy: "OSON",
    medium: "O‘RTACHA",
    hard: "QIYIN"
};

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    $(screenId).classList.add("active");
}

function renderSubjects() {
    $("subjects").innerHTML = subjects.map(subject => `
        <button class="subject ${subject.id === selectedSubject ? "selected" : ""}"
                data-id="${subject.id}">
            <span class="emoji">${subject.emoji}</span>
            ${subject.name}
        </button>
    `).join("");

    document.querySelectorAll(".subject").forEach(button => {
        button.addEventListener("click", () => {
            selectedSubject = button.dataset.id;
            renderSubjects();
        });
    });
}

function setupChoices(containerId, callback) {
    document.querySelectorAll(`#${containerId} .choice`).forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(`#${containerId} .choice`)
                .forEach(item => item.classList.remove("selected"));
            button.classList.add("selected");
            callback(button.dataset.value);
        });
    });
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startGame() {
    const pool = questions[selectedSubject][selectedLevel];

    // Har bir savol takrorlanmasligi uchun avval savollar aralashtiriladi.
    currentQuestions = shuffle(pool).slice(0, Math.min(questionCount, pool.length));

    // Savollar soni tanlangan miqdorga yetmasa, mavjud savollarni takrorlamaymiz.
    if (currentQuestions.length < questionCount) {
        alert(`Bu yo‘nalishda hozircha ${currentQuestions.length} ta noyob savol mavjud. Hozircha shu savollar beriladi.`);
    }

    currentIndex = 0;
    correct = 0;
    wrong = 0;
    points = 0;
    savedResult = false;

    $("gameSubject").textContent =
        subjects.find(s => s.id === selectedSubject).name;

    showScreen("game");
    showQuestion();
}

function showQuestion() {
    clearInterval(timerInterval);
    answered = false;
    timeLeft = 20;

    const q = currentQuestions[currentIndex];

    $("questionNumber").textContent =
        `${currentIndex + 1} / ${currentQuestions.length}`;

    $("score").textContent = `Ball: ${points}`;
    $("progress").style.width =
        `${(currentIndex / currentQuestions.length) * 100}%`;

    $("questionLevel").textContent = levelNames[selectedLevel];
    $("questionText").textContent = q[0];
    $("feedback").textContent = "";
    $("nextBtn").disabled = true;

    $("answers").innerHTML = q[1].map((answer, index) => `
        <button class="answer" data-index="${index}">
            <strong>${String.fromCharCode(65 + index)}.</strong>
            ${answer}
        </button>
    `).join("");

    document.querySelectorAll(".answer").forEach(button => {
        button.addEventListener("click", () => {
            checkAnswer(Number(button.dataset.index));
        });
    });

    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answered) {
                checkAnswer(-1);
            }
        }
    }, 1000);
}

function updateTimer() {
    $("timer").textContent = timeLeft;
    $("timer").parentElement.classList.toggle("urgent", timeLeft <= 5);
}

function checkAnswer(choice) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const q = currentQuestions[currentIndex];
    const buttons = document.querySelectorAll(".answer");
    const isCorrect = choice === q[2];

    if (isCorrect) {
        correct++;
        points += 10 + Math.floor(timeLeft / 4);
        $("feedback").textContent = "✓ To‘g‘ri javob! " + q[3];
    } else {
        wrong++;
        $("feedback").textContent =
            choice === -1
                ? "Vaqt tugadi! To‘g‘ri javob: " + q[1][q[2]] + ". " + q[3]
                : "Noto‘g‘ri javob. To‘g‘ri javob: " + q[1][q[2]] + ". " + q[3];
    }

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === q[2]) button.classList.add("correct");
        if (index === choice && !isCorrect) button.classList.add("wrong");
    });

    $("score").textContent = `Ball: ${points}`;
    $("nextBtn").disabled = false;
    $("nextBtn").textContent =
        currentIndex === currentQuestions.length - 1
            ? "NATIJANI KO‘RISH ➜"
            : "KEYINGI SAVOL ➜";
}

function nextQuestion() {
    if (!answered) return;

    currentIndex++;

    if (currentIndex >= currentQuestions.length) {
        finishGame();
    } else {
        showQuestion();
    }
}

function finishGame() {
    clearInterval(timerInterval);

    const total = currentQuestions.length;
    const maxPoints = total * 17;
    const percent = Math.round((points / maxPoints) * 100);
    const accuracy = Math.round((correct / total) * 100);

    $("finalScore").textContent = `${points} / ${maxPoints}`;
    $("correctCount").textContent = correct;
    $("wrongCount").textContent = wrong;
    $("accuracy").textContent = accuracy + "%";

    if (accuracy >= 80) {
        $("resultTitle").textContent = "Ajoyib natija!";
        $("resultMessage").textContent = "Siz haqiqiy bilimdon ekansiz!";
    } else if (accuracy >= 50) {
        $("resultTitle").textContent = "Yaxshi natija!";
        $("resultMessage").textContent = "Yana mashq qilsangiz, yanada yuqori natijaga erishasiz.";
    } else {
        $("resultTitle").textContent = "Harakatni davom ettiring!";
        $("resultMessage").textContent = "Har bir urinish yangi bilim beradi.";
    }

    $("playerName").value = "";
    $("saveBtn").disabled = false;
    $("saveBtn").textContent = "NATIJANI SAQLASH";

    $("progress").style.width = "100%";
    showScreen("result");
}

function saveResult() {
    if (savedResult) return;

    const name = $("playerName").value.trim();

    if (!name) {
        alert("Iltimos, ismingizni kiriting!");
        $("playerName").focus();
        return;
    }

    const result = {
        name,
        subject: subjects.find(s => s.id === selectedSubject).name,
        level: levelNames[selectedLevel],
        points,
        correct,
        date: new Date().toLocaleDateString("uz-UZ")
    };

    try {
        const leaderboard = JSON.parse(
            localStorage.getItem("bilimdonLeaderboard") || "[]"
        );

        leaderboard.push(result);
        leaderboard.sort((a, b) => b.points - a.points);

        localStorage.setItem(
            "bilimdonLeaderboard",
            JSON.stringify(leaderboard.slice(0, 10))
        );

        savedResult = true;
        $("saveBtn").textContent = "SAQLANDI ✓";
        $("saveBtn").disabled = true;

        renderLeaderboard();
    } catch (error) {
        alert("Natijani saqlashda xatolik yuz berdi. Brauzer xotirasini tekshiring.");
    }
}

function renderLeaderboard() {
    let leaderboard = [];

    try {
        leaderboard = JSON.parse(
            localStorage.getItem("bilimdonLeaderboard") || "[]"
        );
    } catch {
        leaderboard = [];
    }

    if (!leaderboard.length) {
        $("leaderboardList").innerHTML =
            '<p class="empty">Hozircha natijalar mavjud emas.</p>';
        return;
    }

    $("leaderboardList").innerHTML = leaderboard.map((item, index) => `
        <div class="leader-row">
            <div>
                <strong>#${index + 1}</strong>
                &nbsp; ${escapeHTML(item.name)}
                <div style="font-size:10px;color:#888;margin-top:5px">
                    ${escapeHTML(item.subject)} · ${escapeHTML(item.level)} · ${escapeHTML(item.date)}
                </div>
            </div>
            <strong>${Number(item.points) || 0} ball</strong>
        </div>
    `).join("");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

$("startBtn").addEventListener("click", startGame);
$("nextBtn").addEventListener("click", nextQuestion);
$("saveBtn").addEventListener("click", saveResult);
$("restartBtn").addEventListener("click", () => showScreen("home"));

setupChoices("levels", value => selectedLevel = value);
setupChoices("counts", value => questionCount = Number(value));

renderSubjects();
renderLeaderboard();
