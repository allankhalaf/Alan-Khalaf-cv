// Dynamic base path for images - handles both local and GitHub Pages
const basePath = window.location.pathname.includes('/Alan-Khalaf-cv/')
    ? '/Alan-Khalaf-cv/images/'
    : './images/';

// Safe text setter - prevents null errors
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// Safe innerHTML setter
function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// ==========================================
// THEME SYSTEM
// ==========================================
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ==========================================
// LOADING SCREEN
// ==========================================
function hideLoadingScreen() {
    const loader = document.getElementById('loadingScreen');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }
}

// ==========================================
// PARTICLES SYSTEM
// ==========================================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isVisible = true;

    function resize() {
        const header = document.querySelector('.header');
        if (header) {
            canvas.width = header.offsetWidth;
            canvas.height = header.offsetHeight;
        }
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        if (!isVisible) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        animationId = requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener('resize', resize);

    // Pause when not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isVisible = false;
            cancelAnimationFrame(animationId);
        } else {
            isVisible = true;
            animate();
        }
    });
}

// ==========================================
// 3D TILT EFFECT ON CARDS
// ==========================================
function initTiltEffect() {
    // Skip on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cards = document.querySelectorAll('.project-card, .card');
    cards.forEach(card => {
        const onMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        };
        const onMouseLeave = () => {
            card.style.transform = '';
        };
        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
    });
}

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
    en: {
        name: "ALAN ABDULAZIZ KHALAF",
        location: "Al Hassakah - Syria",
        headerGreeting: "Hello, I'm",
        eduTitle: "Education",
        degree1: "Bachelor of English Literature",
        school1: "Al Furat University",
        degree2: "Educational Qualification Diploma",
        school2: "Syrian Virtual University",
        techSkillTitle: "Technical Skills",
        catCore: "Core",
        catFrameworks: "Frameworks",
        catStyling: "Styling",
        catTools: "Tools",
        catAnimation: "Animation / 3D",
        expTitle: "Expertise",
        exp1: "Distribution Monitoring",
        exp2: "Registration & Data Management",
        exp3: "Protection Referral Mechanisms",
        exp4: "Case Documentation",
        exp5: "Reporting & Analysis",
        exp6: "Coordination & Stakeholder Engagement",
        langTitle: "Languages",
        lang1: "English",
        lang2: "Arabic",
        lang3: "Kurdish",
        profileTitle: "Profile",
        profileText: "Front-End Developer specializing in React.js, TypeScript, and modern CSS frameworks. Over 6 years of field experience with international organizations (Blumont, UNHCR) in data management and humanitarian operations. I build responsive, accessible web applications that bridge technology and real-world impact.",
        projectsTitle: "Projects",
        proj1: "Personal Portfolio",
        proj2: "E-Commerce Store",
        proj3: "Hospital Website",
        proj4: "Real Estate Company",
        proj5: "Tourism Platform",
        proj6: "Restaurant Website",
        proj7: "FlowPilot AI",
        proj8: "Coaching & Consulting",
        proj9: "Beauty & Skin Care",
        proj10: "Nutrition Calculator",
        proj1Desc: "Professional portfolio showcasing projects and skills.",
        proj2Desc: "Full-featured online store with product catalog, cart, and responsive design.",
        proj3Desc: "Medical services platform with appointment system and department listings.",
        proj4Desc: "Property listing platform with search and filtering capabilities.",
        proj5Desc: "Travel booking and destination showcase website.",
        proj6Desc: "Italian pizza restaurant with menu, reservations, and bilingual support.",
        proj7Desc: "Interactive React web application with AI-powered features.",
        proj8Desc: "Professional coaching services platform with booking system.",
        proj9Desc: "Beauty products showcase with modern UI and responsive layout.",
        proj10Desc: "Calorie and daily nutrition tracking application.",
        certTitle: "Certificates & Courses",
        cert1Name: "Front-End Development Certificate",
        cert1Provider: "Hsoub Academy | Professional certificate in web design and development",
        workTitle: "Work Experience",
        job0Company: "Freelance",
        job0Date: "2022 - Present",
        job0Role: "Freelance Front-End Developer",
        job0d1: "Developing modern, responsive websites using React.js, TypeScript, and Tailwind CSS.",
        job0d2: "Building professional UIs for e-commerce, portfolios, and business websites.",
        job0d3: "Using Vite, Webpack, GSAP, and Three.js for dynamic visual experiences.",
        job1Company: "Blumont - Al Hol Camp",
        job1Role: "Distribution Assistant",
        job1d1: "Managed beneficiary distribution lists to prevent duplication.",
        job1d2: "Monitored on-site distribution for order, transparency, and SOP adherence.",
        job1d3: "Prioritised vulnerable cases per protection criteria.",
        job1d4: "Handled complaints via feedback and referral mechanisms.",
        job1d5: "Coordinated with logistics and protection teams.",
        job2Company: "Blumont - Al Hassaka / Collective Centers",
        job2Role: "Daily Distribution Assistant",
        job2d1: "Participated in aid distribution in collective centers.",
        job2d2: "Monitored SWM and desludging activities.",
        job2d3: "Tracked IDP movements and facility maintenance.",
        job3Company: "Blumont - Areesha Camp",
        job3Role: "Protection Assistant",
        job3d1: "Identified and referred vulnerable individuals.",
        job3d2: "Applied AGD approach in all field activities.",
        job3d3: "Facilitated awareness sessions on services and complaints.",
        job3d4: "Supported case follow-up with service providers.",
        job3d5: "Monitored protection activities and reported observations.",
        job4Company: "UNHCR Facilitator - Al Hol Camp",
        job4Role: "Registration / Data Entry Assistant",
        job4d1: "Conducted identity verification and household data collection.",
        job4d2: "Entered and updated beneficiary data with high accuracy.",
        job4d3: "Performed re-verification exercises for family changes.",
        job4d4: "Cross-checked records to prevent duplication.",
        job5Company: "Syria - Al Hassakah",
        job5Role: "English Teacher",
        job5d1: "Taught English across all grade levels.",
        job5d2: "Prepared lesson plans, tests, and tracked student progress.",
        skillTitle: "Skills",
        skill1: "Protection during distribution",
        skill2: "Computer skills in programming and web design",
        skill3: "Website design and development",
        courseTitle: "Courses",
        course1: "Web design course at Hsoub Academy",
        contactTitle: "Get In Touch",
        contactText: "Interested in collaborating or have a project in mind? Feel free to reach out.",
        emailMe: "Email Me",
        whatsappMe: "WhatsApp",
        btnViewWork: "View My Work",
        btnDownloadCV: "Print / Save CV",
        btnContact: "Contact Me",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
        footerText: " Alan Abdulaziz Khalaf. All rights reserved.",
        loaderText: "Loading",
        viewAllText: "View All Projects",
        carouselNote: "Use arrows to navigate slides"
    },
    ar: {
        name: "آلان عبدالعزيز خلف",
        location: "سوريا ، الحسكة",
        headerGreeting: "مرحباً، أنا",
        eduTitle: "التعليم",
        degree1: "بكالوريوس في الأدب الإنجليزي",
        school1: "جامعة الفرات",
        degree2: "دبلوم التأهيل التربوي",
        school2: "الجامعة الافتراضية السورية",
        techSkillTitle: "المهارات التقنية",
        catCore: "الأساسية",
        catFrameworks: "الأطر",
        catStyling: "التنسيق",
        catTools: "الأدوات",
        catAnimation: "الحركة / ثلاثي الأبعاد",
        expTitle: "الخبرات",
        exp1: "مراقبة التوزيع",
        exp2: "التسجيل وإدارة البيانات",
        exp3: "آليات الإحالة للحماية",
        exp4: "توثيق الحالات",
        exp5: "التقارير والتحليل",
        exp6: "التنسيق والتواصل مع الأطراف المعنية",
        langTitle: "اللغات",
        lang1: "الإنجليزية",
        lang2: "العربية",
        lang3: "الكردية",
        profileTitle: "نبذة شخصية",
        profileText: "مطور واجهات أمامية متخصص في React.js وTypeScript وأطر CSS الحديثة. أكثر من 6 سنوات خبرة ميدانية مع منظمات دولية (Blumont، UNHCR) في إدارة البيانات والعمليات الإنسانية. أبني تطبيقات ويب متجاوبة ومتاحة تربط بين التكنولوجيا والتأثير في العالم الحقيقي.",
        projectsTitle: "المشاريع",
        proj1: "موقع أعمال شخصي",
        proj2: "متجر إلكتروني",
        proj3: "موقع مشفى",
        proj4: "شركة عقارية",
        proj5: "منصة سياحية",
        proj6: "موقع مطعم",
        proj7: "FlowPilot AI",
        proj8: "خدمات التدريب والاستشارات",
        proj9: "موقع الجمال والعناية بالبشرة",
        proj10: "حاسبة السعرات الحرارية",
        proj1Desc: "موقع أعمال شخصي احترافي يعرض المشاريع والمهارات.",
        proj2Desc: "متجر إلكتروني كامل مع كتالوج منتجات، سلة، وتصميم متجاوب.",
        proj3Desc: "منصة خدمات طبية مع نظام مواعيد وقوائم الأقسام.",
        proj4Desc: "منصة عقارات مع بحث وقدرات التصفية.",
        proj5Desc: "موقع حجز سفر وعرض وجهات سياحية.",
        proj6Desc: "مطعم بيتزا إيطالي مع قائمة طعام، حجوزات، ودعم ثنائي اللغة.",
        proj7Desc: "تطبيق ويب تفاعلي React مع ميزات مدعومة بالذكاء الاصطناعي.",
        proj8Desc: "منصة خدمات التدريب المهني مع نظام حجز.",
        proj9Desc: "عرض منتجات تجميل مع واجهة حديثة وتصميم متجاوب.",
        proj10Desc: "تطبيق تتبع السعرات الحرارية والتغذية اليومية.",
        certTitle: "الشهادات والدورات",
        cert1Name: "شهادة تطوير الواجهات الأمامية",
        cert1Provider: "أكاديمية حسوب | شهادة احترافية في تصميم وتطوير مواقع الويب",
        workTitle: "الخبرة العملية",
        job0Company: "مستقل (Freelance)",
        job0Date: "2022 - الآن",
        job0Role: "مطور واجهات أمامية مستقل",
        job0d1: "تطوير مواقع وتطبيقات ويب حديثة ومتجاوبة باستخدام React.js وTypeScript وTailwind CSS.",
        job0d2: "بناء واجهات مستخدم احترافية للمتاجر الإلكترونية والمواقع الشخصية والتجارية.",
        job0d3: "استخدام Vite وWebpack وGSAP وThree.js لتجارب بصرية ديناميكية.",
        job1Company: "بلومونت - مخيم الهول",
        job1Role: "مساعد توزيع",
        job1d1: "إدارة وتحقق من قوائم توزيع المستفيدين لمنع التكرار.",
        job1d2: "مراقبة التوزيع الميداني للحفاظ على النظام والشفافية والالتزام بالإجراءات.",
        job1d3: "تحديد أولويات الحالات الضعيفة وفقاً لمعايير الحماية.",
        job1d4: "معالجة الشكاوى عبر آليات التغذية الراجعة والإحالة.",
        job1d5: "التنسيق مع فرق اللوجستيات والحماية.",
        job2Company: "بلومونت - الحسكة / المراكز الجماعية",
        job2Role: "مساعد توزيع يومي",
        job2d1: "المشاركة في توزيع المساعدات في المراكز الجماعية.",
        job2d2: "مراقبة أنشطة إدارة النفايات الصلبة.",
        job2d3: "تتبع حركات النازحين وصيانة المرافق.",
        job3Company: "بلومونت - مخيم عريشة",
        job3Role: "مساعد حماية",
        job3d1: "تحديد الأفراد الأكثر ضعفاً وإحالتهم.",
        job3d2: "تطبيق نهج العمر والنوع والتنوع في جميع الأنشطة الميدانية.",
        job3d3: "تسهيل جلسات التوعية حول الخدمات والشكاوى.",
        job3d4: "دعم متابعة الحالات مع مقدمي الخدمات.",
        job3d5: "مراقبة أنشطة الحماية وإعداد تقارير الملاحظات.",
        job4Company: "ميسر للمفوضية السامية لشؤون اللاجئين - مخيم الهول",
        job4Role: "مساعد تسجيل / إدخال بيانات",
        job4d1: "إجراء التحقق من الهوية وجمع بيانات الأسر.",
        job4d2: "إدخال وتحديث بيانات المستفيدين بدقة عالية.",
        job4d3: "إجراء أنشطة إعادة التحقق لتغييرات العائلة.",
        job4d4: "التحقق من السجلات لمنع التكرار.",
        job5Company: "سوريا - الحسكة",
        job5Role: "مدرس لغة إنجليزية",
        job5d1: "تدريس اللغة الإنجليزية لجميع المراحل.",
        job5d2: "إعداد الخطط الدراسية والاختبارات ومتابعة تقدم الطلاب.",
        skillTitle: "المهارات",
        skill1: "الحماية أثناء التوزيع",
        skill2: "مهارات الحاسوب في البرمجة وتصميم مواقع الويب",
        skill3: "تصميم وتطوير مواقع الويب",
        courseTitle: "الدورات",
        course1: "دورة تصميم مواقع الويب في أكاديمية حاسوب",
        contactTitle: "تواصل معي",
        contactText: "مهتم بالتعاون أو لديك مشروع في عقلك لا تتردد في التواصل.",
        emailMe: "ارسل بريد",
        whatsappMe: "راسلني واتساب",
        btnViewWork: "عرض أعمالي",
        btnDownloadCV: "طباعة / حفظ السيرة الذاتية",
        btnContact: "تواصل معي",
        navHome: "الرئيسية",
        navAbout: "عني",
        navSkills: "المهارات",
        navExperience: "الخبرة",
        navProjects: "المشاريع",
        navContact: "تواصل",
        footerText: " آلان عبدالعزيز خلف. جميع الحقوق محفوظة.",
        loaderText: "جاري التحميل",
        viewAllText: "عرض كل المشاريع",
        carouselNote: "استخدم الأسهم للتنقل بين الشرائح"
    }
};

