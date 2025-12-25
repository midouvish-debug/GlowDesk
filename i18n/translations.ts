
export type Locale = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      demo: "Demo",
      pricing: "Pricing",
      howItWorks: "How it Works",
      about: "About",
      cta: "Request a Demo"
    },
    hero: {
      badge: "Next-Gen AI for Service Businesses",
      headline: "Never Miss a ",
      headlineItalic: "Client",
      headlineEnd: " Again",
      subheadline: "An intelligent AI assistant by Orienta that answers calls, WhatsApp messages, and manages bookings automatically for beauty, wellness, and boutique clinics.",
      primaryCTA: "Request a Demo",
      secondaryCTA: "See How It Works",
      check1: "No long-term commitment",
      check2: "GDPR compliant",
      check3: "Cancel anytime",
      bookingLabel: "New Booking",
      bookingService: "Service at 2:00 PM"
    },
    problems: {
      badge: "The Challenge",
      headline: "Managing your desk shouldn't mean ",
      headlineItalic: "missing",
      headlineEnd: " growth.",
      subheadline: "Manual scheduling is the bottleneck for service-based businesses. Whether it's a salon or a wellness clinic, you shouldn't have to choose between a client and the phone.",
      items: [
        { title: "Missed Calls", desc: "You're focused on a session and the phone rings. Another lead lost to a competitor." },
        { title: "After-Hours Loss", desc: "Most clients book when you're closed. GlowDesk works while you rest." },
        { title: "Staff Distraction", desc: "Your professionals should provide services, not act as full-time receptionists." }
      ],
      testimonial: "\"GlowDesk changed our workflow. We no longer worry about the phone during peak hours.\"",
      author: "Maria, Studio & Wellness Owner"
    },
    solutions: {
      badge: "The Solution",
      headline: "Built for ",
      headlineAccent: "Wellness & Aesthetics",
      subheadline: "GlowDesk understands the nuances of professional services—from treatment durations to cancellation policies and client etiquette.",
      items: [
        { title: "AI Voice Receptionist", desc: "Answers calls 24/7 with a warm, natural voice that represents your brand perfectly." },
        { title: "WhatsApp Manager", desc: "Turns conversations into bookings directly within the client's favorite messaging app." },
        { title: "Universal Sync", desc: "Seamlessly integrates with Google, Outlook, and most professional scheduling platforms." },
        { title: "Smart Consultation", desc: "Answers service questions and triage leads based on your specific business rules." },
        { title: "Proactive Reminders", desc: "Dramatically reduces no-shows with automated, intelligent follow-ups." },
        { title: "Enterprise Security", desc: "Built on Orienta's secure infrastructure. We prioritize privacy and data compliance." }
      ]
    },
    howItWorks: {
      headline: "How it Works",
      subheadline: "Getting started with GlowDesk is seamless and requires zero technical skills.",
      steps: [
        { title: "Connect Your Calendar", desc: "Integrate with Google, Outlook, or your existing salon software in minutes." },
        { title: "AI Handles Requests", desc: "When customers call or message, our AI takes over immediately, providing expert assistance." },
        { title: "Relax & Serve", desc: "Watch your schedule fill up automatically while you focus on providing amazing treatments." }
      ]
    },
    about: {
      title: "About Orienta",
      whoHeadline: "Who We Are",
      whoText: "Orienta is a technology company focused on building AI-powered assistants that help service-based businesses work more efficiently, serve their clients better, and grow without adding operational complexity. We design intelligent systems that guide, assist, and automate customer interactions, while always keeping humans in control.",
      missionHeadline: "Our Mission",
      missionText: "Our mission is simple: help businesses never miss an opportunity because of limited time or availability. We believe that technology should remove friction, not create it. That’s why we build AI assistants that are easy to use, safe, and designed to integrate naturally into existing business workflows.",
      whatWeDoHeadline: "What We Do",
       whatWeDoSub: "Orienta develops AI assistants that can:",
      whatWeDoItems: [
        "Answer customer calls and messages 24/7",
        "Handle repetitive conversations automatically",
        "Guide customers to the right service",
        "Book appointments seamlessly",
        "Reduce operational overload for teams"
      ],
      whatWeDoEnd: "Our solutions are built to deliver immediate, measurable value, without requiring heavy technical setup or long-term commitments.",
      approachHeadline: "Our Approach",
      approachIntro: "At Orienta, we follow three core principles:",
      approachItems: [
        { title: "1. Orientation, Not Replacement", desc: "Our AI assistants are designed to assist and guide, not replace human expertise. They handle routine interactions so teams can focus on what truly matters." },
        { title: "2. Safety and Simplicity", desc: "We avoid unnecessary complexity and risk. Our systems are built with clear boundaries, transparent behavior, and respect for data privacy." },
        { title: "3. Real Business Impact", desc: "Every feature we build is driven by one question: does this help our customers save time, reduce costs, or increase revenue?" }
      ],
      productsHeadline: "Our Products",
      productsIntro: "Orienta develops industry-specific solutions tailored to real business needs.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk is our AI-powered receptionist for beauty and aesthetic businesses. It helps salons and institutes answer calls and messages automatically, book appointments 24/7, and improve customer experience. GlowDesk is designed specifically for beauty professionals, with workflows that match how salons actually operate.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk is our AI-powered assistant for gyms and fitness studios. It helps fitness centers handle class bookings, manage memberships, and answer routine inquiries 24/7. FitDesk is tailored to the specific needs of high-frequency fitness environments, ensuring no member request goes unanswered.",
      workWithHeadline: "Who We Work With",
      workWithItems: [
        "Beauty and aesthetic businesses",
        "Service-based small and medium enterprises",
        "Partners looking to offer AI-powered customer interaction solutions"
      ],
      visionHeadline: "Our Vision",
      visionText: "We envision a future where every service business has access to a smart, reliable digital front desk, available at all times. Our long-term goal is to make Orienta the trusted platform for AI-assisted customer interaction across multiple industries, starting with beauty and aesthetics.",
      ctaHeadline: "Get in Touch",
      ctaText: "Whether you’re a business owner, partner, or simply curious about our solutions, we’d love to hear from you. Discover how Orienta can help your business grow — starting with GlowDesk and FitDesk."
    },
    demo: {
      headline: "Experience GlowDesk",
      subheadline: "See how Orienta's AI interacts with your clients across multiple touchpoints.",
      whatsapp: "WhatsApp",
      voice: "Voice",
      calendar: "Calendar",
      waHeader: "GlowDesk Assistant",
      waSub: "Powered by Orienta • Online",
      waInput: "Type a message...",
      voiceTitle: "Voice AI Demo",
      voiceDesc: "Simulate a live incoming call to your business desk.",
      voiceCTA: "Start Call Simulation",
      voiceInbound: "Incoming...",
      voiceMute: "Mute",
      voiceEnd: "Hang Up",
      voiceInfo: "Info",
      calTitle: "Unified Dashboard",
      calSub: "Real-time sync across platforms",
      calSync: "Orienta Cloud Sync",
      calSuccess: "Booking Confirmed!",
      calSuccessSub: "Slot for {slot} has been successfully secured.",
      calAnother: "Book another slot",
      calReserved: "Occupied",
      calBookNow: "Reserve"
    },
    pricing: {
      headline: "Plans for Every Scale",
      subheadline: "Transparent pricing designed to grow with your business. Choose your GlowDesk tier.",
      mostPopular: "Recommended",
      perMo: "/mo",
      tiers: [
        { name: "Lite", price: "49", desc: "For independent professionals", cta: "Start Lite" },
        { name: "Professional", price: "99", desc: "Best for established clinics & studios", cta: "Start Pro" },
        { name: "Enterprise", price: "149", desc: "Multi-location & custom industries", cta: "Contact Orienta" }
      ]
    },
    contact: {
      headline: "Ready to Upgrade Your Desk?",
      subheadline: "Schedule a demo with the Orienta team to see GlowDesk in action for your specific industry.",
      points: ["14-day free trial", "Industry-specific setup", "Priority 1-on-1 support"],
      trusted: "Trusted by over 500 service providers",
      success: "Message Sent!",
      successSub: "An Orienta specialist will contact you shortly.",
      labels: {
        biz: "Business Name",
        name: "Contact Name",
        email: "Work Email",
        phone: "Mobile Phone",
        type: "Industry Type"
      },
      types: ["Beauty & Aesthetics", "Fitness & Yoga", "Wellness & Spa", "Specialist Clinics", "Boutique Services"],
      cta: "Get My Free Demo"
    }
  },
  fr: {
    nav: {
      benefits: "Avantages",
      demo: "Démo",
      pricing: "Tarifs",
      howItWorks: "Fonctionnement",
      about: "À Propos",
      cta: "Demander une démo"
    },
    hero: {
      badge: "IA de nouvelle génération pour les services",
      headline: "Ne manquez plus jamais un ",
      headlineItalic: "Client",
      headlineEnd: " ",
      subheadline: "Un assistant IA intelligent par Orienta qui répond aux appels, aux messages WhatsApp et gère les réservations automatiquement.",
      primaryCTA: "Demander une démo",
      secondaryCTA: "Voir comment ça marche",
      check1: "Sans engagement",
      check2: "Conforme RGPD",
      check3: "Annulation possible",
      bookingLabel: "Nouveau RDV",
      bookingService: "Service à 14h00"
    },
    problems: {
      badge: "Le Défi",
      headline: "Gérer votre accueil ne devrait pas ",
      headlineItalic: "freiner",
      headlineEnd: " votre croissance.",
      subheadline: "La gestion manuelle est le goulot d'étranglement des entreprises de services. Avec GlowDesk, ne choisissez plus entre vos mains et le téléphone.",
      items: [
        { title: "Appels manqués", desc: "Vous êtes en séance et le téléphone sonne. Un client de perdu." },
        { title: "Pertes hors horaires", desc: "GlowDesk travaille pendant que vous vous reposez." },
        { title: "Distraction du personnel", desc: "Vos experts doivent se concentrer sur leurs soins, pas sur l'accueil." }
      ],
      testimonial: "\"GlowDesk a changé notre flux de travail. Plus d'inquiétude pour le téléphone.\"",
      author: "Maria, Propriétaire de studio & bien-être"
    },
    solutions: {
      badge: "La Solution",
      headline: "Conçu pour le ",
      headlineAccent: "Bien-être & l'Esthétique",
      subheadline: "GlowDesk comprend les nuances des services professionnels—de la durée des soins aux politiques d'annulation.",
      items: [
        { title: "Réceptionniste IA Vocale", desc: "Répond 24/7 avec une voix naturelle qui représente parfaitement votre marque." },
        { title: "Gestionnaire WhatsApp", desc: "Transforme les conversations en réservations directement." },
        { title: "Synchro Universelle", desc: "S'intègre parfaitement avec Google, Outlook et les plateformes pro." },
        { title: "Consultation Intelligente", desc: "Répond aux questions sur les services et trie les prospects." },
        { title: "Rappels Proactifs", desc: "Réduit drastiquement les rendez-vous non honorés." },
        { title: "Sécurité Entreprise", desc: "Basé sur l'infrastructure sécurisée d'Orienta." }
      ]
    },
    howItWorks: {
      headline: "Fonctionnement",
      subheadline: "Démarrer avec GlowDesk est simple et ne nécessite aucune compétence technique.",
      steps: [
        { title: "Connectez votre calendrier", desc: "Intégrez Google, Outlook ou votre logiciel actuel en quelques minutes." },
        { title: "L'IA gère les demandes", desc: "Lorsqu'un client appelle ou envoie un message, notre IA prend le relais immédiatement." },
        { title: "Relaxez et servez", desc: "Regardez votre agenda se remplir automatiquement pendant que vous vous concentrez sur vos soins." }
      ]
    },
    about: {
      title: "À Propos d'Orienta",
      whoHeadline: "Qui Nous Sommes",
      whoText: "Orienta est une entreprise technologique axée sur la création d'assistants alimentés par l'IA.",
      missionHeadline: "Notre Mission",
      missionText: "Aider les entreprises à ne jamais manquer une opportunité.",
      whatWeDoHeadline: "Ce que Nous Faisons",
      whatWeDoSub: "Orienta développe des assistants IA qui peuvent :",
      whatWeDoItems: ["Répondre aux appels 24/7", "Gérer les conversations", "Guider les clients", "Réserver des RDV", "Réduire la surcharge"],
      whatWeDoEnd: "Nos solutions offrent une valeur immédiate.",
      approachHeadline: "Notre Approche",
      approachIntro: "Nous suivons trois principes :",
      approachItems: [
        { title: "1. Orientation, Pas Remplacement", desc: "L'IA aide les humains." },
        { title: "2. Sécurité et Simplicité", desc: "Systèmes sûrs et simples." },
        { title: "3. Impact Réel", desc: "Focus sur le gain de temps et de revenus." }
      ],
      productsHeadline: "Nos Produits",
      productsIntro: "Solutions spécifiques à chaque industrie.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "Réceptionniste IA pour la beauté.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "Assistant IA pour les salles de sport et studios de fitness.",
      workWithHeadline: "Avec Qui Nous Travaillons",
      workWithItems: ["Entreprises de beauté", "PME de services", "Partenaires"],
      visionHeadline: "Notre Vision",
      visionText: "Un accueil numérique intelligent pour tous.",
      ctaHeadline: "Contact",
      ctaText: "Découvrez comment Orienta peut vous aider."
    },
    demo: {
      headline: "Découvrez GlowDesk",
      subheadline: "Voyez comment l'IA d'Orienta interagit avec vos clients.",
      whatsapp: "WhatsApp",
      voice: "Voix",
      calendar: "Calendrier",
      waHeader: "Assistant GlowDesk",
      waSub: "Propulsé par Orienta • En ligne",
      waInput: "Tapez un message...",
      voiceTitle: "Démo Vocale IA",
      voiceDesc: "Simulez un appel entrant en direct pour votre entreprise.",
      voiceCTA: "Lancer la simulation",
      voiceInbound: "Appel entrant...",
      voiceMute: "Muet",
      voiceEnd: "Raccrocher",
      voiceInfo: "Infos",
      calTitle: "Tableau de Bord Unifié",
      calSub: "Synchro en temps réel",
      calSync: "Orienta Cloud Sync",
      calSuccess: "Réservation confirmée !",
      calSuccessSub: "Le créneau pour {slot} est réservé.",
      calAnother: "Réserver un autre créneau",
      calReserved: "Occupé",
      calBookNow: "Réserver"
    },
    pricing: {
      headline: "Des plans adaptés",
      subheadline: "Une tarification transparente conçue pour évoluer avec vous.",
      mostPopular: "Recommandé",
      perMo: "/mois",
      tiers: [
        { name: "Lite", price: "49", desc: "Pour les indépendants", cta: "Démarrer Lite" },
        { name: "Professionnel", price: "99", desc: "Idéal pour les studios établis", cta: "Démarrer Pro" },
        { name: "Entreprise", price: "149", desc: "Multi-sites et industries sur mesure", cta: "Contacter Orienta" }
      ]
    },
    contact: {
      headline: "Prêt à moderniser votre accueil ?",
      subheadline: "Planifiez une démo avec l'équipe Orienta.",
      points: ["Essai gratuit 14 jours", "Configuration par industrie", "Support prioritaire"],
      trusted: "Approuvé par plus de 500 prestataires",
      success: "Message envoyé !",
      successSub: "Un spécialiste Orienta vous contactera bientôt.",
      labels: {
        biz: "Nom de l'entreprise",
        name: "Nom du contact",
        email: "E-mail pro",
        phone: "Téléphone",
        type: "Secteur d'activité"
      },
      types: ["Beauté & Esthétique", "Fitness & Yoga", "Bien-être & Spa", "Cliniques spécialisées", "Services Boutique"],
      cta: "Obtenir ma démo gratuite"
    }
  },
  ar: {
    nav: {
      benefits: "المميزات",
      demo: "تجربة حية",
      pricing: "الأسعار",
      howItWorks: "كيف يعمل",
      about: "من نحن",
      cta: "طلب تجربة"
    },
    hero: {
      badge: "الجيل القادم من الذكاء الاصطناعي للخدمات",
      headline: "لا تفقد أي ",
      headlineItalic: "عميل",
      headlineEnd: " بعد اليوم",
      subheadline: "مساعد ذكاء اصطناعي ذكي من Orienta يرد على المكالمات، ورسائل الواتساب، ويدير الحجوزات تلقائياً.",
      primaryCTA: "اطلب تجربة",
      secondaryCTA: "شاهد كيف يعمل",
      check1: "بدون التزام طويل",
      check2: "متوافق مع الخصوصية",
      check3: "إلغاء في أي وقت",
      bookingLabel: "حجز جديد",
      bookingService: "خدمة في الساعة 2:00"
    },
    problems: {
      badge: "التحدي",
      headline: "إدارة مكتبك لا يجب أن تعيق ",
      headlineItalic: "نمو",
      headlineEnd: " أعمالك.",
      subheadline: "الجدولة اليدوية هي العائق الأكبر لشركات الخدمات. مع GlowDesk، لا تضطر للاختيار بين العميل والهاتف.",
      items: [
        { title: "مكالمات فائتة", desc: "تكون مشغولاً مع عميل ويرن الهاتف. عميل آخر يذهب للمنافس." },
        { title: "خسارة خارج الدوام", desc: "GlowDesk يعمل بينما أنت ترتاح." },
        { title: "تشتت الموظفين", desc: "خبراؤك يجب أن يركزوا على خدماتهم، وليس على الاستقبال." }
      ],
      testimonial: "\"GlowDesk غير طريقة عملنا. لم نعد نقلق بشأن الهاتف.\"",
      author: "ماريا، صاحبة مركز تجميل واسترخاء"
    },
    solutions: {
      badge: "الحل",
      headline: "مصمم لقطاع ",
      headlineAccent: "الاسترخاء والجمال",
      subheadline: "GlowDesk يفهم تفاصيل الخدمات الاحترافية—من مدة الجلسات إلى سياسات الإلغاء.",
      items: [
        { title: "موظف استقبال صوتي", desc: "يرد 24/7 بصوت طبيعي يمثل علامتك التجارية بامتياز." },
        { title: "مدير الواتساب", desc: "يحول المحادثات إلى حجوزات مباشرة." },
        { title: "مزامنة شاملة", desc: "يتكامل مع جوجل، أوتلوك، وأغلب منصات الجدولة." },
        { title: "استشارة ذكية", desc: "يجيب على أسئلة الخدمات ويفرز العملاء." },
        { title: "تذكيرات استباقية", desc: "يجيب على أسئلة الخدمات ويفرز العملاء." },
        { title: "أمان المؤسسات", desc: "مبني على بنية Orienta التحتية الآمنة." }
      ]
    },
    howItWorks: {
      headline: "كيف يعمل",
      subheadline: "البدء مع GlowDesk سلس ولا يتطلب أي مهارات تقنية.",
      steps: [
        { title: "ربط التقويم الخاص بك", desc: "تكامل مع Google أو Outlook أو برنامج الصالون الحالي في دقائق." },
        { title: "الذكاء الاصطناعي يتعامل مع الطلبات", desc: "عندما يتصل العملاء أو يرسلون رسائل، يتولى ذكاؤنا الاصطناعي المهمة فوراً." },
        { title: "استرخِ واخدم عملائك", desc: "شاهد جدولك يمتلئ تلقائياً بينما تركز أنت على تقديم تقديم خدمات مذهلة." }
      ]
    },
    about: {
      title: "حول Orienta",
      whoHeadline: "من نحن",
      whoText: "Orienta هي شركة تكنولوجيا تركز على بناء مساعدين مدعومين بالذكاء الاصطناعي.",
      missionHeadline: "مهمتنا",
      missionText: "مساعدة الشركات على عدم تفويت أي فرصة.",
      whatWeDoHeadline: "ماذا نفعل",
      whatWeDoSub: "تطور Orienta مساعدي ذكاء اصطناعي يمكنهم:",
      whatWeDoItems: ["الرد على المكالمات 24/7", "إدارة المحادثات", "توجيه العملاء", "حجز المواعيد", "تقليل ضغط العمل"],
      whatWeDoEnd: "حلولنا تقدم قيمة فورية.",
      approachHeadline: "نهجنا",
      approachIntro: "نتبع ثلاثة مبادئ أساسية:",
      approachItems: [
        { title: "1. التوجيه لا الاستبدال", desc: "الذكاء الاصطناعي يدعم البشر." },
        { title: "2. الأمان والبساطة", desc: "أنظمة آمنة وسهلة الاستخدام." },
        { title: "3. تأثير حقيقي", desc: "التركيز على توفير الوقت وزيادة الدخل." }
      ],
      productsHeadline: "منتجاتنا",
      productsIntro: "حلول مخصصة لاحتياجات العمل الحقيقية.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "موظف الاستقبال الذكي لقطاع التجميل.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "مساعد الذكاء الاصطناعي للصالات الرياضية ومراكز اللياقة البدنية.",
      workWithHeadline: "مع من نعمل",
      workWithItems: ["شركات التجميل", "المنشآت الخدمية الصغيرة والمتوسطة", "الشركاء"],
      visionHeadline: "رؤيتنا",
      visionText: "مكتب استقبال رقمي ذكي لكل عمل خدمي.",
      ctaHeadline: "تواصل معنا",
      ctaText: "اكتشف كيف يمكن لـ Orienta مساعدة عملك على النمو."
    },
    demo: {
      headline: "اختبر GlowDesk",
      subheadline: "شاهد كيف يتفاعل ذكاء Orienta مع عملائك.",
      whatsapp: "واتساب",
      voice: "صوت",
      calendar: "التقويم",
      waHeader: "مساعد GlowDesk",
      waSub: "بدعم من Orienta • متصل",
      waInput: "اكتب رسالة...",
      voiceTitle: "تجربة الصوت",
      voiceDesc: "حاكي مكالمة واردة مباشرة إلى مكتب عملك.",
      voiceCTA: "ابدأ المحاكاة",
      voiceInbound: "اتصال وارد...",
      voiceMute: "كتم",
      voiceEnd: "إنهاء",
      voiceInfo: "معلومات",
      calTitle: "لوحة التحكم الموحدة",
      calSub: "مزامنة فورية عبر المنصات",
      calSync: "مزامنة Orienta السحابية",
      calSuccess: "تم تأكيد الحجز!",
      calSuccessSub: "تم حجز موعد {slot} بنجاح.",
      calAnother: "حجز موعد آخر",
      calReserved: "مشغول",
      calBookNow: "احجز"
    },
    pricing: {
      headline: "خطط لكل المستويات",
      subheadline: "أسعار شفافة مصممة لتنمو مع أعمالك.",
      mostPopular: "موصى به",
      perMo: "/شهرياً",
      tiers: [
        { name: "الأساسية", price: "49", desc: "للمحترفين المستقلين", cta: "ابدأ الآن" },
        { name: "الاحترافية", price: "99", desc: "للعيادات والمراكز المتميزة", cta: "ابدأ الآن" },
        { name: "المتقدمة", price: "149", desc: "للفروع المتعددة وصناعات مخصصة", cta: "اتصل بـ Orienta" }
      ]
    },
    contact: {
      headline: "جاهز لتطوير مكتبك؟",
      subheadline: "حدد موعداً مع فريق Orienta لرؤية GlowDesk.",
      points: ["تجربة مجانية 14 يوماً", "إعداد مخصص لكل قطاع", "دعم أولوية مباشر"],
      trusted: "موثوق من قبل أكثر من 500 مقدم خدمة",
      success: "تم الإرسال!",
      successSub: "سيتواصل معك خبير من Orienta قريباً.",
      labels: {
        biz: "اسم العمل",
        name: "اسم جهة الاتصال",
        email: "البريد المهني",
        phone: "رقم الهاتف",
        type: "نوع القطاع"
      },
      types: ["التجميل والاسترخاء", "اللياقة واليوغا", "مراكز الاستشفاء", "عيادات متخصصة", "خدمات بوتيك"],
      cta: "احصل على العرض المجاني"
    }
  }
};
