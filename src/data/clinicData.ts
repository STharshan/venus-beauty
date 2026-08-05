import { Treatment, SkinConcern, BeforeAfterResult, StepProcess, ClinicFeature, GoogleReview } from '../types';

import heroModelImg from '../assets/images/hero_model_treatment_1785863788586.jpg';
import clinicInteriorImg from '../assets/images/clinic_interior_main_1785863802612.jpg';
import leafBannerImg from '../assets/images/botanical_leaf_banner_1785863817598.jpg';
import lip from "../assets/images/lip.png"
import lipbefore from "../assets/images/lip_before.png"
import lipafter from "../assets/images/lip_after.png"


export const HERO_MODEL_IMAGE = heroModelImg;
export const CLINIC_INTERIOR_IMAGE = clinicInteriorImg;
export const LEAF_BANNER_IMAGE = leafBannerImg;

export const TREATMENTS: Treatment[] = [
  {
    id: 'anti-wrinkle',
    title: 'Anti-Wrinkle Treatments',
    subtitle: 'Botulinum Toxin Injections',
    shortDescription: 'Relax lines and prevent wrinkles for a smoother, refreshed look.',
    fullDescription: 'Our anti-wrinkle injections target dynamic facial lines caused by muscle contractions, such as forehead lines, crow\'s feet, and frown lines between the brows. Using FDA-approved muscle relaxants, we achieve smooth, natural-looking results that preserve your natural facial expressions while reducing signs of aging.',
    price: 'From £180',
    duration: '30 mins',
    downtime: 'None (1-2 hours mild redness)',
    resultsLast: '3 - 4 months',
    category: 'injectables',
    image: heroModelImg,
    benefits: [
      'Softens dynamic lines & wrinkles',
      'Prevents deeper set creases from forming',
      'Quick procedure with minimal downtime',
      'Preserves natural facial mobility and expressions'
    ],
    idealFor: ['Forehead creases', 'Crow\'s feet around eyes', 'Frown lines (11s)', 'Bunny lines']
  },
  {
    id: 'lip-enhancement',
    title: 'Lip Enhancement',
    subtitle: 'Hyaluronic Acid Dermal Fillers',
    shortDescription: 'Enhance volume, shape and definition for natural, beautiful lips.',
    fullDescription: 'Customized lip filler treatments designed to restore volume, define the vermilion border, correct asymmetry, and hydrate lip tissue using ultra-premium hyaluronic acid fillers. Our technique prioritizes subtle, harmonious proportions tailored to your facial structure.',
    price: 'From £220',
    duration: '45 mins',
    downtime: '1-3 days mild swelling',
    resultsLast: '6 - 12 months',
    category: 'injectables',
    image: lip,
    benefits: [
      'Enhances natural lip border definition',
      'Restores lost youthful volume',
      'Corrects lip asymmetry subtly',
      'Intense hydration for smooth lip texture'
    ],
    idealFor: ['Thin lips', 'Asymmetrical lips', 'Smoker lines around mouth', 'Loss of lip hydration']
  },
  {
    id: 'skin-boosters',
    title: 'Skin Boosters',
    subtitle: 'Profhilo & Seventy Hyal',
    shortDescription: 'Deep hydration to plump, refine, and cultivate healthy skin.',
    fullDescription: 'Skin boosters are injectable hyaluronic acid treatments formulated to bio-remodel skin from within. Rather than adding volume, they stimulate elastin and collagen production, significantly improving skin elasticity, tone, and deep hydration for a radiant glow.',
    price: 'From £250',
    duration: '30 mins',
    downtime: 'Minimal (small bumps for 12-24h)',
    resultsLast: '6 - 9 months',
    category: 'rejuvenation',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    benefits: [
      'Deep cellular skin hydration',
      'Stimulates collagen and elastin synthesis',
      'Improves skin firmness and crepey texture',
      'Restores natural luminous glow'
    ],
    idealFor: ['Dull or dehydrated skin', 'Laxity on face & neck', 'Fine surface crepey texture', 'Pre-event skin prep']
  },
  {
    id: 'microneedling-rf',
    title: 'Microneedling & RF',
    subtitle: 'Dermapen 4 & Radiofrequency',
    shortDescription: 'Stimulate collagen and improve texture, tone and elasticity.',
    fullDescription: 'Combining micro-channeling with therapeutic radiofrequency energy to trigger the skin\'s natural healing cascade. This dual action tightens sagging tissues, reduces acne scar depth, shrinks enlarged pores, and refines overall skin surface texture.',
    price: 'From £195',
    duration: '60 mins',
    downtime: '24-48 hours mild pinkness',
    resultsLast: 'Cumulative & Long-lasting',
    category: 'rejuvenation',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    benefits: [
      'Reduces acne scarring & textural roughness',
      'Tightens pores & smooths fine lines',
      'Stimulates deep dermal remodeling',
      'Improves skincare product absorption'
    ],
    idealFor: ['Acne scars', 'Enlarged pores', 'Mild skin sagging', 'Uneven texture']
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    subtitle: 'Medical Grade AHA/BHA & BioRePeel',
    shortDescription: 'Reveal brighter, smoother skin and target a range of concerns.',
    fullDescription: 'Our medical-grade chemical peels resurface the epidermis by dissolving intercellular cement. Tailored solutions treat hyperpigmentation, active congestion, sun damage, and dullness to reveal fresh, luminous skin with refined clarity.',
    price: 'From £120',
    duration: '45 mins',
    downtime: '0-3 days light flaking',
    resultsLast: '1 - 3 months',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600',
    benefits: [
      'Fades dark spots and sun pigmentation',
      'Clears clogged pores & congestion',
      'Smooths rough superficial skin layers',
      'Promotes cellular turnover'
    ],
    idealFor: ['Hyperpigmentation', 'Melasma', 'Blemish-prone skin', 'Dull tone']
  },
  {
    id: 'fat-dissolving',
    title: 'Fat Dissolving',
    subtitle: 'Lemon Bottle & Aqualyx',
    shortDescription: 'Target stubborn fat for a more contoured, defined appearance.',
    fullDescription: 'Non-surgical targeted lipolysis injections designed to break down stubborn localized fat pockets under the chin (double chin) or body contour areas. Disrupted fat cells are naturally metabolized and removed by the lymphatic system.',
    price: 'From £160',
    duration: '40 mins',
    downtime: '2-5 days mild tenderness',
    resultsLast: 'Permanent with stable weight',
    category: 'body',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    benefits: [
      'Non-surgical fat reduction',
      'Refines jawline & submental profile',
      'Targets resistant fat deposits',
      'Permanent elimination of targeted fat cells'
    ],
    idealFor: ['Double chin', 'Jowl definition', 'Small stubborn fat bulges', 'Jawline contouring']
  }
];