function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update nav links
    const navKeys = ['navHome', 'navAbout', 'navSkills', 'navExperience', 'navProjects', 'navContact'];
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        if (t[navKeys[index]]) link.textContent = t[navKeys[index]];
    });

    // Buttons
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');
    if (btnEn) {
        btnEn.classList.toggle('active', lang === 'en');
        btnEn.setAttribute('aria-pressed', lang === 'en');
    }
    if (btnAr) {
        btnAr.classList.toggle('active', lang === 'ar');
        btnAr.setAttribute('aria-pressed', lang === 'ar');
    }

    // Helper for button text updates
    const updateBtnText = (btnId, textKey) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            const span = btn.querySelector('span');
            if (span && t[textKey]) span.textContent = t[textKey];
        }
    };

    // Header
    setText('header-greeting', t.headerGreeting);
    setText('name', t.name);
    setText('location', t.location);

    // Education
    setText('edu-title', t.eduTitle);
    setText('degree1', t.degree1);
    setText('school1', t.school1);
    setText('degree2', t.degree2);
    setText('school2', t.school2);

    // Skills Categories
    setText('tech-skill-title', t.techSkillTitle);
    setText('cat-core', t.catCore);
    setText('cat-frameworks', t.catFrameworks);
    setText('cat-styling', t.catStyling);
    setText('cat-tools', t.catTools);
    setText('cat-animation', t.catAnimation);

    // Expertise
    setText('exp-title', t.expTitle);
    for (let i = 1; i <= 6; i++) setText('exp' + i, t['exp' + i]);

    // Languages
    setText('lang-title', t.langTitle);
    for (let i = 1; i <= 3; i++) setText('lang' + i, t['lang' + i]);

    // Profile
    setText('profile-title', t.profileTitle);
    setText('profile-text', t.profileText);

    // Projects
    setText('projects-title', t.projectsTitle);
    for (let i = 1; i <= 10; i++) {
        setText('proj' + i, t['proj' + i]);
        setText('proj' + i + '-desc', t['proj' + i + 'Desc']);
    }

    // Certificates
    setText('cert-title', t.certTitle);
    setText('cert1-name', t.cert1Name);
    setText('cert1-provider', t.cert1Provider);

    // Work Experience
    setText('work-title', t.workTitle);
    for (let i = 0; i <= 5; i++) {
        setText('job' + i + '-company', t['job' + i + 'Company']);
        setText('job' + i + '-role', t['job' + i + 'Role']);
        if (t['job' + i + 'Date']) setText('job' + i + '-date', t['job' + i + 'Date']);
        const dutyCount = i === 0 ? 3 : i === 1 ? 5 : i === 2 ? 3 : i === 3 ? 5 : i === 4 ? 4 : 2;
        for (let d = 1; d <= dutyCount; d++) {
            setText('job' + i + '-d' + d, t['job' + i + 'd' + d]);
        }
    }

    // Skills & Courses
    setText('skill-title-text', t.skillTitle);
    for (let i = 1; i <= 3; i++) setText('skill' + i, t['skill' + i]);
    setText('course-title', t.courseTitle);
    setText('course1', t.course1);

    // Contact & Footer
    setText('contact-title-text', t.contactTitle);
    setText('contact-text', t.contactText);
    setText('footer-text', t.footerText);
    setText('email-btn-text', t.emailMe);
    setText('whatsapp-btn-text', t.whatsappMe);

    // Buttons
    updateBtnText('btn-view-work', 'btnViewWork');
    updateBtnText('btn-download-cv', 'btnDownloadCV');
    updateBtnText('btn-contact', 'btnContact');

    // View All button
    setText('view-all-text', t.viewAllText);

    // Carousel note
    setText('carouselNote', t.carouselNote);

    // Click hints
    const hintText = lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click to view details';
    setText('click-hint-exp', hintText);
    setText('click-hint-workexp', hintText);
    setText('click-hint-skills', hintText);
    setText('click-hint-courses', hintText);

    // Loader text
    setText('loaderText', t.loaderText);

    localStorage.setItem('preferredLang', lang);

    // Refresh carousel if open
    const modal = document.getElementById('carouselModal');
    if (modal && modal.classList.contains('active')) {
        currentSlideIndex = 0;
        updateCarousel();
    }
}

