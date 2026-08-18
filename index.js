// Dynamic base path for images - handles both local and GitHub Pages
const basePath = window.location.pathname.includes('/Alan-Khalaf-cv/') 
    ? '/Alan-Khalaf-cv/images/' 
    : './images/';

const translations = {
    en: {
        name: "ALAN ABDULAZIZ KHALAF",
        location: "Al Hassakah - Tel Hajer",
        eduTitle: "Education",
        degree1: "Bachelor of English Literature",
        school1: "Al Furat University",
        degree2: "Educational Qualification Diploma",
        school2: "Syrian Virtual University",
        techSkillTitle: "Technical Skills",
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
        profileText: "Front-end developer specialized in building modern, responsive websites and web applications using React.js, TypeScript, and Tailwind CSS, alongside extensive experience spanning over 6 years in humanitarian work inside refugee camps with international organizations such as Blumont and UNHCR. I combine advanced technical skills with field experience in data management, distribution, and protection, enabling me to deliver innovative digital solutions for the humanitarian sector. Passionate about continuous learning and quick to adopt new technologies.",
        projectsTitle: "Projects",
        proj1: "Personal Portfolio Website",
        proj2: "E-Commerce Store",
        proj3: "Hospital Website",
        proj4: "Real Estate Company",
        proj5: "Tourism Platform",
        proj6: "Restaurant Website",
        proj7: "Interactive React Web App (FlowPilot AI)",
        certTitle: "Certificates & Courses",
        cert1Name: "Front-End Development Certificate",
        cert1Provider: "Hsoub Academy | Professional certificate in web design and development",
        workTitle: "Work Experience",
        job0Company: "Freelance",
        job0Date: "2026 - Present",
        job0Role: "Freelance Front-End Developer",
        job0d1: "Developing modern, responsive websites and web applications using React.js, JavaScript, TypeScript, and Tailwind CSS with a focus on performance and user experience.",
        job0d2: "Designing and implementing professional user interfaces for diverse projects, including an e-commerce store and a personal portfolio website.",
        job0d3: "Using modern tools such as Vite, Webpack, GSAP, and Three.js to create dynamic, high-quality visual experiences.",
        job1Company: "Blumont - Al Hol Camp",
        job1Role: "Distribution Assistant",
        job1d1: "Managed and verified beneficiary distribution lists to prevent duplication and ensure fair assistance.",
        job1d2: "Monitored on-site distribution activities to maintain order, transparency, and adherence to SOPs.",
        job1d3: "Prioritised vulnerable cases according to protection criteria.",
        job1d4: "Handled complaints through established feedback and referral mechanisms.",
        job1d5: "Coordinated with logistics and protection teams to address operational gaps.",
        job2Company: "Blumont - Al Hassaka / Collective Centers",
        job2Role: "Daily Distribution Assistant",
        job2d1: "Participated in aid distribution in collective centers.",
        job2d2: "Monitored SWM and desludging activities.",
        job2d3: "Tracked IDP movements (arrivals/departures) and over facility maintenance.",
        job3Company: "Blumont - Areesha Camp",
        job3Role: "Protection Assistant",
        job3d1: "Identified and referred vulnerable individuals in coordination with protection teams.",
        job3d2: "Applied Age, Gender, and Diversity (AGD) approach in all field activities.",
        job3d3: "Facilitated awareness sessions on available services and complaint mechanisms.",
        job3d4: "Supported case follow-up with service providers to ensure timely assistance.",
        job3d5: "Assisted in monitoring protection-related activities and reporting field observations.",
        job4Company: "UNHCR Facilitator - Al Hol Camp",
        job4Role: "Registration / Data Entry Assistant",
        job4d1: "Conducted identity verification and household data collection for newly displaced families.",
        job4d2: "Entered and updated beneficiary data in the official database with high accuracy.",
        job4d3: "Performed re-verification exercises to reflect changes in family composition and location.",
        job4d4: "Cross-checked records to prevent duplication and maintain data integrity.",
        job5Company: "Syria - Al Hassakah",
        job5Role: "English Teacher",
        job5d1: "Taught English language to students at various grade levels with a focus on grammar, reading, writing, listening, and speaking skills.",
        job5d2: "Prepared lesson plans, tests, and educational activities, and evaluated student performance while tracking their academic progress.",
        skillTitle: "Skills",
        skill1: "Protection during distribution",
        skill2: "Computer skills in programming and web design",
        skill3: "Website design and development",
        courseTitle: "Courses",
        course1: "Web design course at Hsoub Academy"
    },
    ar: {
        name: "الان عبد العزيز خلف",
        location: "الحسكة - تل حجر",
        eduTitle: "التعليم",
        degree1: "بكالوريوس في الأدب الإنجليزي",
        school1: "جامعة الفرات",
        degree2: "دبلوم تأهيل التربوي",
        school2: "الجامعة الافتراضية السورية",
        techSkillTitle: "المهارات التقنية",
        expTitle: "الخبرات",
        exp1: "الاشراف ومراقبة عمليات التوزيع",
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
        profileText: "مطور واجهات أمامية متخصص في بناء مواقع وتطبيقات ويب حديثة ومتجاوبة باستخدام React.js وTypeScript وTailwind CSS، إلى جانب خبرة واسعة تمتد لأكثر من 6 سنوات في العمل الإنساني داخل مخيمات اللاجئين مع منظمات دولية مثل Blumont وUNHCR. أجمع بين المهارات التقنية المتقدمة والخبرة الميدانية في إدارة البيانات والتوزيع والحماية، مما يمكنني من تقديم حلول رقمية مبتكرة للقطاع الإنساني. أمتلك شغفاً بالتعلم المستمر وسرعة في استيعاب التقنيات الجديدة.",
        projectsTitle: "المشاريع",
        proj1: "موقع أعمال شخصي (Portfolio)",
        proj2: "متجر إلكتروني",
        proj3: "موقع مشفى",
        proj4: "شركة عقارية",
        proj5: "منصة سياحية",
        proj6: "موقع مطعم",
        proj7: "تطبيق ويب تفاعلي React (FlowPilot AI)",
        certTitle: "الشهادات والدورات",
        cert1Name: "شهادة تطوير الواجهات الأمامية (Front-End Development)",
        cert1Provider: "أكاديمية حسوب (Hsoub Academy) | شهادة احترافية في تصميم وتطوير مواقع الويب",
        workTitle: "الخبرة العملية",
        job0Company: "مستقل (Freelance)",
        job0Date: "2026 - الآن",
        job0Role: "مطور واجهات أمامية مستقل",
        job0d1: "تطوير مواقع وتطبيقات ويب حديثة ومتجاوبة باستخدام React.js وJavaScript وTypeScript وTailwind CSS مع التركيز على الأداء وتجربة المستخدم.",
        job0d2: "تصميم وتنفيذ واجهات مستخدم احترافية لمشاريع متنوعة تشمل متجراً إلكترونياً وموقع أعمال شخصي (Portfolio).",
        job0d3: "استخدام أدوات حديثة مثل Vite وWebpack وGSAP وThree.js لإنشاء تجارب بصرية ديناميكية وعالية الجودة.",
        job1Company: "بلومونت - مخيم الهول",
        job1Role: "مساعد توزيع",
        job1d1: "إدارة وتحقق من قوائم توزيع المستفيدين لمنع التكرار وضمان المساعدة العادلة.",
        job1d2: "مراقبة أنشطة التوزيع في الموقع للحفاظ على النظام والشفافية والالتزام بالإجراءات التشغيلية القياسية.",
        job1d3: "تحديد أولويات الحالات الضعيفة وفقاً لمعايير الحماية.",
        job1d4: "معالجة الشكاوى من خلال آليات التغذية الراجعة والإحالة المُنشأة.",
        job1d5: "التنسيق مع فرق اللوجستيات والحماية لمعالجة الفجوات التشغيلية.",
        job2Company: "بلومونت - الحسكة / المراكز الجماعية",
        job2Role: "مساعد توزيع يومي",
        job2d1: "المشاركة في توزيع المساعدات المقدمة من منظمة بلومنت في المراكز الجماعية.",
        job2d2: "مراقبة أنشطة إدارة النفايات الصلبة.",
        job2d3: "تتبع حركات النازحين (الوافدين/المغادرين) وصيانة المرافق.",
        job3Company: "بلومونت - مخيم عريشة",
        job3Role: "مساعد حماية",
        job3d1: "تحديد الأفراد الاكثر ضعفاً وإحالتهم بالتنسيق مع فرق الحماية.",
        job3d2: "تطبيق نهج العمر والنوع والتنوع  في جميع الأنشطة الميدانية.",
        job3d3: "تسهيل جلسات التوعية حول الخدمات المتاحة وآليات الشكاوى.",
        job3d4: "دعم متابعة الحالات مع مقدمي الخدمات لضمان المساعدة في الوقت المناسب.",
        job3d5: "المساعدة في مراقبة الأنشطة المتعلقة بالحماية وإعداد تقارير الملاحظات الميدانية.",
        job4Company: "ميسر للمفوضية السامية لشؤون اللاجئين - مخيم الهول",
        job4Role: "مساعد تسجيل / إدخال البيانات",
        job4d1: "إجراء التحقق من الهوية وجمع بيانات الأسر النازحة حديثاً.",
        job4d2: "إدخال وتحديث بيانات المستفيدين في قاعدة البيانات الرسمية بدقة عالية.",
        job4d3: "إجراء انشطة إعادة التحقق لتعكس التغييرات في تكوين الأسرة والموقع.",
        job4d4: "التحقق من السجلات لمنع التكرار والحفاظ على سلامة البيانات.",
        job5Company: "سوريا - الحسكة",
        job5Role: "مدرس لغة إنجليزية",
        job5d1: "تدريس اللغة الإنجليزية لطلاب المراحل المختلفة مع التركيز على قواعد اللغة وتنمية مهارات القراءة والكتابة والاستماع والمحادثة.",
        job5d2: "إعداد الخطط الدراسية والاختبارات والأنشطة التعليمية وتقييم مستوى الطلاب ومتابعة تقدمهم الأكاديمي.",
        skillTitle: "المهارات",
        skill1: "الحماية أثناء التوزيع",
        skill2: "مهارات الحاسوب في البرمجة وتصميم مواقع الويب",
        skill3: "تصميم وتطوير مواقع الويب",
        courseTitle: "الدورات",
        course1: "دورة تصميم مواقع الويب في أكاديمية حاسوب"
    }
};