export const SKIN_CONCERNS: SkinConcern[] = [
  {
    id: 'fine-lines',
    title: 'Fine Lines & Wrinkles',
    iconName: 'Sparkles',
    description: 'Expression lines, crow\'s feet, or forehead creases caused by repetitive muscle movement or collagen degradation.',
    recommendedTreatmentIds: ['anti-wrinkle', 'skin-boosters', 'microneedling-rf']
  },
  {
    id: 'volume-loss',
    title: 'Volume Loss',
    iconName: 'Maximize2',
    description: 'Depleted cheeks, thinning lips, or hollow mid-face contours associated with natural facial fat reduction.',
    recommendedTreatmentIds: ['lip-enhancement', 'skin-boosters']
  },
  {
    id: 'acne-scarring',
    title: 'Acne Scarring',
    iconName: 'Grid',
    description: 'Post-inflammatory marks, pitted texture, or uneven skin surface resulting from previous acne breakouts.',
    recommendedTreatmentIds: ['microneedling-rf', 'chemical-peels']
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Sun Damage',
    iconName: 'Sun',
    description: 'Sun spots, freckles, age spots, or melasma patches created by excess melanin production.',
    recommendedTreatmentIds: ['chemical-peels', 'skin-boosters', 'microneedling-rf']
  },
  {
    id: 'uneven-tone',
    title: 'Uneven Skin Tone',
    iconName: 'Layers',
    description: 'Discoloration, blotchiness, or lack of skin uniformity affecting overall facial brightness.',
    recommendedTreatmentIds: ['chemical-peels', 'skin-boosters']
  },
  {
    id: 'dull-skin',
    title: 'Dull & Tired Skin',
    iconName: 'Zap',
    description: 'Sluggish skin renewal, fatigue, environmental stressors, or dehydrated skin lacking natural radiance.',
    recommendedTreatmentIds: ['skin-boosters', 'chemical-peels']
  },
  {
    id: 'hydration-dryness',
    title: 'Hydration & Dryness',
    iconName: 'Droplets',
    description: 'Flaky, tight, compromised skin barrier unable to retain essential moisture reserves.',
    recommendedTreatmentIds: ['skin-boosters', 'chemical-peels']
  },
  {
    id: 'rosacea-redness',
    title: 'Rosacea & Redness',
    iconName: 'HeartHandshake',
    description: 'Persistent facial flushing, visible capillaries, or sensitive skin prone to redness.',
    recommendedTreatmentIds: ['skin-boosters', 'chemical-peels']
  }
];