// ==========================================
// CAROUSEL DATA
// ==========================================
const carouselData = {
    expertise: {
        title: 'Expertise',
        titleAr: 'الخبرات',
        slides: {
            en: [
                { title: 'Distribution Monitoring & Quality Assurance', description: 'Expert in monitoring aid distribution processes to ensure fairness, transparency, and compliance with humanitarian standards and SOPs.', image: basePath + 'skill1.jpg' },
                { title: 'Registration & Data Management Systems', description: 'Proficient in beneficiary registration, database management, and maintaining data integrity across complex humanitarian operations.', image: basePath + 'regis.png' },
                { title: 'Protection Referral Mechanisms', description: 'Skilled in identifying vulnerable cases and implementing protection-sensitive referral pathways in accordance with humanitarian principles.', image: basePath + 'prot.png' },
                { title: 'Case Documentation & Reporting', description: 'Experienced in comprehensive case documentation, field reporting, and analytical reporting for donor and coordination requirements.', image: basePath + 'distre.png' },
                { title: 'Coordination & Stakeholder Engagement', description: 'Strong ability to coordinate with multiple agencies, local authorities, and community representatives to ensure effective service delivery.', image: basePath + 'coor.png' }
            ],
            ar: [
                { title: 'مراقبة التوزيع وضمان الجودة', description: 'خبير في مراقبة عمليات توزيع المساعدات لضمان العدالة والشفافية والامتثال للمعايير الإنسانية والإجراءات التشغيلية القياسية.', image: basePath + 'skill1.jpg' },
                { title: 'أنظمة التسجيل وإدارة البيانات', description: 'متمكن في تسجيل المستفيدين وإدارة قواعد البيانات والحفاظ على سلامة البيانات عبر العمليات الإنسانية المعقدة.', image: basePath + 'regis.png' },
                { title: 'آليات الإحالة للحماية', description: 'ماهر في تحديد الحالات الضعيفة وتطبيق مسارات الإحالة الحساسة للحماية وفقاً لمبادئ العمل الإنساني.', image: basePath + 'prot.png' },
                { title: 'توثيق الحالات والتقارير', description: 'ذو خبرة في توثيق الحالات الشاملة وتقارير الميدان والتقارير التحليلية لمتطلبات الجهات المانحة والتنسيق.', image: basePath + 'distre.png' },
                { title: 'التنسيق والتواصل مع الأطراف المعنية', description: 'قدرة قوية على التنسيق مع وكالات متعددة والسلطات المحلية وممثلي المجتمع لضمان تقديم الخدمات بفعالية.', image: basePath + 'coor.png' }
            ]
        }
    },
    workexp: {
        title: 'Work Experience',
        titleAr: 'الخبرة العملية',
        slides: {
            en: [
                { title: 'Emergency humanitarian response and on-ground community support', description: 'Supervised the ground distribution of humanitarian relief packages and essential supplies in remote camp settings', image: basePath + 'Al-Hol-Camp-1.jpg' },
                { title: 'Emergency bread assistance as a core component of daily food security responses', description: 'Managed on-ground distribution points and streamlined delivery cycles to guarantee that essential food resources reach vulnerable children safely, efficiently, and with dignity', image: basePath + 'Al-Hol-Camp-3.jpg' },
                { title: 'Providing essential health, hygiene packages, and winterization aid to displaced families', description: 'Planned and executed the distribution of hygiene kits and Non-Food Items (NFIs) within emergency WASH and public health intervention programs', image: basePath + 'hdist.png' },
                { title: 'Conducting practical fire safety training and fire extinguisher distribution for camp residents', description: 'Managed safety enhancement and Disaster Risk Reduction (DRR) initiatives, including the allocation of fire mitigation assets and establishing community emergency response teams', image: basePath + 'Al-Hol.jpg' },
                { title: 'Rehabilitating water infrastructure and installing supply tanks in collective shelters and conflict-affected areas', description: 'Managed the restoration of sanitation facilities and communal water points to mitigate waterborne disease risks and improve basic living standards for vulnerable communities', image: basePath + '6.jpg' },
                { title: 'Maintenance and Rehabilitation of Shelter Centers for Displaced People', description: 'Supporting the maintenance and rehabilitation of shelter centers to improve living conditions for displaced people through cleaning activities, sanitation system repairs, infrastructure maintenance, and essential service improvements, ensuring a safe, healthy, and dignified environment for beneficiaries', image: basePath + '9.jpg' },
                { title: 'Provision of Safe Water for Displaced People', description: 'Supporting the delivery and distribution of safe water to displaced families through water trucking services and water supply points, ensuring reliable access to clean water and improving health and living conditions in shelters and host communities', image: basePath + '33.png' },
                { title: 'Distribution of Clothing for Displaced Children', description: 'Supporting the distribution of clothing to displaced children to meet their basic needs, provide protection from weather conditions, and promote their dignity, well-being, and quality of life', image: basePath + '22.png' }
            ],
            ar: [
                { title: 'الاستجابة الإنسانية الطارئة ودعم الفئات الهشة ميدانياً', description: 'الإشراف على عمليات توزيع المساعدات الإنسانية والطرود الإغاثية في البيئات النائية ومخيمات اللجوء', image: basePath + 'Al-Hol-Camp-1.jpg' },
                { title: 'توزيع مادة الخبز كجزء من الاستجابة الطارئة للأمن الغذائي اليومي', description: 'إدارة نقاط التوزيع الميدانية وتطبيق معايير الكفاءة والنظافة والسلامة لضمان وصول المواد الغذائية الحيوية للأطفال والنساء بشكل آمن وكريم', image: basePath + 'Al-Hol-Camp-3.jpg' },
                { title: 'تأمين مستلزمات النظافة الأساسية والمواد الإغاثية الشتوية للعائلات النازحة', description: 'تخطيط وتنفيذ حملات توزيع سلال النظافة (Hygiene Kits) والمواد غير الغذائية (NFIs) كجزء من برامج الإصحاح البيئي والاستجابة الطارئة', image: basePath + 'hdist.png' },
                { title: 'تدريب سكان المخيمات على مبادئ الدفاع المدني وإخماد الحرائق وتوزيع طفايات الحريق', description: 'الإشراف على مشاريع تعزيز السلامة العامة وتوزيع طفايات الحريق وتشكيل لجان طوارئ مجتمعية داخل المخيمات للحد من الخسائر البشرية والمادية', image: basePath + 'Al-Hol.jpg' },
                { title: 'تأهيل البنية التحتية للمياه وتركيب خزانات الإمداد في مراكز الإيواء والمناطق المتضررة من النزاع', description: 'الإشراف على مشاريع تأهيل شبكات المياه وتركيب خزانات التوزيع لضمان تلبية الاحتياجات اليومية من المياه النظيفة للنازحين في مراكز الإيواء والمخيمات، مما يقلل من مخاطر الأمراض المنقولة بالمياه ويحسن الظروف المعيشية الأساسية للمجتمعات الهشة', image: basePath + '6.jpg' },
                { title: 'صيانة وإصلاح البنية التحتية في مراكز الإيواء', description: 'المشاركة في أعمال صيانة شبكات الصرف الصحي وتنظيف المرافق وإصلاح الأعطال الخدمية داخل مراكز الإيواء، بما يساهم في تحسين الظروف الصحية والبيئية للنازحين وضمان استمرارية الخدمات الأساسية في بيئات الإيواء المكتظة والمتحركة', image: basePath + '9.jpg' },
                { title: 'توفير المياه النظيفة للنازحين', description: 'المشاركة في عمليات توزيع المياه النظيفة للنازحين من خلال خدمات نقل المياه ونقاط توزيع المياه، مما يضمن وصولًا موثوقًا للمياه النظيفة ويحسن الصحة والظروف المعيشية في مراكز الإيواء والمجتمعات المضيفة', image: basePath + '33.png' },
                { title: 'توزيع الملابس للأطفال النازحين', description: 'الإشراف على توزيع الملابس للأطفال النازحين لضمان تلبية احتياجاتهم الأساسية وتقديم الحماية من ظروف الطقس وتعزيز كرامتهم ورفاهيتهم وجودة حياتهم', image: basePath + '22.png' }
            ]
        }
    },
    skills: {
        title: 'Skills',
        titleAr: 'المهارات',
        slides: {
            en: [
                { title: 'Protection During Distribution', description: 'Implementing protection-sensitive approaches during aid distribution, ensuring dignity, safety, and equitable access for all beneficiaries including vulnerable groups.', image: basePath + 'dist1.png' },
                { title: 'Programming & Web Development', description: 'Proficient in computer programming, web design, and development using modern technologies and frameworks to create responsive and functional websites.', image: basePath + 'prog.jpg' },
                { title: 'Website Design & Development', description: 'Experienced in designing and developing professional websites with focus on user experience, accessibility, and modern design principles.', image: basePath + 'web.png' }
            ],
            ar: [
                { title: 'الحماية أثناء التوزيع', description: 'تطبيق مناهج حساسة للحماية أثناء توزيع المساعدات، ضمان الكرامة والسلامة والوصول العادل لجميع المستفيدين بما في ذلك الفئات الضعيفة.', image: basePath + 'dist1.png' },
                { title: 'البرمجة وتطوير الويب', description: 'متمكن في البرمجة الحاسوبية وتصميم وتطوير مواقع الويب باستخدام التقنيات والأطر الحديثة لإنشاء مواقع متجاوبة ووظيفية.', image: basePath + 'prog.jpg' },
                { title: 'تصميم وتطوير مواقع الويب', description: 'ذو خبرة في تصميم وتطوير مواقع الويب الاحترافية مع التركيز على تجربة المستخدم وسهولة الوصول ومبادئ التصميم الحديثة.', image: basePath + 'web.png' }
            ]
        }
    },
    courses: {
        title: 'Courses',
        titleAr: 'الدورات',
        slides: {
            en: [
                { title: 'Web Design Course - Hsoub Academy', description: 'Completed comprehensive web design training at Hsoub Academy covering HTML, CSS, JavaScript, responsive design, and modern web development practices.', image: basePath + 'hsoub.png' }
            ],
            ar: [
                { title: 'دورة تصميم مواقع الويب - أكاديمية حاسوب', description: 'أكملت تدريباً شاملاً في تصميم مواقع الويب في أكاديمية حاسوب يغطي HTML وCSS وJavaScript والتصميم المتجاوب وممارسات تطوير الويب الحديثة.', image: basePath + 'hsoub.png' }
            ]
        }
    }
};