function setLang(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');

    document.getElementById('name').textContent = t.name;
    document.getElementById('location').textContent = t.location;
    document.getElementById('edu-title').textContent = t.eduTitle;
    document.getElementById('degree1').textContent = t.degree1;
    document.getElementById('school1').textContent = t.school1;
    document.getElementById('degree2').textContent = t.degree2;
    document.getElementById('school2').textContent = t.school2;
    document.getElementById('tech-skill-title').textContent = t.techSkillTitle;
    document.getElementById('exp-title').textContent = t.expTitle;
    document.getElementById('exp1').textContent = t.exp1;
    document.getElementById('exp2').textContent = t.exp2;
    document.getElementById('exp3').textContent = t.exp3;
    document.getElementById('exp4').textContent = t.exp4;
    document.getElementById('exp5').textContent = t.exp5;
    document.getElementById('exp6').textContent = t.exp6;
    document.getElementById('lang-title').textContent = t.langTitle;
    document.getElementById('lang1').textContent = t.lang1;
    document.getElementById('lang2').textContent = t.lang2;
    document.getElementById('lang3').textContent = t.lang3;
    document.getElementById('profile-title').textContent = t.profileTitle;
    document.getElementById('profile-text').textContent = t.profileText;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('proj1').textContent = t.proj1;
    document.getElementById('proj2').textContent = t.proj2;
    document.getElementById('proj3').textContent = t.proj3;
    document.getElementById('proj4').textContent = t.proj4;
    document.getElementById('proj5').textContent = t.proj5;
    document.getElementById('proj6').textContent = t.proj6;
    document.getElementById('proj7').textContent = t.proj7;
    document.getElementById('cert-title').textContent = t.certTitle;
    document.getElementById('cert1-name').textContent = t.cert1Name;
    document.getElementById('cert1-provider').textContent = t.cert1Provider;
    document.getElementById('work-title').textContent = t.workTitle;
    document.getElementById('job0-company').textContent = t.job0Company;
    document.getElementById('job0-date').textContent = t.job0Date;
    document.getElementById('job0-role').textContent = t.job0Role;
    document.getElementById('job0-d1').textContent = t.job0d1;
    document.getElementById('job0-d2').textContent = t.job0d2;
    document.getElementById('job0-d3').textContent = t.job0d3;
    document.getElementById('job1-company').textContent = t.job1Company;
    document.getElementById('job1-role').textContent = t.job1Role;
    document.getElementById('job1-d1').textContent = t.job1d1;
    document.getElementById('job1-d2').textContent = t.job1d2;
    document.getElementById('job1-d3').textContent = t.job1d3;
    document.getElementById('job1-d4').textContent = t.job1d4;
    document.getElementById('job1-d5').textContent = t.job1d5;
    document.getElementById('job2-company').textContent = t.job2Company;
    document.getElementById('job2-role').textContent = t.job2Role;
    document.getElementById('job2-d1').textContent = t.job2d1;
    document.getElementById('job2-d2').textContent = t.job2d2;
    document.getElementById('job2-d3').textContent = t.job2d3;
    document.getElementById('job3-company').textContent = t.job3Company;
    document.getElementById('job3-role').textContent = t.job3Role;
    document.getElementById('job3-d1').textContent = t.job3d1;
    document.getElementById('job3-d2').textContent = t.job3d2;
    document.getElementById('job3-d3').textContent = t.job3d3;
    document.getElementById('job3-d4').textContent = t.job3d4;
    document.getElementById('job3-d5').textContent = t.job3d5;
    document.getElementById('job4-company').textContent = t.job4Company;
    document.getElementById('job4-role').textContent = t.job4Role;
    document.getElementById('job4-d1').textContent = t.job4d1;
    document.getElementById('job4-d2').textContent = t.job4d2;
    document.getElementById('job4-d3').textContent = t.job4d3;
    document.getElementById('job4-d4').textContent = t.job4d4;
    document.getElementById('job5-company').textContent = t.job5Company;
    document.getElementById('job5-role').textContent = t.job5Role;
    document.getElementById('job5-d1').textContent = t.job5d1;
    document.getElementById('job5-d2').textContent = t.job5d2;
    document.getElementById('skill-title').textContent = t.skillTitle;
    document.getElementById('skill1').textContent = t.skill1;
    document.getElementById('skill2').textContent = t.skill2;
    document.getElementById('skill3').textContent = t.skill3;
    document.getElementById('course-title').textContent = t.courseTitle;
    document.getElementById('course1').textContent = t.course1;

    document.getElementById('click-hint-exp').textContent = lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click to view details';
    document.getElementById('click-hint-workexp').textContent = lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click to view details';
    document.getElementById('click-hint-skills').textContent = lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click to view details';
    document.getElementById('click-hint-courses').textContent = lang === 'ar' ? 'انقر لعرض التفاصيل' : 'Click to view details';
    document.getElementById('carouselNote').textContent = lang === 'ar' ? 'استخدم الأسهم للتنقل بين الشرائح' : 'Use arrows to navigate slides';

    const modal = document.getElementById('carouselModal');
    if (modal && modal.classList.contains('active')) {
        currentSlideIndex = 0;
        updateCarousel();
    }
}

