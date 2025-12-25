
export type Locale = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      demo: "Demo",
      pricing: "Pricing",
      howItWorks: "How it Works",
      about: "About",
      cta: "Request a Demo",
      login: "Login",
      dashboard: "Dashboard",
      logout: "Logout"
    },
    auth: {
      title: "Client Portal",
      subtitle: "Secure access to your Orienta desk",
      userLabel: "Username or Email",
      passLabel: "Password",
      btn: "Sign In",
      error: "Invalid credentials. Try admin / admin",
      forgot: "Forgot password?"
    },
    dashboard: {
      sidebar: {
        overview: "Overview",
        bookings: "Bookings",
        calendar: "Calendar",
        billing: "Billing",
        profile: "Profile"
      },
      overview: {
        title: "Business Snapshot",
        subtitle: "How your AI assistant is performing",
        stats: {
          total: "Total Bookings",
          revenue: "Est. Revenue",
          leads: "New Leads",
          noshow: "No-show Rate"
        },
        chartTitle: "Booking Trends"
      },
      calendar: {
        title: "Google Calendar Sync",
        status: "Sync Status: Active",
        btn: "Resync Now",
        connected: "Connected as {email}"
      },
      billing: {
        title: "Plan & Billing",
        currentPlan: "Current Plan",
        manage: "Manage Subscription",
        history: "Invoice History"
      }
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
      cta: "Demander une démo",
      login: "Connexion",
      dashboard: "Tableau de Bord",
      logout: "Déconnexion"
    },
    auth: {
      title: "Portail Client",
      subtitle: "Accès sécurisé à votre bureau Orienta",
      userLabel: "Utilisateur ou Email",
      passLabel: "Mot de passe",
      btn: "Se Connecter",
      error: "Identifiants invalides (admin / admin)",
      forgot: "Mot de passe oublié ?"
    },
    dashboard: {
      sidebar: {
        overview: "Vue d'ensemble",
        bookings: "Réservations",
        calendar: "Calendrier",
        billing: "Facturation",
        profile: "Profil"
      },
      overview: {
        title: "Aperçu de l'activité",
        subtitle: "Performance de votre assistant IA",
        stats: {
          total: "Réservations totales",
          revenue: "Revenu est.",
          leads: "Nouveaux prospects",
          noshow: "Taux d'absence"
        },
        chartTitle: "Tendances des réservations"
      },
      calendar: {
        title: "Synchro Google Calendar",
        status: "Statut : Actif",
        btn: "Synchroniser",
        connected: "Connecté en tant que {email}"
      },
      billing: {
        title: "Plan & Facturation",
        currentPlan: "Plan actuel",
        manage: "Gérer l'abonnement",
        history: "Historique"
      }
    },
    hero: {
      badge: "IA de nouvelle génération pour les entreprises de services",
      headline: "Ne manquez plus jamais un ",
      headlineItalic: "Client",
      headlineEnd: " ",
      subheadline: "Un assistant intelligent par Orienta qui répond aux appels, aux messages WhatsApp et gère les réservations automatiquement.",
      primaryCTA: "Demander une démo",
      secondaryCTA: "Voir comment ça marche",
      check1: "Sans engagement à long terme",
      check2: "Conforme RGPD",
      check3: "Annulez à tout moment",
      bookingLabel: "Nouvelle réservation",
      bookingService: "Service à 14h00"
    },
    problems: {
      badge: "Le Défi",
      headline: "Gérer votre bureau ne devrait pas signifier ",
      headlineItalic: "manquer",
      headlineEnd: " la croissance.",
      subheadline: "La planification manuelle est le goulot d'étranglement pour les entreprises de services.",
      items: [
        { title: "Appels manqués", desc: "Vous êtes concentré sur une séance et le téléphone sonne. Un prospect de perdu." },
        { title: "Perte hors horaires", desc: "La plupart des clients réservent quand vous êtes fermé. GlowDesk travaille pendant que vous vous reposez." },
        { title: "Distraction du personnel", desc: "Vos professionnels devraient fournir des services, pas agir comme réceptionnistes." }
      ],
      testimonial: "\"GlowDesk a changé notre flux de travail. Nous ne nous soucions plus du téléphone.\"",
      author: "Maria, Propriétaire de studio"
    },
    solutions: {
      badge: "La Solution",
      headline: "Conçu pour le ",
      headlineAccent: "Bien-être et l'Esthétique",
      subheadline: "GlowDesk comprend les nuances des services professionnels.",
      items: [
        { title: "Réceptionniste IA Vocale", desc: "Répond aux appels 24/7 avec une voix naturelle." },
        { title: "Gestionnaire WhatsApp", desc: "Transforme les conversations en réservations directement." },
        { title: "Synchro Universelle", desc: "S'intègre parfaitement avec Google et Outlook." },
        { title: "Consultation Intelligente", desc: "Répond aux questions sur les services." },
        { title: "Rappels Proactifs", desc: "Réduit considérablement les absences." },
        { title: "Sécurité Entreprise", desc: "Construit sur l'infrastructure sécurisée d'Orienta." }
      ]
    },
    howItWorks: {
      headline: "Comment ça marche",
      subheadline: "Démarrer avec GlowDesk est simple et ne nécessite aucune compétence technique.",
      steps: [
        { title: "Connectez votre calendrier", desc: "Intégrez Google, Outlook ou votre logiciel actuel en quelques minutes." },
        { title: "L'IA gère les demandes", desc: "Quand les clients appellent ou envoient un message, notre IA prend le relais." },
        { title: "Détendez-vous et servez", desc: "Regardez votre emploi du temps se remplir automatiquement." }
      ]
    },
    about: {
      title: "À Propos d'Orienta",
      whoHeadline: "Qui Nous Sommes",
      whoText: "Orienta est une société technologique axée sur la création d'assistants alimentés par l'IA.",
      missionHeadline: "Notre Mission",
      missionText: "Notre mission est simple : aider les entreprises à ne jamais manquer une opportunité.",
      whatWeDoHeadline: "Ce Que Nous Faisons",
      whatWeDoSub: "Orienta développe des assistants IA qui peuvent :",
      whatWeDoItems: [
        "Répondre aux appels et messages 24/7",
        "Gérer les conversations répétitives",
        "Guider les clients vers le bon service",
        "Réserver des rendez-vous",
        "Réduire la surcharge opérationnelle"
      ],
      whatWeDoEnd: "Nos solutions sont conçues pour offrir une valeur immédiate.",
      approachHeadline: "Notre Approche",
      approachIntro: "Chez Orienta, nous suivons trois principes fondamentaux :",
      approachItems: [
        { title: "1. Orientation, pas remplacement", desc: "Nos assistants IA sont conçus pour assister et guider." },
        { title: "2. Sécurité et Simplicité", desc: "Nous évitons la complexité inutile." },
        { title: "3. Impact réel sur le business", desc: "Chaque fonctionnalité est axée sur la valeur." }
      ],
      productsHeadline: "Nos Produits",
      productsIntro: "Orienta développe des solutions spécifiques à l'industrie.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk est notre réceptionniste IA pour la beauté.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk est notre assistant IA pour les salles de sport.",
      workWithHeadline: "Avec qui nous travaillons",
      workWithItems: [
        "Entreprises de beauté et d'esthétique",
        "PME basées sur les services",
        "Partenaires de solutions IA"
      ],
      visionHeadline: "Notre Vision",
      visionText: "Nous envisageons un avenir où chaque entreprise de services a accès à une réception numérique intelligente.",
      ctaHeadline: "Contactez-nous",
      ctaText: "Découvrez comment Orienta peut aider votre entreprise à se développer."
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
      voiceTitle: "Démo IA Vocale",
      voiceDesc: "Simulez un appel entrant vers votre bureau.",
      voiceCTA: "Lancer la simulation",
      voiceInbound: "Appel entrant...",
      voiceMute: "Muet",
      voiceEnd: "Raccrocher",
      voiceInfo: "Info",
      calTitle: "Tableau de Bord Unifié",
      calSub: "Synchro en temps réel",
      calSync: "Orienta Cloud Sync",
      calSuccess: "Réservation Confirmée !",
      calSuccessSub: "Le créneau de {slot} a été réservé avec succès.",
      calAnother: "Réserver un autre créneau",
      calReserved: "Occupé",
      calBookNow: "Réserver"
    },
    pricing: {
      headline: "Des plans pour chaque échelle",
      subheadline: "Tarification transparente conçue pour évoluer avec vous.",
      mostPopular: "Recommandé",
      perMo: "/mois",
      tiers: [
        { name: "Lite", price: "49", desc: "Pour les indépendants", cta: "Démarrer Lite" },
        { name: "Professionnel", price: "99", desc: "Idéal pour les cliniques et studios", cta: "Démarrer Pro" },
        { name: "Entreprise", price: "149", desc: "Multi-sites et sur mesure", cta: "Contacter Orienta" }
      ]
    },
    contact: {
      headline: "Prêt à moderniser votre accueil ?",
      subheadline: "Planifiez une démo avec l'équipe Orienta.",
      points: ["Essai gratuit de 14 jours", "Configuration spécifique", "Support prioritaire"],
      trusted: "Approuvé par plus de 500 prestataires",
      success: "Message envoyé !",
      successSub: "Un spécialiste Orienta vous contactera sous peu.",
      labels: {
        biz: "Nom de l'entreprise",
        name: "Nom du contact",
        email: "Email professionnel",
        phone: "Téléphone mobile",
        type: "Type d'industrie"
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
      cta: "طلب تجربة",
      login: "تسجيل الدخول",
      dashboard: "لوحة التحكم",
      logout: "خروج"
    },
    auth: {
      title: "بوابة العملاء",
      subtitle: "دخول آمن لمكتب Orienta الخاص بك",
      userLabel: "اسم المستخدم",
      passLabel: "كلمة المرور",
      btn: "دخول",
      error: "خطأ. جرب admin / admin",
      forgot: "نسيت كلمة المرور؟"
    },
    dashboard: {
      sidebar: {
        overview: "نظرة عامة",
        bookings: "الحجوزات",
        calendar: "التقويم",
        billing: "الفواتير",
        profile: "الملف الشخصي"
      },
      overview: {
        title: "نظرة على العمل",
        subtitle: "أداء مساعد الذكاء الاصطناعي",
        stats: {
          total: "إجمالي الحجوزات",
          revenue: "الدخل التقديري",
          leads: "عملاء جدد",
          noshow: "عدم الحضور"
        },
        chartTitle: "اتجاهات الحجز"
      },
      calendar: {
        title: "مزامنة جوجل",
        status: "الحالة: متصل",
        btn: "مزامنة الآن",
        connected: "متصل بـ {email}"
      },
      billing: {
        title: "الخطة والفواتير",
        currentPlan: "الخطة الحالية",
        manage: "إدارة الاشتراك",
        history: "سجل الفواتير"
      }
    },
    hero: {
      badge: "ذكاء اصطناعي من الجيل القادم لخدمات الأعمال",
      headline: "لا تفوت ",
      headlineItalic: "عميلاً",
      headlineEnd: " أبداً مرة أخرى",
      subheadline: "مساعد ذكي من Orienta يرد على المكالمات ورسائل الواتساب ويدير الحجوزات تلقائياً.",
      primaryCTA: "طلب تجربة",
      secondaryCTA: "شاهد كيف يعمل",
      check1: "بدون التزام طويل الأمد",
      check2: "متوافق مع قوانين حماية البيانات",
      check3: "إلغاء في أي وقت",
      bookingLabel: "حجز جديد",
      bookingService: "خدمة في الساعة 2:00 مساءً"
    },
    problems: {
      badge: "التحدي",
      headline: "إدارة مكتبك لا يجب أن تعني ",
      headlineItalic: "فقدان",
      headlineEnd: " النمو.",
      subheadline: "الجدولة اليدوية هي العائق أمام الشركات الخدمية.",
      items: [
        { title: "مكالمات فائتة", desc: "أنت مشغول في جلسة والهاتف يرن. عميل آخر يذهب للمنافس." },
        { title: "خسارة خارج الأوقات", desc: "معظم العملاء يحجزون عندما تكون مغلقاً. GlowDesk يعمل بينما ترتاح." },
        { title: "تشتت الموظفين", desc: "يجب على محترفيك تقديم الخدمات، لا العمل كموظفي استقبال." }
      ],
      testimonial: "\"GlowDesk غير سير عملنا. لم نعد نقلق بشأن الهاتف خلال ساعات الذروة.\"",
      author: "ماريا، مالكة استوديو"
    },
    solutions: {
      badge: "الحل",
      headline: "بني لقطاع ",
      headlineAccent: "الجمال والعناية",
      subheadline: "GlowDesk يفهم تفاصيل الخدمات المهنية.",
      items: [
        { title: "موظف استقبال صوتي", desc: "يرد على المكالمات 24/7 بصوت طبيعي." },
        { title: "مدير واتساب", desc: "يحول المحادثات إلى حجوزات مباشرة." },
        { title: "مزامنة شاملة", desc: "يتكامل مع جوجل وأوتلوك." },
        { title: "استشارة ذكية", desc: "يجيب على أسئلة الخدمات." },
        { title: "تذكيرات استباقية", desc: "يقلل بشكل كبير من حالات عدم الحضور." },
        { title: "أمن الشركات", desc: "بني على بنية Orienta الآمنة." }
      ]
    },
    howItWorks: {
      headline: "كيف يعمل",
      subheadline: "البدء مع GlowDesk سلس ولا يتطلب مهارات تقنية.",
      steps: [
        { title: "ربط التقويم", desc: "تكامل مع جوجل أو أوتلوك في دقائق." },
        { title: "الذكاء الاصطناعي يعالج الطلبات", desc: "عندما يتصل العملاء، يتولى مساعدنا الرد فوراً." },
        { title: "استرخِ واخدم", desc: "شاهد جدولك يمتلئ تلقائياً." }
      ]
    },
    about: {
      title: "عن Orienta",
      whoHeadline: "من نحن",
      whoText: "Orienta هي شركة تقنية تركز على بناء مساعدين مدعومين بالذكاء الاصطناعي.",
      missionHeadline: "مهمتنا",
      missionText: "مهمتنا بسيطة: مساعدة الشركات على عدم تفويت أي فرصة.",
      whatWeDoHeadline: "ماذا نفعل",
      whatWeDoSub: "تطور Orienta مساعدي ذكاء اصطناعي يمكنهم:",
      whatWeDoItems: [
        "الرد على المكالمات والرسائل 24/7",
        "التعامل مع المحادثات المتكررة",
        "توجيه العملاء للخدمة الصحيحة",
        "حجز المواعيد بسلاسة",
        "تقليل الحمل التشغيلي"
      ],
      whatWeDoEnd: "حلولنا مصممة لتقديم قيمة فورية.",
      approachHeadline: "نهجنا",
      approachIntro: "في Orienta، نتبع ثلاثة مبادئ أساسية:",
      approachItems: [
        { title: "1. التوجيه لا الاستبدال", desc: "مساعدونا مصممون للمساعدة والتوجيه." },
        { title: "2. الأمان والبساطة", desc: "نتجنب التعقيد غير الضروري." },
        { title: "3. تأثير حقيقي على الأعمال", desc: "كل ميزة نبنيها تهدف لزيادة القيمة." }
      ],
      productsHeadline: "منتجاتنا",
      productsIntro: "تطور Orienta حلولاً متخصصة لكل قطاع.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk هو موظف الاستقبال الذكي لقطاع التجميل.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk هو مساعد الذكاء الاصطناعي للصالات الرياضية.",
      workWithHeadline: "من نعمل معهم",
      workWithItems: [
        "شركات التجميل والجمال",
        "الشركات الصغيرة والمتوسطة الخدمية",
        "الشركاء الذين يبحثون عن حلول الذكاء الاصطناعي"
      ],
      visionHeadline: "رؤيتنا",
      visionText: "نتصور مستقبلاً حيث تمتلك كل شركة خدمية مكتب استقبال رقمي ذكي.",
      ctaHeadline: "تواصل معنا",
      ctaText: "اكتشف كيف يمكن لـ Orienta مساعدة عملك على النمو."
    },
    demo: {
      headline: "جرب GlowDesk",
      subheadline: "شاهد كيف يتفاعل الذكاء الاصطناعي مع عملائك.",
      whatsapp: "واتساب",
      voice: "صوت",
      calendar: "التقويم",
      waHeader: "مساعد GlowDesk",
      waSub: "مدعوم من Orienta • متصل",
      waInput: "اكتب رسالة...",
      voiceTitle: "تجربة الصوت الذكي",
      voiceDesc: "محاكاة مكالمة واردة مباشرة إلى مكتبك.",
      voiceCTA: "بدء المحاكاة",
      voiceInbound: "مكالمة واردة...",
      voiceMute: "كتم",
      voiceEnd: "إنهاء",
      voiceInfo: "معلومات",
      calTitle: "لوحة تحكم موحدة",
      calSub: "مزامنة فورية عبر المنصات",
      calSync: "سحابة Orienta",
      calSuccess: "تم تأكيد الحجز!",
      calSuccessSub: "تم حجز موعد {slot} بنجاح.",
      calAnother: "حجز موعد آخر",
      calReserved: "محجوز",
      calBookNow: "احجز الآن"
    },
    pricing: {
      headline: "خطط لكل حجم",
      subheadline: "أسعار شفافة مصممة لتنمو مع عملك.",
      mostPopular: "الأكثر طلباً",
      perMo: "/شهرياً",
      tiers: [
        { name: "Lite", price: "49", desc: "للمحترفين المستقلين", cta: "ابدأ مع Lite" },
        { name: "Professional", price: "99", desc: "للعيادات والاستوديوهات", cta: "ابدأ مع Pro" },
        { name: "Enterprise", price: "149", desc: "للفروع المتعددة", cta: "تواصل مع Orienta" }
      ]
    },
    contact: {
      headline: "مستعد لتطوير مكتبك؟",
      subheadline: "احجز موعداً للتجربة مع فريق Orienta.",
      points: ["تجربة مجانية 14 يوماً", "إعداد مخصص لكل قطاع", "دعم فني متميز"],
      trusted: "موثوق من أكثر من 500 مزود خدمة",
      success: "تم إرسال الرسالة!",
      successSub: "سيتواصل معك متخصص من Orienta قريباً.",
      labels: {
        biz: "اسم العمل",
        name: "اسم التواصل",
        email: "البريد الإلكتروني",
        phone: "الجوال",
        type: "نوع القطاع"
      },
      types: ["التجميل والعناية", "اللياقة واليوغا", "السبا والرفاهية", "العيادات المتخصصة", "خدمات بوتيك"],
      cta: "احصل على تجربتي المجانية"
    }
  }
};