var currentCarousel = null;
var currentSlideIndex = 0;

function getCurrentSlides() {
    var lang = document.documentElement.lang || 'en';
    var data = carouselData[currentCarousel];
    return data && data.slides && data.slides[lang] ? data.slides[lang] : [];
}

function openCarousel(type) {
    currentCarousel = type;
    currentSlideIndex = 0;
    var modal = document.getElementById('carouselModal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        var closeBtn = modal.querySelector('.close-carousel');
        if (closeBtn) closeBtn.focus();
    }
    updateCarousel();
}

function closeCarousel() {
    var modal = document.getElementById('carouselModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function updateCarousel() {
    var data = carouselData[currentCarousel];
    var lang = document.documentElement.lang || 'en';
    var isRTL = lang === 'ar';
    var slides = getCurrentSlides();

    setText('carouselTitle', isRTL && data.titleAr ? data.titleAr : data.title);

    var container = document.getElementById('carouselSlides');
    var counter = document.getElementById('carouselCounter');
    if (!container) return;

    container.innerHTML = '';

    if (slides.length === 0) {
        var emptyMsg = isRTL ? 'لا توجد شرائح بعد' : 'No slides yet';
        container.innerHTML = '<div style="padding:40px;text-align:center;color:#888;">' + emptyMsg + '</div>';
        currentSlideIndex = 0;
        if (counter) counter.textContent = '0 / 0';
        updateIndicators(0);
        return;
    }

    // Build all slides
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        var el = document.createElement('div');
        el.className = 'carousel-slide';
        el.style.display = (i === currentSlideIndex) ? 'block' : 'none';

        var fallbackText = isRTL ? 'الصورة غير متوفرة' : 'Image not available';
        var imgHtml = '';
        if (slide.image) {
            imgHtml = '<div style="width:100%;max-height:300px;overflow:hidden;border-radius:8px;margin-bottom:16px;background:var(--bg);">' +
                '<img src="' + slide.image + '" alt="' + slide.title + '" loading="lazy" ' +
                'style="width:100%;height:auto;max-height:300px;object-fit:cover;display:block;" ' +
                'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
                '<div style="display:none;width:100%;height:200px;align-items:center;justify-content:center;color:var(--text-light);font-size:14px;">' +
                '<i class="fas fa-image" style="margin-inline-end:8px;" aria-hidden="true"></i>' + fallbackText +
                '</div></div>';
        }

        el.innerHTML = imgHtml +
            '<h3 style="font-size:20px;font-weight:700;margin-bottom:12px;color:var(--primary);line-height:1.4;">' + slide.title + '</h3>' +
            '<p style="font-size:15px;line-height:1.7;color:var(--text);">' + slide.description + '</p>';
        container.appendChild(el);
    }

    currentSlideIndex = Math.min(currentSlideIndex, slides.length - 1);
    if (counter) counter.textContent = (currentSlideIndex + 1) + ' / ' + slides.length;
    updateIndicators(slides.length);
}