// ==========================================
// CAROUSEL DATA - FULL ARABIC SLIDES
// ==========================================
const carouselData = {
    expertise: {
        title: 'Expertise',
        titleAr: 'الخبرات',
        slides: {
            en: [
                {
                    title: 'Distribution Monitoring & Quality Assurance',
                    description: 'Expert in monitoring aid distribution processes to ensure fairness, transparency, and compliance with humanitarian standards and SOPs.',
                    image: './images/skill1.jpg'
                },
                {
                    title: 'Registration & Data Management Systems',
                    description: 'Proficient in beneficiary registration, database management, and maintaining data integrity across complex humanitarian operations.',
                    image: './images/regis.png'
                },
                {
                    title: 'Protection Referral Mechanisms',
                    description: 'Skilled in identifying vulnerable cases and implementing protection-sensitive referral pathways in accordance with humanitarian principles.',
                    image: './images/prot.png'
                },
                {
                    title: 'Case Documentation & Reporting',
                    description: 'Experienced in comprehensive case documentation, field reporting, and analytical reporting for donor and coordination requirements.',
                    image: './images/distre.png'
                },
                {
                    title: 'Coordination & Stakeholder Engagement',
                    description: 'Strong ability to coordinate with multiple agencies, local authorities, and community representatives to ensure effective service delivery.',
                    image: './images/coor.png'
                }
            ],
            ar: [
                {
                    title: 'مراقبة التوزيع وضمان الجودة',
                    description: 'خبير في مراقبة عمليات توزيع المساعدات لضمان العدالة والشفافية والامتثال للمعايير الإنسانية والإجراءات التشغيلية القياسية.',
                    image: './images/skill1.jpg'
                },
                {
                    title: 'أنظمة التسجيل وإدارة البيانات',
                    description: 'متمكن في تسجيل المستفيدين وإدارة قواعد البيانات والحفاظ على سلامة البيانات عبر العمليات الإنسانية المعقدة.',
                    image: './images/regis.png'
                },
                {
                    title: 'آليات الإحالة للحماية',
                    description: 'ماهر في تحديد الحالات الضعيفة وتطبيق مسارات الإحالة الحساسة للحماية وفقاً لمبادئ العمل الإنساني.',
                    image: './images/prot.png'
                },
                {
                    title: 'توثيق الحالات والتقارير',
                    description: 'ذو خبرة في توثيق الحالات الشاملة وتقارير الميدان والتقارير التحليلية لمتطلبات الجهات المانحة والتنسيق.',
                    image: './images/distre.png'
                },
                {
                    title: 'التنسيق والتواصل مع الأطراف المعنية',
                    description: 'قدرة قوية على التنسيق مع وكالات متعددة والسلطات المحلية وممثلي المجتمع لضمان تقديم الخدمات بفعالية.',
                    image: './images/coor.png'
                }
            ]
        }
    },
    workexp: {
        title: 'Work Experience',
        titleAr: 'الخبرة العملية',
        slides: {
            en: [
                {
                    title: 'Emergency humanitarian response and on-ground community support',
                    description: 'Supervised the ground distribution of humanitarian relief packages and essential supplies in remote camp settings',
                    image: './images/Al-Hol-Camp-1.jpg'
                },
                {
                    title: 'Emergency bread assistance as a core component of daily food security responses',
                    description: 'Managed on-ground distribution points and streamlined delivery cycles to guarantee that essential food resources reach vulnerable children safely, efficiently, and with dignity',
                    image: './images/Al-Hol-Camp-3.jpg'
                },
                {
                    title: 'Providing essential health, hygiene packages, and winterization aid to displaced families',
                    description: 'Planned and executed the distribution of hygiene kits and Non-Food Items (NFIs) within emergency WASH and public health intervention programs',
                    image: './images/hdist.png'
                },
                {
                    title: 'Conducting practical fire safety training and fire extinguisher distribution for camp residents',
                    description: 'Managed safety enhancement and Disaster Risk Reduction (DRR) initiatives, including the allocation of fire mitigation assets and establishing community emergency response teams',
                    image: './images/Al-Hol.jpg'
                },
                {
                    title: 'Rehabilitating water infrastructure and installing supply tanks in collective shelters and conflict-affected areas',
                    description: 'Managed the restoration of sanitation facilities and communal water points to mitigate waterborne disease risks and improve basic living standards for vulnerable communities',
                    image: './images/6.jpg'
                },
                {
                    title: 'Maintenance and Rehabilitation of Shelter Centers for Displaced People',
                    description: 'Supporting the maintenance and rehabilitation of shelter centers to improve living conditions for displaced people through cleaning activities, sanitation system repairs, infrastructure maintenance, and essential service improvements, ensuring a safe, healthy, and dignified environment for beneficiaries',
                    image: './images/9.jpg'
                },
                {
                    title: 'Provision of Safe Water for Displaced People',
                    description: 'Supporting the delivery and distribution of safe water to displaced families through water trucking services and water supply points, ensuring reliable access to clean water and improving health and living conditions in shelters and host communities',
                    image: './images/33.png'
                },
                {
                    title: 'Distribution of Clothing for Displaced Children',
                    description: 'Supporting the distribution of clothing to displaced children to meet their basic needs, provide protection from weather conditions, and promote their dignity, well-being, and quality of life',
                    image: './images/22.png'
                }
            ],
            ar: [
                {
                    title: 'الاستجابة الإنسانية الطارئة ودعم الفئات الهشة ميدانياً',
                    description: 'الإشراف على عمليات توزيع المساعدات الإنسانية والطرود الإغاثية في البيئات النائية ومخيمات اللجوء',
                    image: './images/Al-Hol-Camp-1.jpg'
                },
                {
                    title: 'توزيع مادة الخبز كجزء من الاستجابة الطارئة للأمن الغذائي اليومي',
                    description: 'إدارة نقاط التوزيع الميدانية وتطبيق معايير الكفاءة والنظافة والسلامة لضمان وصول المواد الغذائية الحيوية للأطفال والنساء بشكل آمن وكريم',
                    image: './images/Al-Hol-Camp-3.jpg'
                },
                 {
                    title: 'تأمين مستلزمات النظافة الأساسية والمواد الإغاثية الشتوية للعائلات النازحة',
                    description: 'تخطيط وتنفيذ حملات توزيع سلال النظافة (Hygiene Kits) والمواد غير الغذائية (NFIs) كجزء من برامج الإصحاح البيئي والاستجابة الطارئة',
                    image: './images/hdist.png'
                },
                {
                    title: 'تدريب سكان المخيمات على مبادئ الدفاع المدني وإخماد الحرائق وتوزيع طفايات الحريق',
                    description: 'الإشراف على مشاريع تعزيز السلامة العامة وتوزيع طفايات الحريق وتشكيل لجان طوارئ مجتمعية داخل المخيمات للحد من الخسائر البشرية والمادية',
                    image: './images/Al-Hol.jpg'
                },
                {
                    title: 'تأهيل البنية التحتية للمياه وتركيب خزانات الإمداد في مراكز الإيواء والمناطق المتضررة من النزاع',
                    description: 'الإشراف على مشاريع تأهيل شبكات المياه وتركيب خزانات التوزيع لضمان تلبية الاحتياجات اليومية من المياه النظيفة للنازحين في مراكز الإيواء والمخيمات، مما يقلل من مخاطر الأمراض المنقولة بالمياه ويحسن الظروف المعيشية الأساسية للمجتمعات الهشة',
                    image: './images/6.jpg'
                },
                {
                    title: 'صيانة وإصلاح البنية التحتية في مراكز الإيواء',
                    description: 'المشاركة في أعمال صيانة شبكات الصرف الصحي وتنظيف المرافق وإصلاح الأعطال الخدمية داخل مراكز الإيواء، بما يساهم في تحسين الظروف الصحية والبيئية للنازحين وضمان استمرارية الخدمات الأساسية في بيئات الإيواء المكتظة والمتحركة',
                    image: './images/9.jpg'
                },
                {
                    title: 'توفير المياه النظيفة للنازحين',
                    description: 'المشاركة في عمليات توزيع المياه النظيفة للنازحين من خلال خدمات نقل المياه ونقاط توزيع المياه، مما يضمن وصولًا موثوقًا للمياه النظيفة ويحسن الصحة والظروف المعيشية في مراكز الإيواء والمجتمعات المضيفة',
                    image: './images/33.png'
                },
                {
                    title: 'توزيع الملابس للأطفال النازحين',
                    description: 'الإشراف على توزيع الملابس للأطفال النازحين لضمان تلبية احتياجاتهم الأساسية وتقديم الحماية من ظروف الطقس وتعزيز كرامتهم ورفاهيتهم وجودة حياتهم',
                    image: './images/22.png'
                }
            ]
        }
    },
    skills: {
        title: 'Skills',
        titleAr: 'المهارات',
        slides: {
            en: [
                {
                    title: 'Protection During Distribution',
                    description: 'Implementing protection-sensitive approaches during aid distribution, ensuring dignity, safety, and equitable access for all beneficiaries including vulnerable groups.',
                    image: './images/dist1.png'
                },
                {
                    title: 'Programming & Web Development',
                    description: 'Proficient in computer programming, web design, and development using modern technologies and frameworks to create responsive and functional websites.',
                    image: './images/prog.jpg'
                },
                {
                    title: 'Website Design & Development',
                    description: 'Experienced in designing and developing professional websites with focus on user experience, accessibility, and modern design principles.',
                    image: './images/web.png'
                }
            ],
            ar: [
                {
                    title: 'الحماية أثناء التوزيع',
                    description: 'تطبيق مناهج حساسة للحماية أثناء توزيع المساعدات، ضمان الكرامة والسلامة والوصول العادل لجميع المستفيدين بما في ذلك الفئات الضعيفة.',
                    image: './images/dist1.png'
                },
                {
                    title: 'البرمجة وتطوير الويب',
                    description: 'متمكن في البرمجة الحاسوبية وتصميم وتطوير مواقع الويب باستخدام التقنيات والأطر الحديثة لإنشاء مواقع متجاوبة ووظيفية.',
                    image: './images/prog.jpg'
                },
                {
                    title: 'تصميم وتطوير مواقع الويب',
                    description: 'ذو خبرة في تصميم وتطوير مواقع الويب الاحترافية مع التركيز على تجربة المستخدم وسهولة الوصول ومبادئ التصميم الحديثة.',
                    image: './images/web.png'
                }
            ]
        }
    },
    courses: {
        title: 'Courses',
        titleAr: 'الدورات',
        slides: {
            en: [
                {
                    title: 'Web Design Course - Hsoub Academy',
                    description: 'Completed comprehensive web design training at Hsoub Academy covering HTML, CSS, JavaScript, responsive design, and modern web development practices.',
                    image: './images/hsoub.png'
                }

            ],
            ar: [
                {
                    title: 'دورة تصميم مواقع الويب - أكاديمية حاسوب',
                    description: 'أكملت تدريباً شاملاً في تصميم مواقع الويب في أكاديمية حاسوب يغطي HTML وCSS وJavaScript والتصميم المتجاوب وممارسات تطوير الويب الحديثة.',
                    image: './images/hsoub.png'
                }
            ]
        }
    }
};

