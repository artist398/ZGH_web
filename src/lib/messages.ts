export type Locale = "zh" | "en" | "km";

export const locales: Locale[] = ["zh", "en", "km"];

export const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  km: "ខ្មែរ",
};

/** 窄屏顶栏语言切换用缩写，避免挤压 Logo 与菜单 */
export const localeLabelsCompact: Record<Locale, string> = {
  zh: "中",
  en: "EN",
  km: "ខ្ម",
};

export const htmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  km: "km",
};

export type ServiceItem = { title: string; desc: string };

export type GalleryShot = { alt: string; caption: string };

export type BookingMessages = {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  dateLabel: string;
  timeLabel: string;
  serviceLabel: string;
  servicePlaceholder: string;
  noteLabel: string;
  notePlaceholder: string;
  mailSubject: string;
  mailIntro: string;
  submitMail: string;
  submitWhatsapp: string;
  close: string;
  phoneInvalid: string;
  footerNote: string;
  dial: string;
};

export type Messages = {
  brandName: string;
  brandTag: string;
  logoAlt: string;
  nav: { services: string; film: string; space: string; visit: string; book: string };
  navOpen: string;
  hero: {
    kicker: string;
    lead: string;
    ctaPrimary: string;
    ctaFilm: string;
    statSpaceLabel: string;
    statSpace: string;
    statExpLabel: string;
    statExp: string;
    imgAlt: string;
  };
  services: {
    kicker: string;
    title: string;
    lead: string;
    items: ServiceItem[];
  };
  film: {
    kicker: string;
    title: string;
    lead: string;
    videoFallback: string;
  };
  gallery: {
    kicker: string;
    title: string;
    lead: string;
    scrollHint: string;
    entranceTitle: string;
    shots: GalleryShot[];
  };
  booking: BookingMessages;
  footer: {
    blurb: string;
    bookCta: string;
    contactTitle: string;
    phoneLabel: string;
    addressLabel: string;
    /** 支持 \n 换行 */
    address: string;
    openMaps: string;
    quickLinks: string;
    visitTips: string;
    tip1: string;
    tip2: string;
    tip3: string;
    copyright: string;
    backToTop: string;
  };
};

const serviceItemsZh: ServiceItem[] = [
  {
    title: "美容美发",
    desc: "剪裁、烫染、造型与头皮养护的一体化方案，强调线条与质感。",
  },
  {
    title: "头疗",
    desc: "舒缓按压与深层清洁，释放压力，唤醒头皮活力。",
  },
  {
    title: "美甲",
    desc: "从极简到艺术彩绘，甲型修饰与持久亮泽并重。",
  },
  {
    title: "美瞳",
    desc: "眉眼精致修饰与神采提升，呈现清透高级的妆容焦点。",
  },
  {
    title: "接发",
    desc: "隐形衔接与层次融合，打造丰盈长发与多变造型。",
  },
  {
    title: "护肤",
    desc: "分阶护理与深层滋养，还原通透光泽肌。",
  },
  {
    title: "医美",
    desc: "在合规前提下，提供医学美容咨询与联合变美路径。",
  },
];

const serviceItemsEn: ServiceItem[] = [
  {
    title: "Hair & Beauty",
    desc: "Cut, color, styling, and scalp care in one refined journey—sculpted lines, tactile finish.",
  },
  {
    title: "Head Spa",
    desc: "Therapeutic massage and deep cleansing to decompress and revive the scalp.",
  },
  {
    title: "Nail Art",
    desc: "From quiet minimalism to painterly detail—shape, shine, and lasting brilliance.",
  },
  {
    title: "Eye Enhancement",
    desc: "Precise eye-area design for luminous, camera-ready definition.",
  },
  {
    title: "Extensions",
    desc: "Seamless blending and layered movement for fuller length and versatile looks.",
  },
  {
    title: "Skincare",
    desc: "Phased facials and deep nourishment for clarity and glass-skin radiance.",
  },
  {
    title: "Aesthetic Medicine",
    desc: "Compliant consultations and curated pathways toward advanced rejuvenation.",
  },
];

