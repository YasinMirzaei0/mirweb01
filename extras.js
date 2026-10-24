/* MIRWEB extras: Persian language, day/night theme, phone keyboard helpers.
   Loaded BEFORE script.js so translated text is what script.js animates. */
(function () {
    'use strict';
    var root = document.documentElement;
    var lang = 'en', theme = 'dark';
    try { lang = localStorage.getItem('mw-lang') === 'fa' ? 'fa' : 'en'; theme = localStorage.getItem('mw-theme') === 'light' ? 'light' : 'dark'; } catch (e) {}
    root.lang = lang;
    if (theme === 'light') root.setAttribute('data-theme', 'light');

    var FA = {
        'Home': 'خانه', 'Services': 'خدمات', 'Portfolio': 'نمونه‌کارها', 'About Me': 'درباره من', 'FAQ': 'سوالات متداول', 'Contact': 'تماس',
        'MIRWEB · Web design and development': 'MIRWEB · طراحی و توسعه‌ی وب', 'Going to': 'رفتن به',
        'Digital Experience': 'تجربه‌ی دیجیتال', 'Ideas': 'ایده‌ها', 'Made Digital': 'دیجیتال می‌شوند',
        'I design and develop modern websites, web apps and digital experiences that turn your ideas into real solutions.': 'من وب‌سایت‌ها، وب‌اپلیکیشن‌ها و تجربه‌های دیجیتال مدرن طراحی و توسعه می‌دهم که ایده‌های شما را به راه‌حل‌های واقعی تبدیل می‌کنند.',
        'View My Work': 'مشاهده‌ی نمونه‌کارها', 'Scroll': 'اسکرول',
        'From idea': 'از ایده', 'to launch': 'تا راه‌اندازی',
        'A simple six-step process that takes your project from the first conversation to a live, polished website.': 'یک فرایند ساده‌ی شش‌مرحله‌ای که پروژه‌ی شما را از اولین گفتگو تا یک وب‌سایت زنده و حرفه‌ای همراهی می‌کند.',
        'Discover': 'کشف', 'We talk about your goals, audience and what makes you different.': 'درباره‌ی اهداف، مخاطبان و وجه تمایز شما صحبت می‌کنیم.',
        'Strategy': 'استراتژی', 'A clear plan for structure, content and features before any design starts.': 'پیش از شروع طراحی، یک برنامه‌ی روشن برای ساختار، محتوا و امکانات تهیه می‌کنیم.',
        'Design': 'طراحی', 'Clean, modern interfaces shaped around your brand and your visitors.': 'رابط‌های تمیز و مدرن که بر پایه‌ی برند و بازدیدکنندگان شما شکل می‌گیرند.',
        'Development': 'توسعه', 'Fast, responsive code with smooth animations and clean details.': 'کدنویسی سریع و واکنش‌گرا با انیمیشن‌های روان و جزئیات تمیز.',
        'Test': 'تست', 'Checked on real phones, tablets and browsers so everything works.': 'روی گوشی، تبلت و مرورگرهای واقعی بررسی می‌شود تا همه‌چیز درست کار کند.',
        'Launch': 'راه‌اندازی', 'Your site goes live, and I stay close for tweaks and support.': 'سایت شما منتشر می‌شود و برای اصلاحات و پشتیبانی کنارتان می‌مانم.',
        'Selected work': 'کارهای منتخب', 'Websites that': 'وب‌سایت‌هایی که', 'speak for me': 'خودشان حرف می‌زنند',
        'Design details': 'جزئیات طراحی', 'Visit live site': 'مشاهده‌ی سایت زنده',
        'Cactus Cafe': 'کافه کاکتوس', 'A warm, modern website for a desert-themed cafe, with a menu showcase and smooth scroll animations.': 'وب‌سایتی گرم و مدرن برای یک کافه با تم بیابانی، همراه با نمایش منو و انیمیشن‌های اسکرول روان.',
        'A warm, easygoing home for a desert-themed cafe: the site should feel like walking in from the sun and sitting down with a cold drink.': 'خانه‌ای گرم و راحت برای یک کافه‌ی بیابانی؛ سایت باید حس وارد شدن از زیر آفتاب و نشستن با یک نوشیدنی خنک را بدهد.',
        'Concept': 'ایده‌ی کلی', 'Layout & experience': 'چیدمان و تجربه‌ی کاربری', 'Look & feel': 'ظاهر و حس',
        'The brand is built around the desert at golden hour. Sand, terracotta and cactus green set the mood, and every section is meant to feel relaxed and welcoming rather than corporate.': 'برند حول فضای بیابان در ساعت طلایی ساخته شده است. شن، سفال و سبزِ کاکتوسی حال‌وهوا را می‌سازند و هر بخش قرار است آرام و دوستانه باشد، نه رسمی و خشک.',
        'The menu is the hero. Large, easy-to-scan categories sit on a calm grid, with photos given plenty of room. On a phone the menu works with one thumb, because most visitors check it while already on their way to the cafe.': 'منو ستاره‌ی اصلی است. دسته‌بندی‌های بزرگ و خوانا روی یک شبکه‌ی آرام قرار گرفته‌اند و عکس‌ها فضای کافی دارند. روی گوشی منو با یک انگشت قابل استفاده است، چون بیشتر بازدیدکنندگان در راه کافه آن را نگاه می‌کنند.',
        'Rounded shapes, soft shadows and a friendly type pairing. Smooth scroll animations bring sections in gently, so the page feels alive without ever slowing the visitor down.': 'شکل‌های گرد، سایه‌های نرم و ترکیب فونتی دوستانه. انیمیشن‌های روان اسکرول بخش‌ها را آرام وارد می‌کنند تا صفحه زنده باشد، بی‌آنکه بازدیدکننده را کند کند.',
        'Shell Cafe': 'کافه صدف', 'A seaside cafe website with a clean menu and booking experience that works great on every screen.': 'وب‌سایت یک کافه‌ی ساحلی با منوی تمیز و رزرو آسان که روی هر صفحه‌ای عالی کار می‌کند.',
        'A bright seaside cafe website where finding the menu and booking a table takes seconds.': 'وب‌سایت روشن یک کافه‌ی ساحلی که پیدا کردن منو و رزرو میز فقط چند ثانیه طول می‌کشد.',
        'Light, airy and calm, inspired by shells, sand and sea glass. The design keeps things simple so the food and the place do the talking.': 'سبک، باز و آرام، با الهام از صدف، شن و شیشه‌ی دریا. طراحی ساده نگه داشته شده تا غذا و فضای کافه خودشان حرف بزنند.',
        'A clean menu and a short booking flow sit right at the top of the page. Each step asks for only what is needed, and the same layout adapts to every screen size.': 'منوی تمیز و یک فرایند کوتاه رزرو درست بالای صفحه قرار دارند. هر مرحله فقط اطلاعات لازم را می‌خواهد و همین چیدمان با هر اندازه‌ی صفحه سازگار می‌شود.',
        'Soft blues and warm neutrals, generous white space and gentle motion that feels like a slow wave rather than an effect.': 'آبی‌های ملایم و رنگ‌های خنثی و گرم، فضای خالی فراوان و حرکتی نرم که بیشتر شبیه یک موج آهسته است تا یک افکت.',
        'Nimbus Agency': 'آژانس نیمبوس', 'A corporate website for a digital agency with a bold, modern look and clear structure.': 'وب‌سایت سازمانی برای یک آژانس دیجیتال با ظاهری جسورانه و مدرن و ساختاری روشن.',
        'A confident corporate website for a digital agency: bold on first impression, clear as soon as you start reading.': 'وب‌سایت سازمانی مطمئن برای یک آژانس دیجیتال: در نگاه اول جسور و به‌محض شروع خواندن کاملاً روشن.',
        'The agency sells expertise, so the design leads with strong typography and a clear message instead of decoration. The look says modern and reliable.': 'آژانس تخصص می‌فروشد، پس طراحی به‌جای تزئین با تایپوگرافی قوی و پیام روشن شروع می‌شود. ظاهر آن مدرن و قابل‌اعتماد است.',
        'A strict structure with services, work and contact reachable from anywhere on the page. Case studies get big, focused spaces so a visitor can judge the quality at a glance.': 'ساختاری منظم که خدمات، نمونه‌کارها و تماس از هر جای صفحه در دسترس‌اند. هر نمونه‌کار فضای بزرگ و متمرکزی دارد تا بازدیدکننده کیفیت را در یک نگاه بسنجد.',
        'High contrast, sharp type and a limited palette. Motion is used only to guide attention to what matters next.': 'کنتراست بالا، فونت تیز و پالت رنگی محدود. حرکت فقط برای هدایت توجه به بخش مهم بعدی استفاده شده است.',
        'Pulse Store': 'فروشگاه پالس', 'A fast online store with a clean product browsing experience and a simple checkout flow.': 'فروشگاه آنلاین سریع با تجربه‌ی تمیز مرور محصولات و فرایند ساده‌ی پرداخت.',
        'A fast online store that makes browsing products easy and checking out even easier.': 'فروشگاه آنلاین سریعی که مرور محصولات را آسان و پرداخت را آسان‌تر می‌کند.',
        'Shopping should feel effortless. The design removes everything that does not help someone find a product and buy it.': 'خرید باید بی‌دردسر باشد. طراحی هر چیزی را که به پیدا کردن و خرید محصول کمک نمی‌کند حذف کرده است.',
        'Clear product grids, simple filters and a short, focused checkout flow. Product pages put the photo, the price and the buy button in the first screen.': 'شبکه‌ی روشن محصولات، فیلترهای ساده و فرایند پرداخت کوتاه و متمرکز. در صفحه‌ی محصول، عکس، قیمت و دکمه‌ی خرید در همان صفحه‌ی اول دیده می‌شوند.',
        'A clean, neutral base that lets product photos stand out, with small, quick interactions that confirm each action without getting in the way.': 'زمینه‌ای تمیز و خنثی که عکس محصولات را برجسته می‌کند، با تعامل‌های کوچک و سریع که هر عمل را تأیید می‌کنند، بی‌آنکه مزاحم شوند.',
        'About me': 'درباره من', 'Designing the web,': 'طراحی وب،', 'one detail at a time': 'جزء‌ به‌ جزء',
        'Available for projects': 'آماده‌ی پروژه‌ی جدید', 'Web designer and developer': 'طراح و توسعه‌دهنده‌ی وب', 'Yasin Mirzaei': 'یاسین میرزایی',
        'I turn ideas into fast, modern and beautiful websites. Every project starts with your goals, then I shape the design and the small animated details that make it feel alive.': 'ایده‌ها را به وب‌سایت‌های سریع، مدرن و زیبا تبدیل می‌کنم. هر پروژه با اهداف شما شروع می‌شود و بعد طراحی و جزئیات متحرکِ کوچکی را شکل می‌دهم که سایت را زنده می‌کنند.',
        'Projects delivered': 'پروژه‌ی تحویل‌شده', 'Years of experience': 'سال تجربه', 'Download CV': 'دانلود رزومه', "Let's talk": 'بیایید صحبت کنیم', 'Tools I use': 'ابزارهایی که استفاده می‌کنم',
        'Good questions,': 'سوال‌های خوب،', 'clear answers': 'جواب‌های روشن',
        'How long does a website take?': 'ساخت یک وب‌سایت چقدر زمان می‌برد؟',
        'A simple one-page site usually takes one to two weeks. A multi-page website or a small online store takes about three to six weeks, depending on how quickly we agree on content and features.': 'یک سایت ساده‌ی تک‌صفحه‌ای معمولاً یک تا دو هفته زمان می‌برد. وب‌سایت چندصفحه‌ای یا یک فروشگاه آنلاین کوچک حدود سه تا شش هفته زمان می‌برد، بسته به اینکه چقدر سریع درباره‌ی محتوا و امکانات به توافق برسیم.',
        'How much does a website cost?': 'هزینه‌ی یک وب‌سایت چقدر است؟',
        'The price depends on the number of pages, the features and how much animation you want. After you tell me about your idea, I send a clear quote before any work starts, so there are no surprises.': 'قیمت به تعداد صفحات، امکانات و میزان انیمیشن مورد نظر شما بستگی دارد. بعد از اینکه ایده‌تان را گفتید، پیش از شروع کار یک پیشنهاد قیمت شفاف می‌فرستم تا هیچ سورپرایزی در کار نباشد.',
        'Will my website work on phones?': 'آیا سایت من روی گوشی کار می‌کند؟',
        'Yes. Every site I build is responsive and checked on real phones, tablets and browsers, so it looks and feels right on every screen.': 'بله. هر سایتی که می‌سازم واکنش‌گرا است و روی گوشی، تبلت و مرورگرهای واقعی بررسی می‌شود تا روی هر صفحه‌ای درست دیده شود.',
        'Do you work with WordPress?': 'آیا با وردپرس کار می‌کنید؟',
        'Yes. Depending on the project I build a custom-designed WordPress site or a hand-coded website with HTML, CSS and JavaScript. I will suggest the one that fits your goals best.': 'بله. بسته به پروژه، یک سایت وردپرسی با طراحی اختصاصی یا یک وب‌سایت کدنویسی‌شده با HTML، CSS و JavaScript می‌سازم. گزینه‌ای را پیشنهاد می‌دهم که بهتر به اهداف شما بخورد.',
        'What do you need from me to start?': 'برای شروع به چه چیزی از من نیاز دارید؟',
        'Just your goals and a short description of your business. If you already have a logo, texts and photos, great. If not, I will guide you on what to prepare.': 'فقط اهداف شما و یک توضیح کوتاه درباره‌ی کسب‌وکارتان. اگر لوگو، متن و عکس دارید که عالی است. اگر ندارید، راهنمایی می‌کنم که چه چیزی آماده کنید.',
        'Do you help after the website is live?': 'آیا بعد از راه‌اندازی سایت هم کمک می‌کنید؟',
        'Of course. After launch I stay close for tweaks and support, and I can help you update content or add new pages later.': 'البته. بعد از راه‌اندازی برای اصلاحات و پشتیبانی کنارتان هستم و می‌توانم در به‌روزرسانی محتوا یا افزودن صفحه‌های جدید هم کمک کنم.',
        'Have a project in mind?': 'پروژه‌ای در ذهن دارید؟', 'Tell me about your idea and I will get back to you.': 'ایده‌تان را بگویید تا با شما تماس بگیرم.',
        "Let's talk about your project": 'درباره‌ی پروژه‌تان صحبت کنیم', 'Fill in the form and I will contact you as soon as possible.': 'فرم را پر کنید تا در اسرع وقت با شما تماس بگیرم.',
        'Your Name': 'نام شما', 'Email': 'ایمیل', 'Phone number': 'شماره‌ی تلفن', 'Tell me about your project': 'درباره‌ی پروژه‌تان بگویید',
        'John Smith': 'علی رضایی', 'Search country or code': 'جستجوی کشور یا کد کشور', 'Choose country code': 'انتخاب کد کشور', 'Close form': 'بستن فرم',
        'What kind of website do you need? Add your goals, pages, deadline or anything else that helps.': 'چه نوع وب‌سایتی نیاز دارید؟ اهداف، صفحه‌ها، زمان تحویل یا هر چیز دیگری که کمک می‌کند را بنویسید.',
        'Your details are only used to reply to your message.': 'اطلاعات شما فقط برای پاسخ به پیامتان استفاده می‌شود.',
        'Send message': 'ارسال پیام', 'Sending...': 'در حال ارسال...', 'Thank you,': 'ممنون،', 'Your message has been sent. I will contact you very soon.': 'پیام شما ارسال شد. خیلی زود با شما تماس می‌گیرم.', 'Send another message': 'ارسال پیام دیگر',
        'Yasin Mirzaei. Web design and development.': 'یاسین میرزایی. طراحی و توسعه‌ی وب.', 'Social': 'شبکه‌های اجتماعی', 'Pages': 'صفحات',
        'GitHub': 'گیت‌هاب', 'Telegram': 'تلگرام', 'Instagram': 'اینستاگرام', 'WhatsApp': 'واتس‌اپ', 'Back to top': 'بازگشت به بالا', 'Copy email': 'کپی ایمیل', 'Copy phone number': 'کپی شماره‌ی تلفن',
        'Toggle menu': 'باز و بسته کردن منو', 'Main menu': 'منوی اصلی', 'Close': 'بستن',
        'No country found': 'کشوری پیدا نشد', 'Please enter your name.': 'لطفاً نام خود را وارد کنید.', 'Please enter a valid email address.': 'لطفاً یک ایمیل معتبر وارد کنید.',
        'Please enter a valid phone number.': 'لطفاً یک شماره‌ی تلفن معتبر وارد کنید.', 'Please tell me a little more about your project.': 'لطفاً کمی بیشتر درباره‌ی پروژه‌تان بنویسید.',
        'The contact form is not connected yet.': 'فرم تماس هنوز متصل نیست.', 'Something went wrong. Please check your connection and try again.': 'مشکلی پیش آمد. لطفاً اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.',
        'Switch language': 'تغییر زبان', 'Switch between dark and light mode': 'تغییر حالت شب و روز'
    };
    var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
    window.MWT = function (s) { return lang === 'fa' && FA[s] ? FA[s] : s; };

    function walk(node) {
        var w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null), n, list = [];
        while ((n = w.nextNode())) list.push(n);
        list.forEach(function (t) {
            var p = t.parentNode; if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return;
            var k = norm(t.nodeValue); if (k && FA[k]) t.nodeValue = t.nodeValue.replace(t.nodeValue.trim(), FA[k]);
        });
        if (node.querySelectorAll) node.querySelectorAll('[placeholder],[alt],[title],[data-name],[aria-label]').forEach(function (el) {
            ['placeholder', 'alt', 'title', 'data-name'].forEach(function (a) { var v = el.getAttribute(a); if (v && FA[norm(v)]) el.setAttribute(a, FA[norm(v)]); });
            var al = el.getAttribute('aria-label');
            if (al && FA[norm(al)] && !el.closest('.hwf-col')) el.setAttribute('aria-label', FA[norm(al)]);
        });
    }
    function applyLang() {
        walk(document.body);
        document.querySelectorAll('template').forEach(function (t) { walk(t.content); });
        var d = document.querySelector('meta[name="description"]');
        if (d) d.setAttribute('content', 'طراحی و توسعه‌ی وب‌سایت مدرن، خلاقانه و کاربردی.');
    }

    function init() {
        if (lang === 'fa') applyLang();
        var lb = document.getElementById('lang-toggle'), tb = document.getElementById('theme-toggle');
        if (lb) {
            document.getElementById('lang-label').textContent = lang === 'fa' ? 'EN' : 'فا';
            lb.setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
            lb.addEventListener('click', function () {
                try { localStorage.setItem('mw-lang', lang === 'fa' ? 'en' : 'fa'); } catch (e) {}
                location.reload();
            });
        }
        if (tb) {
            tb.setAttribute('aria-label', lang === 'fa' ? FA['Switch between dark and light mode'] : 'Switch between dark and light mode');
            tb.addEventListener('click', function () {
                theme = theme === 'light' ? 'dark' : 'light';
                root.classList.add('theme-anim');
                if (theme === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
                try { localStorage.setItem('mw-theme', theme); } catch (e) {}
                var m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = theme === 'light' ? '#ffffff' : '#000000';
                setTimeout(function () { root.classList.remove('theme-anim'); }, 600);
            });
        }
    }
    init();

    /* ---------- phone keyboard helpers ---------- */
    var vv = window.visualViewport;
    function vpVars() {
        var h = vv ? vv.height : window.innerHeight, top = vv ? vv.offsetTop : 0;
        root.style.setProperty('--vvh', h + 'px');
        root.style.setProperty('--vvt', top + 'px');
        root.style.setProperty('--kb', Math.max(0, window.innerHeight - h - top) + 'px');
        root.classList.toggle('kb-open', window.innerHeight - h > 120);
    }
    vpVars();
    if (vv) { vv.addEventListener('resize', vpVars); vv.addEventListener('scroll', vpVars); }
    window.addEventListener('orientationchange', function () { setTimeout(vpVars, 300); });

    document.addEventListener('focusin', function (e) {
        var el = e.target;
        if (!el.matches || !el.matches('.contact-card input, .contact-card textarea') || el.id === 'cc-search') return;
        setTimeout(function () { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 320);
    });

    /* On phones the country list floats above the keyboard as a sheet. It is moved to <body>
       while open, because glass (backdrop-filter) parents would trap a fixed element. */
    var wrap = document.getElementById('cc-wrap'), home = wrap && wrap.parentNode;
    var sheetMq = window.matchMedia('(max-width: 760px), (hover: none)'), back = null;
    if (wrap) new MutationObserver(function () {
        var open = wrap.classList.contains('open');
        clearTimeout(back);
        if (open && sheetMq.matches && wrap.parentNode !== document.body) { document.body.appendChild(wrap); wrap.classList.add('cc-float'); }
        if (!open && wrap.parentNode === document.body) back = setTimeout(function () { home.appendChild(wrap); wrap.classList.remove('cc-float'); }, 320);
    }).observe(wrap, { attributes: true, attributeFilter: ['class'] });
})();