let currentCarousel = null;
let currentSlideIndex = 0;

function getCurrentSlides() {
    const lang = document.documentElement.lang || 'en';
    const data = carouselData[currentCarousel];
    return data?.slides?.[lang] || [];
}

function setCurrentSlides(slides) {
    const lang = document.documentElement.lang || 'en';
    carouselData[currentCarousel].slides[lang] = slides;
}

function openCarousel(type) {
    currentCarousel = type;
    currentSlideIndex = 0;
    document.getElementById('carouselModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCarousel();
}

function closeCarousel() {
    document.getElementById('carouselModal').classList.remove('active');
    document.body.style.overflow = '';
}

function updateCarousel() {
    const data = carouselData[currentCarousel];
    const lang = document.documentElement.lang || 'en';
    const slides = getCurrentSlides();

    document.getElementById('carouselTitle').textContent = lang === 'ar' ? data.titleAr : data.title;

    const slidesContainer = document.getElementById('carouselSlides');
    const counter = document.getElementById('carouselCounter');

    // Clear and reset container
    slidesContainer.innerHTML = '';
    slidesContainer.style.display = 'flex';
    slidesContainer.style.flexDirection = 'row';
    slidesContainer.style.width = '100%';
    slidesContainer.style.transition = 'transform 0.4s ease-in-out';

    if (slides.length === 0) {
        slidesContainer.innerHTML = `
            <div class="carousel-slide empty" style="min-width:100%; flex:0 0 100%; display:flex; align-items:center; justify-content:center; padding:40px;">
                <div style="text-align:center; color:#888;">
                    <i class="fas fa-image" style="font-size:48px; margin-bottom:16px; display:block;"></i>
                    <span style="font-size:16px;">${lang === 'ar' ? 'لا توجد شرائح بعد' : 'No slides yet'}</span>
                </div>
            </div>
        `;
        currentSlideIndex = 0;
        counter.textContent = lang === 'ar' ? '0 / 0' : '0 / 0';
        updateIndicators(0);
        return;
    }

    // Build all slides
    slides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = 'carousel-slide';
        slideEl.style.cssText = 'min-width:100%; flex:0 0 100%; box-sizing:border-box; padding:20px;';

        let imageHtml = '';
        if (slide.image) {
            // Replace relative path with dynamic basePath
            const imageSrc = slide.image.replace('./images/', basePath);
            imageHtml = `
                <div style="width:100%; max-height:300px; overflow:hidden; border-radius:8px; margin-bottom:16px; background:#f5f5f5;">
                    <img src="${imageSrc}" alt="${slide.title}" 
                         style="width:100%; height:auto; max-height:300px; object-fit:cover; display:block;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div style="display:none; width:100%; height:200px; align-items:center; justify-content:center; color:#999; font-size:14px;">
                        <i class="fas fa-image" style="margin-${lang === 'ar' ? 'left' : 'right'}:8px;"></i> 
                        ${lang === 'ar' ? 'الصورة غير متوفرة' : 'Image not available'}
                    </div>
                </div>
            `;
        }

        slideEl.innerHTML = `
            ${imageHtml}
            <h3 style="font-size:20px; font-weight:700; margin-bottom:12px; color:#333; line-height:1.4;">${slide.title}</h3>
            <p style="font-size:15px; line-height:1.7; color:#555;">${slide.description}</p>
        `;
        slidesContainer.appendChild(slideEl);
    });

    currentSlideIndex = Math.min(currentSlideIndex, slides.length - 1);
    counter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

    // Apply transform
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    updateIndicators(slides.length);
}