const serviceItemsKm: ServiceItem[] = [
  {
    title: "សម្ផស្ស និង កាត់សក់",
    desc: "កាត់ ពណ៌ រចនា និងថែរក្សាស្បែកក្បាលជាប្រព័ន្ធតែមួយ—បន្ទាត់ច្បាស់ រូបរាងទន់រលោង។",
  },
  {
    title: "ថែរក្សាក្បាល",
    desc: "ម៉ាស្សា និងសម្អាតជ្រៅ ដើម្បីសម្រាក និងដាស់ស្បែកក្បាលឡើងវិញ។",
  },
  {
    title: "លាបថ្នាំរុក្ខជាតិដៃ",
    desc: "ពីសាមញ្ញទៅសិល្បៈ—រូបរាងក្រចក រលកភ្លឺ និងរឹងមាំ។",
  },
  {
    title: "តំបន់ភ្នែក",
    desc: "កែលម្អត្រឹមត្រូវជុំវិញភ្នែក សម្រាប់រូបរាងច្បាស់ និងទាក់ទាញ។",
  },
  {
    title: "ភ្ជាប់សក់",
    desc: "ភ្ជាប់ស្អាត ស្រទាប់រលូន សក់វែង និងរចនាច្រើនបែប។",
  },
  {
    title: "ថែរក្សាស្បែកមុខ",
    desc: "ថែទាំជាដំណាក់កាល និងសំណើមជ្រៅ សម្រាប់ស្បែកភ្លឺថ្លា។",
  },
  {
    title: "សម្ផស្សវេជ្ជសាស្ត្រ",
    desc: "ពិគ្រោះតាមស្តង់ដារ និងផ្លូវរួមសម្រាប់ការរីកចម្រើនសម្ផស្ស។",
  },
];

const galleryZh: GalleryShot[] = [
  { alt: "中国红 美丽汇 入口门厅", caption: "入门 · 仪式感序章" },
  { alt: "发廊内景一", caption: "剪染区 · 光影流动" },
  { alt: "发廊内景二", caption: "休憩 · 静谧氛围" },
  { alt: "发廊内景三", caption: "细节 · 材质与线条" },
];

const galleryEn: GalleryShot[] = [
  { alt: "Salon entrance", caption: "Arrival · A composed prelude" },
  { alt: "Interior I", caption: "Color atelier · light in motion" },
  { alt: "Interior II", caption: "Lounge · quiet atmosphere" },
  { alt: "Interior III", caption: "Detail · material and line" },
];

const galleryKm: GalleryShot[] = [
  { alt: "ទ្វារចូលសាឡុង", caption: "ការមកដល់ · បទភ្លេងដំបូង" },
  { alt: "ខាងក្នុង ទី១", caption: "តំបន់ពណ៌ · ពន្លឺចល័ត" },
  { alt: "ខាងក្នុង ទី២", caption: "កន្លែងសម្រាក · ភាពស្ងប់" },
  { alt: "ខាងក្នុង ទី៣", caption: "លម្អិត · សម្ភារៈ និងបន្ទាត់" },
];