function showSlide(index) {
    var slides = getCurrentSlides();
    if (slides.length === 0) return;
    var container = document.getElementById('carouselSlides');
    if (!container) return;
    var slideEls = container.children;
    for (var i = 0; i < slideEls.length; i++) {
        slideEls[i].style.display = 'none';
    }
    if (slideEls[index]) {
        slideEls[index].style.display = 'block';
    }
    currentSlideIndex = index;
    var counter = document.getElementById('carouselCounter');
    if (counter) counter.textContent = (currentSlideIndex + 1) + ' / ' + slides.length;
    updateIndicators(slides.length);
}

function updateIndicators(totalSlides) {
    var container = document.getElementById('carouselIndicators');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < totalSlides; i++) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Slide ' + (i + 1));
        btn.style.cssText = 'width:10px;height:10px;border-radius:50%;border:none;padding:0;cursor:pointer;transition:background 0.3s;margin:0 5px;background:' + (i === currentSlideIndex ? 'var(--accent)' : 'var(--border)') + ';';
        btn.onclick = (function(idx) {
            return function() { showSlide(idx); };
        })(i);
        container.appendChild(btn);
    }
}

function carouselNext() {
    var slides = getCurrentSlides();
    if (slides.length === 0) return;
    showSlide((currentSlideIndex + 1) % slides.length);
}

