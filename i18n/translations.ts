
export type Locale = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      demo: "Experience",
      pricing: "Pricing",
      howItWorks: "How it Works",
      about: "About",
      cta: "Experience GlowDesk",
      login: "Login",
      dashboard: "Dashboard",
      logout: "Logout"
    },
    auth: {
      title: "Client Portal",
      subtitle: "Secure access to your Orienta dashboard",
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
      badge: "AI Receptionist for Beauty & Spa",
      headline: "The Elite Front Desk for ",
      headlineItalic: "Salons",
      headlineEnd: " & Spas",
      subheadline: "GlowDesk is Orienta's specialized AI assistant designed exclusively for beauty salons and wellness spas. It manages your calls and WhatsApp 24/7, booking appointments while you focus on your clients.",
      primaryCTA: "Start Free Trial",
      secondaryCTA: "Watch It Work",
      check1: "No long-term commitment",
      check2: "GDPR compliant",
      check3: "Cancel anytime",
      bookingLabel: "New Appointment",
      bookingService: "Balayage at 2:00 PM"
    },
    problems: {
      badge: "The Challenge",
      headline: "Managing your salon shouldn't mean ",
      headlineItalic: "missing",
      headlineEnd: " clients.",
      subheadline: "Manual scheduling is the bottleneck for luxury beauty businesses. You shouldn't have to choose between a treatment and the phone.",
      items: [
        { title: "Missed Opportunities", desc: "You're focused on a facial and the phone rings. Another high-value client lost." },
        { title: "After-Hours Scheduling", desc: "Most clients book in the evening. GlowDesk fills your morning while you sleep." },
        { title: "Staff Burnout", desc: "Your professionals should be artists, not full-time receptionists." }
      ],
      testimonial: "\"GlowDesk changed our workflow. We no longer worry about the phone during peak hours.\"",
      author: "Maria, Spa & Wellness Owner"
    },
    solutions: {
      badge: "The Solution",
      headline: "Exclusively for ",
      headlineAccent: "Beauty & Spa",
      subheadline: "GlowDesk understands the specific needs of salons—from treatment durations to cancellation policies and luxury etiquette.",
      items: [
        { title: "AI Voice Receptionist", desc: "Answers calls 24/7 with a warm, natural voice that understands spa services." },
        { title: "WhatsApp Booking", desc: "Turns chat into confirmed appointments directly in your calendar." },
        { title: "Universal Sync", desc: "Seamlessly integrates with Google, Outlook, and salon management software." },
        { title: "Treatment Consultation", desc: "Answers client questions about specific services and prep instructions." },
        { title: "Smart Reminders", desc: "Reduces no-shows for expensive treatments with automated, gentle follow-ups." },
        { title: "Orienta Infrastructure", desc: "Built on Orienta's secure AI platform for absolute data privacy." }
      ]
    },
    howItWorks: {
      headline: "How it Works",
      subheadline: "Getting started with GlowDesk is seamless for any beauty professional.",
      steps: [
        { title: "Sync Your Calendar", desc: "Connect your current booking system in seconds." },
        { title: "AI Takes the Front Desk", desc: "Our specialized beauty-trained AI answers calls and messages instantly." },
        { title: "Focus on Your Art", desc: "Watch your schedule fill up while you provide amazing treatments." }
      ]
    },
    about: {
      title: "About Orienta",
      whoHeadline: "Who We Are",
      whoText: "Orienta is a technology company focused on building specialized AI-powered assistants. We create niche-specific solutions that handle customer interactions so businesses can thrive.",
      missionHeadline: "Our Mission",
      missionText: "We help service providers never miss an opportunity. Orienta removes the friction of manual scheduling through intelligent automation.",
      whatWeDoHeadline: "What We Do",
       whatWeDoSub: "Orienta develops sector-specific AI assistants:",
       whatWeDoItems: [
        "GlowDesk: Exclusively for Beauty & Spas",
        "FitDesk: Exclusively for Gyms & Fitness",
        "Real-time 24/7 call and message handling",
        "Seamless booking and CRM integration",
        "Lead collection and triage"
      ],
      whatWeDoEnd: "Our products provide immediate impact without technical complexity.",
      approachHeadline: "Our Approach",
      approachIntro: "At Orienta, we follow three core principles:",
      approachItems: [
        { title: "1. Sector Specialization", desc: "We don't build generic AI. GlowDesk is trained for beauty; FitDesk for fitness." },
        { title: "2. Privacy First", desc: "Enterprise-grade security for your client data." },
        { title: "3. Measurable Growth", desc: "We track the revenue our AI captures for you." }
      ],
      productsHeadline: "Our Specialized Assistants",
      productsIntro: "Orienta develops solutions tailored to specific industry workflows.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk is our AI-powered receptionist for beauty and aesthetic businesses. It helps salons and institutes answer calls and messages automatically, book appointments 24/7, and improve customer experience. GlowDesk is designed specifically for beauty professionals, with workflows that match how salons actually operate.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk is our AI-powered assistant for gyms and fitness studios. It helps fitness centers handle class bookings, manage memberships, and answer routine inquiries 24/7. FitDesk is tailored to the specific needs of high-frequency fitness environments, ensuring no member request goes unanswered.",
      workWithHeadline: "Who We Work With",
      workWithItems: [
        "Luxury Salons & Spas",
        "Aesthetic Clinics",
        "Boutique Fitness Studios",
        "Wellness Centers"
      ],
      visionHeadline: "Our Vision",
      visionText: "A world where professionals are free to focus on their craft while Orienta handles the logistics.",
      ctaHeadline: "Get in Touch",
      ctaText: "Discover how Orienta can help your business grow with GlowDesk or FitDesk."
    },
    demo: {
      headline: "Experience GlowDesk",
      subheadline: "See how our AI interacts with your salon clients.",
      whatsapp: "WhatsApp",
      voice: "Voice",
      calendar: "Calendar",
      waHeader: "GlowDesk AI",
      waSub: "Beauty Assistant • Online",
      waInput: "Type a message...",
      voiceTitle: "AI Front Desk Call",
      voiceDesc: "Call our specialized beauty assistant now.",
      voiceCTA: "START CALL",
      voiceInbound: "Connecting...",
      voiceMute: "Mute",
      voiceEnd: "Hang Up",
      voiceInfo: "Info",
      calTitle: "Salon Dashboard",
      calSub: "Real-time calendar sync",
      calSync: "GlowDesk Sync",
      calSuccess: "Appointment Confirmed!",
      calSuccessSub: "The {slot} slot has been reserved in your salon calendar.",
      calAnother: "View other slots",
      calReserved: "Occupied",
      calBookNow: "Reserve Slot"
    },
    pricing: {
      headline: "Plans for Your Salon",
      subheadline: "Simple pricing to maximize your chair occupancy.",
      mostPopular: "Best Seller",
      perMo: "/mo",
      tiers: [
        { name: "Lite", price: "49", desc: "For independent stylists", cta: "Start Free Trial" },
        { name: "Professional", price: "99", desc: "Perfect for busy beauty salons", cta: "Start Free Trial" },
        { name: "Enterprise", price: "149", desc: "Multiple locations & spa chains", cta: "Contact Sales" }
      ]
    },
    contact: {
      headline: "Talk to our AI Front Desk",
      subheadline: "Experience exactly how GlowDesk will answer your salon's phone calls.",
      points: ["14-day free trial", "Salon-specific setup", "Priority 1-on-1 support"],
      trusted: "Trusted by 500+ Luxury Spas & Salons",
      success: "Lead Captured!",
      successSub: "Our team will follow up for your installation.",
      labels: {
        biz: "Salon Name",
        name: "Contact Name",
        email: "Work Email",
        phone: "Mobile Phone",
        type: "Business Type"
      },
      types: ["Beauty Salon", "Hair Studio", "Wellness Spa", "Aesthetic Clinic", "Nail Bar"],
      cta: "START CALL"
    }
  },
  fr: {
    nav: {
      benefits: "Avantages",
      demo: "Expérience",
      pricing: "Tarifs",
      howItWorks: "Fonctionnement",
      about: "À Propos",
      cta: "Essayer GlowDesk",
      login: "Connexion",
      dashboard: "Tableau de Bord",
      logout: "Déconnexion"
    },
    auth: {
      title: "Portail Client",
      subtitle: "Accès sécurisé à votre tableau de bord Orienta",
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
      badge: "Réceptionniste IA pour Beauté & Spa",
      headline: "L'accueil d'élite pour vos ",
      headlineItalic: "Salons",
      headlineEnd: " & Spas",
      subheadline: "GlowDesk est l'assistant IA spécialisé d'Orienta conçu exclusivement pour les salons de beauté et spas. Il gère vos appels et WhatsApp 24/7.",
      primaryCTA: "Essai Gratuit",
      secondaryCTA: "Voir la démo",
      check1: "Sans engagement",
      check2: "Conforme RGPD",
      check3: "Annulation facile",
      bookingLabel: "Nouveau RDV",
      bookingService: "Balayage à 14:00"
    },
    problems: {
      badge: "Le Défi",
      headline: "Gérer votre salon ne devrait pas signifier ",
      headlineItalic: "perdre",
      headlineEnd: " des clients.",
      subheadline: "La planification manuelle est le frein des instituts de luxe.",
      items: [
        { title: "Opportunités Manquées", desc: "Concentré sur un soin, vous manquez un appel important." },
        { title: "Réservations de Nuit", desc: "La plupart des clients réservent le soir. GlowDesk remplit votre planning." },
        { title: "Fatigue des Équipes", desc: "Vos experts sont des artistes, pas des standardistes." }
      ],
      testimonial: "\"GlowDesk a transformé notre accueil. Plus besoin de surveiller le téléphone.\"",
      author: "Maria, Propriétaire de Spa"
    },
    solutions: {
      badge: "La Solution",
      headline: "Exclusivement pour ",
      headlineAccent: "Beauté & Spa",
      subheadline: "GlowDesk comprend les besoins spécifiques des instituts.",
      items: [
        { title: "Réceptionniste Vocale IA", desc: "Répond 24/7 avec une voix naturelle formée au spa." },
        { title: "Réservation WhatsApp", desc: "Transforme les chats en rendez-vous confirmés." },
        { title: "Synchro Universelle", desc: "S'intègre à vos logiciels de gestion de salon." },
        { title: "Conseil en Soins", desc: "Répond aux questions sur vos services spécifiques." },
        { title: "Rappels Intelligents", desc: "Réduit les absences grâce à des suivis automatiques." },
        { title: "Infrastructure Orienta", desc: "Sécurité absolue pour les données de vos clients." }
      ]
    },
    howItWorks: {
      headline: "Comment ça marche",
      subheadline: "Une mise en place simple pour tout professionnel de la beauté.",
      steps: [
        { title: "Synchronisez votre Calendrier", desc: "Connectez votre système actuel en quelques secondes." },
        { title: "L'IA prend le Relais", desc: "Notre IA spécialisée répond instantanément." },
        { title: "Focus sur vos Clients", desc: "Votre planning se remplit tout seul." }
      ]
    },
    about: {
      title: "À Propos d'Orienta",
      whoHeadline: "Qui Nous Sommes",
      whoText: "Orienta crée des assistants IA spécialisés par secteur pour automatiser l'accueil client.",
      missionHeadline: "Notre Mission",
      missionText: "Aider les prestataires de services à ne jamais manquer une opportunité.",
      whatWeDoHeadline: "Ce Que Nous Faisons",
      whatWeDoSub: "Orienta développe des assistants IA sectoriels :",
      whatWeDoItems: [
        "GlowDesk : Dédié à la Beauté & Spas",
        "FitDesk : Dédié au Fitness & Gyms",
        "Gestion d'appels et messages 24/7",
        "Intégration CRM et Calendrier",
        "Collecte de leads qualifiés"
      ],
      whatWeDoEnd: "Des solutions à impact immédiat.",
      approachHeadline: "Notre Approche",
      approachIntro: "Chez Orienta, nous suivons trois principes :",
      approachItems: [
        { title: "1. Spécialisation Sectorielle", desc: "GlowDesk est formé pour la beauté, FitDesk pour le sport." },
        { title: "2. Confidentialité", desc: "Protection maximale des données clients." },
        { title: "3. Croissance Mesurable", desc: "Nous suivons le revenu généré par l'IA." }
      ],
      productsHeadline: "Nos Assistants Spécialisés",
      productsIntro: "Des solutions adaptées aux flux de travail de chaque industrie.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk est notre réceptionniste IA pour la beauté.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk est notre assistant IA pour le fitness.",
      workWithHeadline: "Nos Partenaires",
      workWithItems: [
        "Salons & Spas de Luxe",
        "Cliniques Esthétiques",
        "Studios de Fitness Boutique",
        "Centres de Bien-être"
      ],
      visionHeadline: "Notre Vision",
      visionText: "Un monde où les professionnels se concentrent sur leur art.",
      ctaHeadline: "Contactez-nous",
      ctaText: "Découvrez comment Orienta peut aider votre entreprise."
    },
    demo: {
      headline: "Expérience GlowDesk",
      subheadline: "Découvrez comment notre IA interagit avec vos clients.",
      whatsapp: "WhatsApp",
      voice: "Voix",
      calendar: "Calendrier",
      waHeader: "GlowDesk IA",
      waSub: "Assistant Beauté • En ligne",
      waInput: "Écrivez un message...",
      voiceTitle: "Appel Accueil IA",
      voiceDesc: "Appelez notre assistant spécialisé beauté.",
      voiceCTA: "LANCER L'APPEL",
      voiceInbound: "Connexion...",
      voiceMute: "Muet",
      voiceEnd: "Raccrocher",
      voiceInfo: "Info",
      calTitle: "Tableau de Bord Salon",
      calSub: "Synchro calendrier temps réel",
      calSync: "GlowDesk Sync",
      calSuccess: "Rendez-vous Confirmé !",
      calSuccessSub: "Le créneau de {slot} a été réservé dans votre calendrier.",
      calAnother: "Voir d'autres créneaux",
      calReserved: "Occupé",
      calBookNow: "Réserver le créneau"
    },
    pricing: {
      headline: "Des Plans pour votre Salon",
      subheadline: "Maximisez l'occupation de vos fauteuils.",
      mostPopular: "Meilleure Vente",
      perMo: "/mois",
      tiers: [
        { name: "Lite", price: "49", desc: "Pour les indépendants", cta: "Essai Gratuit" },
        { name: "Professionnel", price: "99", desc: "Idéal pour les salons occupés", cta: "Essai Gratuit" },
        { name: "Entreprise", price: "149", desc: "Multi-sites et spas", cta: "Contact Ventes" }
      ]
    },
    contact: {
      headline: "Appelez notre Accueil IA",
      subheadline: "Découvrez exactement comment GlowDesk répondra au téléphone de votre salon.",
      points: ["14 jours d'essai gratuit", "Configuration spécialisée salon", "Support prioritaire"],
      trusted: "Approuvé par 500+ Spas & Salons de Luxe",
      success: "Lead Capturé !",
      successSub: "Notre équipe vous contactera pour l'installation.",
      labels: {
        biz: "Nom du Salon",
        name: "Nom du Contact",
        email: "Email Professionnel",
        phone: "Mobile",
        type: "Type d'entreprise"
      },
      types: ["Salon de Beauté", "Studio Coiffure", "Spa & Bien-être", "Clinique Esthétique", "Bar à Ongles"],
      cta: "LANCER L'APPEL"
    }
  },
  ar: {
    nav: {
      benefits: "المميزات",
      demo: "التجربة",
      pricing: "الأسعار",
      howItWorks: "كيف يعمل",
      about: "من نحن",
      cta: "جرب GlowDesk",
      login: "تسجيل الدخول",
      dashboard: "لوحة التحكم",
      logout: "خروج"
    },
    auth: {
      title: "بوابة العملاء",
      subtitle: "دخول آمن للوحة تحكم Orienta الخاصة بك",
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
        history: "التحصيل"
      }
    },
    hero: {
      badge: "موظف استقبال ذكي للتجميل والسبا",
      headline: "الاستقبال النخبة لصالونات ",
      headlineItalic: "التجميل",
      headlineEnd: " والسبا",
      subheadline: "GlowDesk هو مساعد Orienta المتخصص المصمم خصيصاً لصالونات التجميل والسبا الفاخرة. يدير مكالماتك وواتساب 24/7.",
      primaryCTA: "ابدأ تجربة مجانية",
      secondaryCTA: "شاهد كيف يعمل",
      check1: "بدون التزام طويل",
      check2: "متوافق مع قوانين البيانات",
      check3: "إلغاء في أي وقت",
      bookingLabel: "موعد جديد",
      bookingService: "تنظيف بشرة الساعة 2:00"
    },
    problems: {
      badge: "التحدي",
      headline: "إدارة صالونك لا يجب أن تعني ",
      headlineItalic: "خسارة",
      headlineEnd: " العملاء.",
      subheadline: "الجدولة اليدوية هي العائق أمام أعمال التجميل الفاخرة.",
      items: [
        { title: "فرص ضائعة", desc: "أنت مشغول في خدمة والهاتف يرن. ضاع عميل آخر." },
        { title: "حجوزات بعد الوقت", desc: "معظم العملاء يحجزون مساءً. GlowDesk يملأ جدولك." },
        { title: "إجهاد الموظفين", desc: "يجب أن يكون خبراؤك فنانين، لا موظفي استقبال." }
      ],
      testimonial: "\"GlowDesk غير سير عملنا. لم نعد نقلق بشأن الهاتف.\"",
      author: "ماريا، مالكة سبا"
    },
    solutions: {
      badge: "الحل",
      headline: "حصرياً لقطاع ",
      headlineAccent: "التجميل والسبا",
      subheadline: "GlowDesk يفهم احتياجات الصالونات والعيادات.",
      items: [
        { title: "موظف استقبال صوتي", desc: "يرد 24/7 بصوت طبيعي متخصص في خدمات السبا." },
        { title: "حجز واتساب", desc: "يحول الدردشة إلى مواعيد مؤكدة في تقويمك." },
        { title: "مزامنة شاملة", desc: "يتكامل مع جوجل وبرامج إدارة الصالونات." },
        { title: "استشارة الخدمات", desc: "يجيب على أسئلة العملاء حول الخدمات وتعليمات التحضير." },
        { title: "تذكيرات ذكية", desc: "يقلل حالات عدم الحضور للمواعيد المكلفة." },
        { title: "بنية Orienta", desc: "بني على منصة Orienta الآمنة لحماية بياناتك." }
      ]
    },
    howItWorks: {
      headline: "كيف يعمل",
      subheadline: "بدء العمل مع GlowDesk سلس لأي محترف تجميل.",
      steps: [
        { title: "اربط تقويمك", desc: "اربط نظام حجزك الحالي في ثوانٍ." },
        { title: "الذكاء الاصطناعي يتولى الاستقبال", desc: "مساعدنا المتخصص يرد فوراً." },
        { title: "ركز على فنك", desc: "شاهد جدولك يمتلئ بينما تخدم عملاءك." }
      ]
    },
    about: {
      title: "عن Orienta",
      whoHeadline: "من نحن",
      whoText: "Orienta هي شركة تقنية تبني مساعدين متخصصين بالذكاء الاصطناعي.",
      missionHeadline: "مهمتنا",
      missionText: "مساعدة مقدمي الخدمات على عدم تفويت أي فرصة.",
      whatWeDoHeadline: "ماذا نفعل",
      whatWeDoSub: "تطور Orienta مساعدين متخصصين حسب القطاع:",
      whatWeDoItems: [
        "GlowDesk: حصرياً لصالونات التجميل والسبا",
        "FitDesk: حصرياً للصالات الرياضية واللياقة",
        "إدارة مكالمات ورسائل 24/7",
        "تكامل مع التقويم و CRM",
        "جمع وتصنيف العملاء الجدد"
      ],
      whatWeDoEnd: "حلولنا تقدم تأثيراً فورياً.",
      approachHeadline: "نهجنا",
      approachIntro: "في Orienta، نتبع ثلاثة مبادئ:",
      approachItems: [
        { title: "1. التخصص في القطاع", desc: "GlowDesk مدرب للتجميل، FitDesk للياقة." },
        { title: "2. الخصوصية أولاً", desc: "أمن بمستوى الشركات لبيانات عملائك." },
        { title: "3. نمو ملموس", desc: "نتتبع الإيرادات التي يحققها مساعدنا لك." }
      ],
      productsHeadline: "مساعدونا المتخصصون",
      productsIntro: "حلول مصممة لتناسب سير العمل في كل صناعة.",
      glowDeskTitle: "GlowDesk",
      glowDeskText: "GlowDesk هو موظف الاستقبال الذكي لقطاع التجميل.",
      fitDeskTitle: "FitDesk",
      fitDeskText: "FitDesk هو مساعد الذكاء الاصطناعي للياقة البدنية.",
      workWithHeadline: "من نعمل معهم",
      workWithItems: [
        "الصالونات والسبا الفاخرة",
        "العيادات التجميلية",
        "استوديوهات اللياقة",
        "مراكز الرفاهية"
      ],
      visionHeadline: "رؤيتنا",
      visionText: "عالم يركز فيه المحترفون على إبداعهم بينما تتولى Orienta الخدمات اللوجستية.",
      ctaHeadline: "تواصل معنا",
      ctaText: "اكتشف كيف يمكن لـ Orienta مساعدة عملك."
    },
    demo: {
      headline: "تجربة GlowDesk",
      subheadline: "شاهد كيف يتفاعل الذكاء الاصطناعي مع عملاء صالونك.",
      whatsapp: "واتساب",
      voice: "صوت",
      calendar: "التقويم",
      waHeader: "GlowDesk AI",
      waSub: "مساعد تجميل • متصل",
      waInput: "اكتب رسالة...",
      voiceTitle: "مكالمة الاستقبال الذكي",
      voiceDesc: "اتصل بمساعد التجميل المتخصص الآن.",
      voiceCTA: "بدء الاتصال",
      voiceInbound: "جاري الاتصال...",
      voiceMute: "كتم",
      voiceEnd: "إنهاء",
      voiceInfo: "معلومات",
      calTitle: "لوحة تحكم الصالون",
      calSub: "مزامنة التقويم فورياً",
      calSync: "مزامنة GlowDesk",
      calSuccess: "تم تأكيد الموعد!",
      calSuccessSub: "تم حجز موعد {slot} في تقويم صالونك.",
      calAnother: "عرض مواعيد أخرى",
      calReserved: "محجوز",
      calBookNow: "احجز الموعد"
    },
    pricing: {
      headline: "خطط لصالونك",
      subheadline: "أسعار بسيطة لزيادة إشغال مقاعدك.",
      mostPopular: "الأكثر مبيعاً",
      perMo: "/شهرياً",
      tiers: [
        { name: "Lite", price: "49", desc: "للمحترفين المستقلين", cta: "ابدأ تجربة مجانية" },
        { name: "Professional", price: "99", desc: "مثالي للصالونات المزدحمة", cta: "ابدأ تجربة مجانية" },
        { name: "Enterprise", price: "149", desc: "للفروع المتعددة وسلاسل السبا", cta: "اتصل بالمبيعات" }
      ]
    },
    contact: {
      headline: "تحدث مع استقبالنا الذكي",
      subheadline: "جرب بنفسك كيف سيرد GlowDesk على مكالمات صالونك.",
      points: ["14 يوم تجربة مجانية", "إعداد مخصص للصالونات", "دعم فني متميز"],
      trusted: "موثوق من 500+ سبا وصالون فاخر",
      success: "تم التقاط العميل!",
      successSub: "سيتواصل معك فريقنا للتركيب.",
      labels: {
        biz: "اسم الصالون",
        name: "اسم الشخص",
        email: "البريد الإلكتروني",
        phone: "الجوال",
        type: "نوع العمل"
      },
      types: ["صالون تجميل", "استوديو شعر", "سبا ورفاهية", "عيادة تجميل", "صالون أظافر"],
      cta: "بدء الاتصال"
    }
  }
};