export const STEP_PROCESS: StepProcess[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We listen to your goals and assess your needs in a relaxed, private setting.',
    iconName: 'Search'
  },
  {
    number: '02',
    title: 'Treatment Plan',
    description: 'A personalised plan is created just for you with full transparency on options.',
    iconName: 'FileText'
  },
  {
    number: '03',
    title: 'Your Appointment',
    description: 'Expert care using advanced medical-grade techniques and premium products.',
    iconName: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Aftercare Support',
    description: 'We\'re here to support your results every step of the way with dedicated follow-ups.',
    iconName: 'Heart'
  }
];

export const BEFORE_AFTER_RESULTS: BeforeAfterResult[] = [
  {
    id: 'result-lip',
    treatmentName: 'Lip Enhancement',
    category: 'Injectables',
    beforeImage: lipbefore,
    afterImage: lipafter,
    details: '0.7ml premium HA dermal filler applied focusing on vermilion definition and subtle volume balance.',
    sessionCount: '1 Session',
    timeframe: 'Immediate Result'
  },
  {
    id: 'result-antiwrinkle',
    treatmentName: 'Anti-Wrinkle Treatment',
    category: 'Injectables',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=500',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500',
    details: 'Glabellar and forehead lines treated while keeping natural brow movement.',
    sessionCount: '1 Session',
    timeframe: '14 Days Post-Treatment'
  },
  {
    id: 'result-boosters',
    treatmentName: 'Skin Boosters',
    category: 'Rejuvenation',
    beforeImage: heroModelImg,
    afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500',
    details: 'Profhilo 2-step treatment for facial hydration, texture smoothing, and natural radiant glow.',
    sessionCount: '2 Sessions (4 weeks apart)',
    timeframe: '6 Weeks Post-Treatment'
  }
];

export const WHY_CHOOSE_US: ClinicFeature[] = [
  {
    title: 'Medical Expertise',
    description: 'Fully qualified and highly trained practitioners with clinical background.',
    iconName: 'Award'
  },
  {
    title: 'Natural Results',
    description: 'Subtle enhancements that look and feel natural, never overdone.',
    iconName: 'Sparkles'
  },
  {
    title: 'Premium Products',
    description: 'We use only trusted, medical-grade brands with extensive safety profiles.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Client Care',
    description: 'Your safety, comfort and satisfaction come first from consultation to aftercare.',
    iconName: 'Heart'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Sophie M.',
    rating: 5,
    date: '1 week ago',
    comment: 'The most discreet, attentive clinic I have ever visited! The lip enhancement looks so subtle and natural. Cannot recommend Venus Beauty Aesthetics enough!',
    treatment: 'Lip Enhancement'
  },
  {
    id: 'rev-2',
    author: 'Emma R.',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Profhilo skin booster completely transformed my skin texture before my wedding. The clinic environment is so calm and pristine.',
    treatment: 'Skin Boosters'
  },
  {
    id: 'rev-3',
    author: 'Charlotte T.',
    rating: 5,
    date: '1 month ago',
    comment: 'I was nervous about anti-wrinkle injections, but the practitioner took time to explain everything thoroughly. Results are amazing and subtle!',
    treatment: 'Anti-Wrinkle'
  }
];

export const CLINIC_GALLERY = [
  {
    url: clinicInteriorImg,
    caption: 'Main Treatment Suite - Calm, Pristine & Private'
  },
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    caption: 'Relaxing Reception & Consultation Lounge'
  },
  {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    caption: 'Medical-Grade Skincare & Hydration Bar'
  }
];