function carouselPrev() {
    var slides = getCurrentSlides();
    if (slides.length === 0) return;
    showSlide((currentSlideIndex - 1 + slides.length) % slides.length);
}

// ==========================================
// CAROUSEL ARROWS — FIXED (no RTL flip logic)
// ==========================================
function onPrevArrow() {
    carouselPrev();
}
function onNextArrow() {
    carouselNext();
}

// ==========================================
// CAROUSEL KEYBOARD — FIXED (single definition)
// ==========================================
function initCarouselKeyboard() {
    document.addEventListener('keydown', function(e) {
        var modal = document.getElementById('carouselModal');
        if (!modal || !modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            closeCarousel();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            carouselPrev();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            carouselNext();
        }
    });
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && navMenu) {
        const toggleMenu = () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        };

        navToggle.addEventListener('click', toggleMenu);

        // Close menu on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.focus();
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const offset = mainNav ? mainNav.offsetHeight + 20 : 84;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            if (navToggle) {
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id], header[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + (mainNav ? mainNav.offsetHeight + 100 : 164);
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });

        if (mainNav) {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        }
    });
}

// ==========================================
// SCROLL PROGRESS
// ==========================================
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    });
}

// ==========================================
// BACK TO TOP
// ==========================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// PROJECTS TOGGLE
// ==========================================
function toggleProjects() {
    const hidden = document.querySelectorAll('.hidden-project');
    const btn = document.getElementById('btn-view-all');
    const lang = document.documentElement.lang || 'en';
    const isShowing = btn && btn.classList.contains('active');

    hidden.forEach(p => {
        if (isShowing) {
            p.classList.remove('visible');
            setTimeout(() => { p.style.display = 'none'; }, 500);
        } else {
            p.style.display = 'block';
            requestAnimationFrame(() => p.classList.add('visible'));
        }
    });

    if (btn) {
        btn.classList.toggle('active');
        const span = btn.querySelector('span');
        if (span) {
            span.textContent = isShowing
                ? (lang === 'ar' ? 'عرض كل المشاريع' : 'View All Projects')
                : (lang === 'ar' ? 'إخفاء المشاريع' : 'Hide Projects');
        }
    }
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Language
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        setLang(savedLang);
    }

    // Hide loading screen
    hideLoadingScreen();

    // Init effects
    initParticles();
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initScrollReveal();
    initCarouselKeyboard();

    // Tilt effect on desktop
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        initTiltEffect();
    }
});