function updateIndicators(totalSlides) {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    indicatorsContainer.innerHTML = '';

    if (totalSlides > 0) {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${i === currentSlideIndex ? 'active' : ''}`;
            indicator.style.cssText = `width:10px; height:10px; border-radius:50%; background:${i === currentSlideIndex ? '#007bff' : '#ccc'}; margin:0 5px; cursor:pointer; transition:background 0.3s;`;
            indicator.onclick = () => {
                currentSlideIndex = i;
                updateCarousel();
            };
            indicatorsContainer.appendChild(indicator);
        }
    }
}

function nextSlide() {
    const slides = getCurrentSlides();
    if (slides.length > 0) {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateCarousel();
    }
}

function prevSlide() {
    const slides = getCurrentSlides();
    if (slides.length > 0) {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }
}


// ==========================================
// SIMPLE ENHANCEMENTS (Reliable)
// ==========================================

// Scroll Progress Bar + Back to Top visibility
window.addEventListener('scroll', function() {
    var scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Console greeting
console.log('%c Alan Abdulaziz Khalaf ', 'background: linear-gradient(135deg, #1a365d, #c53030); color: white; font-size: 24px; padding: 10px 20px; border-radius: 10px;');
console.log('%c Professional CV Portfolio ', 'color: #c53030; font-size: 14px;');

document.addEventListener('DOMContentLoaded', () => {
    setLang('en');
    document.getElementById('profile-img').src = "Alan.jpeg";
    localStorage.removeItem('carouselData');

    // Close modal when clicking outside
    document.getElementById('carouselModal').onclick = (e) => {
        if (e.target.id === 'carouselModal') {
            closeCarousel();
        }
    };

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('carouselModal');
        if (modal && modal.classList.contains('active')) {
            const isRtl = document.documentElement.dir === 'rtl';
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                isRtl ? prevSlide() : nextSlide();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                isRtl ? nextSlide() : prevSlide();
            }
            if (e.key === 'Escape') {
                closeCarousel();
            }
        }
    });
});