export const messages: Record<Locale, Messages> = {
  zh: {
    brandName: "中国红 · 美丽汇",
    brandTag: "HAIR SALON & BEAUTY",
    logoAlt: "中国红 美丽汇 标志",
    nav: {
      services: "服务项目",
      film: "品牌影像",
      space: "空间美学",
      visit: "到店指引",
      book: "预约咨询",
    },
    navOpen: "打开菜单",
    hero: {
      kicker: "Artistry · Atelier · Ritual",
      lead: "以东方美学为底色，融合国际沙龙工艺。从发型到肌肤，让每一次蜕变都如艺术品般被认真对待。",
      ctaPrimary: "探索服务",
      ctaFilm: "观看品牌短片",
      statSpaceLabel: "空间",
      statSpace: "全景落地窗 · 通透奢阔",
      statExpLabel: "体验",
      statExp: "一对一定制 · 艺术剪染",
      imgAlt: "中国红 美丽汇 门店外观",
    },
    services: {
      kicker: "Signature Menu",
      title: "全链路美丽服务",
      lead: "从头颅到指尖，从日常护理到进阶医美，我们以专业团队与精选产品，为您定制专属变美节奏。",
      items: serviceItemsZh,
    },
    film: {
      kicker: "Cinematic",
      title: "品牌影像",
      lead: "光影之间，记录中国红 美丽汇的空间气质与创作瞬间——欢迎全屏沉浸观看。",
      videoFallback: "您的浏览器不支持视频播放。",
    },
    gallery: {
      kicker: "The Space",
      title: "空间美学",
      lead: "从门面到内景，每一处陈设都服务于舒适与灵感——让等待也成为享受。",
      scrollHint: "左右滑动浏览内景 · 支持触控与箭头切换",
      entranceTitle: "入口实景",
      shots: galleryZh,
    },
    booking: {
      title: "在线预约",
      subtitle: "填写信息后可通过邮件或 WhatsApp 发送给我们，亦可直接致电门店。",
      nameLabel: "称呼",
      namePlaceholder: "如何称呼您",
      phoneLabel: "手机号码",
      phonePlaceholder: "用于确认预约",
      dateLabel: "希望日期",
      timeLabel: "希望时段",
      serviceLabel: "意向项目",
      servicePlaceholder: "请选择服务项目",
      noteLabel: "备注",
      notePlaceholder: "其他需求（选填）",
      mailSubject: "中国红美丽汇 · 官网预约咨询",
      mailIntro: "【官网预约】",
      submitMail: "邮件发送预约",
      submitWhatsapp: "用 WhatsApp 发送",
      close: "关闭",
      phoneInvalid: "请填写至少 6 位有效号码，便于我们联系您。",
      footerNote:
        "点击「邮件发送」将打开系统邮箱；若设备未配置邮箱，请使用电话或 WhatsApp。",
      dial: "致电",
    },
    footer: {
      blurb:
        "欢迎莅临门店，体验艺术化剪染与全链路美容服务。营业时间、预约方式与详细地址可向店内顾问咨询，亦可提前致电确认。",
      bookCta: "打开预约表",
      contactTitle: "联系方式",
      phoneLabel: "联系电话",
      addressLabel: "门店地址",
      address:
        "柬埔寨金边（请替换为详细街区、门牌号及楼层）\n中国红 · 美丽汇",
      openMaps: "在地图中打开",
      quickLinks: "快速链接",
      visitTips: "到店提示",
      tip1: "建议提前预约高峰时段",
      tip2: "门店外观见首页主视觉实景",
      tip3: "门口与内景照片仅供参考，以实际为准",
      copyright: "中国红 美丽汇 · 保留所有权利",
      backToTop: "返回顶部",
    },
  },
  en: {
    brandName: "China Red · Beauty Hub",
    brandTag: "HAIR SALON & BEAUTY",
    logoAlt: "China Red Beauty Hub logo",
    nav: {
      services: "Services",
      film: "Film",
      space: "The Space",
      visit: "Visit",
      book: "Book",
    },
    navOpen: "Open menu",
    hero: {
      kicker: "Artistry · Atelier · Ritual",
      lead: "East-meets-salon craftsmanship—from hair to skin—every transformation treated as a living artwork.",
      ctaPrimary: "Explore services",
      ctaFilm: "Watch the film",
      statSpaceLabel: "Volume",
      statSpace: "Floor-to-ceiling glass · luminous scale",
      statExpLabel: "Experience",
      statExp: "Bespoke sessions · editorial color",
      imgAlt: "China Red Beauty Hub exterior",
    },
    services: {
      kicker: "Signature Menu",
      title: "A complete beauty spectrum",
      lead: "From crown to fingertips, from daily care to advanced aesthetics—our team choreographs your personal rhythm of renewal.",
      items: serviceItemsEn,
    },
    film: {
      kicker: "Cinematic",
      title: "Brand motion",
      lead: "Light, space, and the making of beauty—immerse yourself full screen.",
      videoFallback: "Your browser does not support video playback.",
    },
    gallery: {
      kicker: "The Space",
      title: "Interior gallery",
      lead: "From façade to lounge, every detail is composed for comfort and inspiration—even the wait becomes a moment.",
      scrollHint: "Swipe to explore interiors · arrows on desktop",
      entranceTitle: "Entrance",
      shots: galleryEn,
    },
    booking: {
      title: "Book an appointment",
      subtitle:
        "Send your request by email or WhatsApp, or call us directly. Fields marked with * are required for follow-up.",
      nameLabel: "Name",
      namePlaceholder: "How should we address you",
      phoneLabel: "Phone",
      phonePlaceholder: "For confirmation",
      dateLabel: "Preferred date",
      timeLabel: "Preferred time",
      serviceLabel: "Service",
      servicePlaceholder: "Select a service",
      noteLabel: "Notes",
      notePlaceholder: "Anything else we should know (optional)",
      mailSubject: "China Red Beauty Hub · Booking request",
      mailIntro: "[Website booking]",
      submitMail: "Send via email",
      submitWhatsapp: "Send via WhatsApp",
      close: "Close",
      phoneInvalid: "Please enter at least 6 digits so we can reach you.",
      footerNote:
        "Email opens your mail client. If it does not open, call or WhatsApp us with the same details.",
      dial: "Call",
    },
    footer: {
      blurb:
        "Visit us for editorial cuts, color, and full-spectrum beauty. Hours, reservations, and address details are available in-salon or by phone.",
      bookCta: "Open booking form",
      contactTitle: "Contact",
      phoneLabel: "Phone",
      addressLabel: "Address",
      address:
        "Phnom Penh, Cambodia\n(Replace with street, building, and floor)\nChina Red · Beauty Hub",
      openMaps: "Open in Maps",
      quickLinks: "Quick links",
      visitTips: "Before you arrive",
      tip1: "Book ahead for peak evenings and weekends",
      tip2: "The hero image reflects our street-facing façade",
      tip3: "Photography is indicative; experience may vary",
      copyright: "China Red Beauty Hub · All rights reserved",
      backToTop: "Back to top",
    },
  },
  km: {
    brandName: "ចិនក្រហម · មជ្ឈមណ្ឌលសម្ផស្ស",
    brandTag: "សាឡុងសក់ និងសម្ផស្ស",
    logoAlt: "ឡូហ្គូ ចិនក្រហម មជ្ឈមណ្ឌលសម្ផស្ស",
    nav: {
      services: "សេវាកម្ម",
      film: "វីដេអូ",
      space: "បរិយាកាស",
      visit: "មកដល់",
      book: "កក់ទុក",
    },
    navOpen: "បើកម៉ឺនុយ",
    hero: {
      kicker: "សិល្បៈ · ស្ទូឌីយោ · ពិធី",
      lead: "សម្រស់បូព៌ាខាងកើត រួមនឹងបច្ចេកទេសសាឡុងអន្តរជាតិ។ ពីសក់ដល់ស្បែក រាល់ការផ្លាស់ប្តូរត្រូវបានថែទាំដូចស្នាដៅសិល្បៈ។",
      ctaPrimary: "មើលសេវាកម្ម",
      ctaFilm: "មើលវីដេអូ",
      statSpaceLabel: "លំហ",
      statSpace: "កញ្ចក់ពេញជញ្ជាំង · ទូចាប់យកពន្លឺ",
      statExpLabel: "បទពិសោធ",
      statExp: "រចនាតាមបុគ្គល · ពណ៌សិល្បៈ",
      imgAlt: "រូបថតខាងក្រៅហាង",
    },
    services: {
      kicker: "ម៉ឺនុយពិសេស",
      title: "សេវាសម្ផស្សគ្រប់ជួរ",
      lead: "ពីក្បាលដល់ចុយដៃ ពីការថែទាំប្រចាំថ្ងៃដល់សម្ផស្សវេជ្ជសាស្ត្រ—ក្រុមរបស់យើងរៀបចំចង្វាក់ភាពស្រស់ស្អាតរបស់អ្នក។",
      items: serviceItemsKm,
    },
    film: {
      kicker: "សំនាក់ភាពយន្ត",
      title: "រូបភាពម៉ាក",
      lead: "ពន្លឺ លំហ និងពេលវេលានៃការបង្កើតសម្ផស្ស—សូមមើលពេញអេក្រង់។",
      videoFallback: "កម្មវិធីរុករករបស់អ្នកមិនគាំទ្រវីដេអូទេ។",
    },
    gallery: {
      kicker: "លំហ",
      title: "វិចិត្រសាលខាងក្នុង",
      lead: "ពីផ្ទៃខាងមុខដល់កន្លែងសម្រាក រាល់រចនាប័ទ្មសម្រាប់ភាពស្រួល និងការបំផុសគំនិត—រង់ចាំក៏ជាការរីករាយ។",
      scrollHint: "អូសដើម្បីមើលខាងក្នុង · ប៊ូតុងលើកុំព្យូទ័រ",
      entranceTitle: "ទ្វារចូល",
      shots: galleryKm,
    },
    booking: {
      title: "កក់ណាត់ជួប",
      subtitle:
        "បំពេញព័ត៌មានហើយផ្ញើតាមអ៊ីមែល ឬ WhatsApp ឬទូរស័ព្ទមកយើងដោយផ្ទាល់។",
      nameLabel: "ឈ្មោះ",
      namePlaceholder: "ឈ្មោះរបស់អ្នក",
      phoneLabel: "លេខទូរស័ព្ទ",
      phonePlaceholder: "សម្រាប់ទាក់ទងបញ្ជាក់",
      dateLabel: "កាលបរិច្ឆេទ",
      timeLabel: "ម៉ោង",
      serviceLabel: "សេវាកម្ម",
      servicePlaceholder: "ជ្រើសរើសសេវាកម្ម",
      noteLabel: "កំណត់ចំណាំ",
      notePlaceholder: "បន្ថែម (មិនចាំបាច់)",
      mailSubject: "ចិនក្រហម · សំណើកក់ណាត់",
      mailIntro: "[ការកក់ពីគេហទំព័រ]",
      submitMail: "ផ្ញើតាមអ៊ីមែល",
      submitWhatsapp: "ផ្ញើតាម WhatsApp",
      close: "បិទ",
      phoneInvalid: "សូមបញ្ចូលលេខយ៉ាងតិច ៦ ខ្ទង់។",
      footerNote:
        "អ៊ីមែលនឹងបើកកម្មវិធីសំបុត្រ។ បើមិនបើក សូមទូរស័ព្ទ ឬ WhatsApp។",
      dial: "ហៅទូរស័ព្ទ",
    },
    footer: {
      blurb:
        "សូមស្វាគមន៍មកកាន់ហាង ដើម្បីបទពិសោធការកាត់ពណ៌សិល្បៈ និងសេវាសម្ផស្សពេញលេញ។ ម៉ោង ការកក់ និងអាសយដ្ឋានសួរបុគ្គលិក ឬទូរស័ព្ទមុន។",
      bookCta: "បើកបែបបទកក់",
      contactTitle: "ទំនាក់ទំនង",
      phoneLabel: "លេខទូរស័ព្ទ",
      addressLabel: "អាសយដ្ឋានហាង",
      address:
        "ភ្នំពេញ កម្ពុជា\n(សូមដាក់ផ្លូវ អាគារ និងជាន់)\nចិនក្រហម · មជ្ឈមណ្ឌលសម្ផស្ស",
      openMaps: "បើកផែនទី",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      visitTips: "សម្គាល់មុនមក",
      tip1: "កក់ទុកមុនសម្រាប់ម៉ោងរវល់",
      tip2: "រូបធំនៅទំព័រដើមជារូបពិតនៃហាង",
      tip3: "រូបថតគឺជាឧទាហរណ៍ អាចខុសពីពិតបន្តិច",
      copyright: "ចិនក្រហម មជ្ឈមណ្ឌលសម្ផស្ស · រក្សាសិទ្ធិគ្រប់យ៉ាង",
      backToTop: "ឡើងលើវិញ",
    },
  },
};
