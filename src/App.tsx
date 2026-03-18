/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Instagram, Twitter, Mail, MapPin, Phone, Globe } from 'lucide-react';

const TRANSLATIONS = {
  ko: {
    brand: "디트로이트 신라 게스트하우스",
    nav: {
      guesthouse: "게스트하우스",
      rentACar: "렌트카",
      airportRide: "공항 픽업",
      mealDelivery: "도시락 배달"
    },
    slogans: [
      "귀하의 신뢰할 수 있는 비즈니스 파트너",
      "원활한 여행, 성공적인 비즈니스",
      "성공에 집중하세요, 나머지는 저희가 책임집니다"
    ],
    hero: {
      support: "글로벌 비즈니스 서포트 — 디트로이트",
      description: `"공항 마중부터 안락한 숙소, 전용 차량과 정갈한 한 끼 도시락까지— 귀하의 미국 출장이 오직 비즈니스 성과에만 집중될 수 있도록 가장 든든한 현지 파트너가 되어드리겠습니다."`,
      viewServices: "서비스 보기"
    },
    services: {
      title: "제공 서비스",
      learnMore: "자세히 보기",
      guesthouse: {
        subtitle: "편안하고 내 집 같은 숙소",
        description: "미국 현지의 따뜻한 싱글 패밀리 하우스에서 내 집 같은 편안함을 누리세요. 넓은 마당과 조용한 주거 단지에서 업무 후 완벽한 휴식을 보장합니다.",
        year: "내 집 같은 편안함"
      },
      rentACar: {
        subtitle: "전용 차량 렌트 서비스",
        description: "현대·기아자동차의 최신형 세단과 SUV를 제공합니다. 익숙한 조작감과 최첨단 안전 사양으로 타지에서도 내 차처럼 편안하고 안전한 주행을 약속합니다.",
        year: "K-모빌리티"
      },
      airportRide: {
        subtitle: "공항 픽업 & 드랍",
        description: "입국부터 출국까지, 낯선 타지에서의 첫걸음을 가장 안전하고 편안하게 안내합니다. 전문 드라이버가 귀하를 기다립니다.",
        year: "트랜스퍼"
      },
      mealDelivery: {
        title: "도시락 배달",
        subtitle: "프리미엄 K-케이터링",
        description: `"타지에서 가장 그리운 것은 정갈한 한국식 집밥입니다. 출장자분들의 건강과 컨디션을 위해 엄선된 식재료로 정성껏 담아낸 프리미엄 한식 도시락을 배달해 드립니다."`,
        features: [
          "• 매일 바뀌는 영양 균형 잡힌 한식 식단",
          "• 따뜻한 국과 정갈한 밑반찬이 포함된 5첩 반상",
          "• 원하는 시간, 원하는 장소로 정시 배송"
        ]
      }
    },
    philosophy: {
      title: "귀하의 비즈니스 목표에 집중하세요, 저희가 돌봐드리겠습니다.",
      p1: "단순한 서비스 제공을 넘어, 타지에서의 외로움이나 불편함을 지워드리는 세심함이 우리의 핵심 가치입니다.",
      p2: "디트로이트 신라 게스트하우스는 귀하가 업무에만 온전히 몰입할 수 있는 완벽한 환경을 조성합니다. 우리는 귀하의 가장 든든한 현지 파트너입니다."
    },
    footer: {
      contactTitle: "귀하의 성공적인 출장을 위해 지금 문의하세요.",
      kakao: "카카오 문의",
      location: "위치",
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
      rights: "© 2024 디트로이트 신라 게스트하우스. All rights reserved."
    }
  },
  en: {
    brand: "Detroit Shilla Guesthouse",
    nav: {
      guesthouse: "Guesthouse",
      rentACar: "Rent-a-car",
      airportRide: "Airport Ride",
      mealDelivery: "Meal Delivery"
    },
    slogans: [
      "Your Reliable Business Partner",
      "Seamless Travel, Successful Business",
      "Focus on Your Success, We Handle the Rest"
    ],
    hero: {
      support: "Global Business Support — Detroit",
      description: `"From airport pickup to comfortable lodging, private vehicles, and clean Korean meals—we will be your most reliable local partner so that your US business trip can focus only on business results."`,
      viewServices: "View Services"
    },
    services: {
      title: "Our Services",
      learnMore: "Learn More",
      guesthouse: {
        subtitle: "Comfortable Home-like Lodging",
        description: "Enjoy the comfort of home in a warm single-family house in the US. We guarantee perfect relaxation after work in a quiet residential complex with a large yard.",
        year: "Home Away From Home"
      },
      rentACar: {
        subtitle: "Private Car Rental Service",
        description: "We provide the latest Hyundai and Kia sedans and SUVs. We promise comfortable and safe driving like your own car even in a foreign land with familiar operation and state-of-the-art safety features.",
        year: "K-Mobility"
      },
      airportRide: {
        subtitle: "Airport Pickup & Drop",
        description: "From entry to exit, we guide your first steps in a foreign land in the safest and most comfortable way. Professional drivers are waiting for you.",
        year: "Transfer"
      },
      mealDelivery: {
        title: "Meal Delivery",
        subtitle: "Premium K-Catering",
        description: `"What you miss most in a foreign land is clean Korean-style home-cooked meals. For the health and condition of business travelers, we deliver premium Korean lunch boxes carefully prepared with selected ingredients."`,
        features: [
          "• Daily changing nutritionally balanced Korean menu",
          "• 5-side dish meal including warm soup and neat side dishes",
          "• On-time delivery to your desired time and place"
        ]
      }
    },
    philosophy: {
      title: "Focus on your Business Goals while we care for you.",
      p1: "Beyond simply providing services, our core value is the meticulousness that erases loneliness or discomfort in a foreign land.",
      p2: "Detroit Shilla Guesthouse creates the perfect environment for you to fully immerse yourself in your work. We are your most reliable local partner."
    },
    footer: {
      contactTitle: "Contact us now for your successful business trip.",
      kakao: "Kakao Inquiry",
      location: "Location",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2024 Detroit Shilla Guesthouse. All rights reserved."
    }
  }
};

const Logo = ({ brand }: { brand: string }) => (
  <motion.div 
    className="flex items-center gap-4 group cursor-pointer"
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative w-10 h-10 flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 border border-white/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-[1px] bg-brand-accent rotate-45 absolute" />
        <div className="w-full h-[1px] bg-brand-accent -rotate-45 absolute" />
        <Globe size={14} className="text-brand-accent relative z-10" />
      </div>
    </div>
    <span className="text-2xl font-serif tracking-widest uppercase">
      {brand}
    </span>
  </motion.div>
);

const NAV_ITEMS = [
  { key: 'guesthouse', id: 'guesthouse' },
  { key: 'rentACar', id: 'rent-a-car' },
  { key: 'airportRide', id: 'airport-ride' },
  { key: 'mealDelivery', id: 'meal-delivery' }
];

const SERVICES_DATA = [
  {
    id: 'guesthouse',
    key: 'guesthouse',
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 'rent-a-car',
    key: 'rentACar',
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 'airport-ride',
    key: 'airportRide',
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlogan, setActiveSlogan] = useState(0);
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlogan((prev) => (prev + 1) % t.slogans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.slogans.length]);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Logo brand={t.brand} />
        </motion.div>

        <div className="hidden lg:flex items-center space-x-12">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-base uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="px-4 py-1 border border-white/30 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            {lang === 'ko' ? 'ENGLISH' : '한국어'}
          </motion.button>
        </div>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-bg z-40 flex flex-col items-center justify-center space-y-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif italic hover:text-brand-accent transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <button
              onClick={() => {
                setLang(lang === 'ko' ? 'en' : 'ko');
                setIsMenuOpen(false);
              }}
              className="text-2xl font-serif italic text-brand-accent"
            >
              {lang === 'ko' ? 'ENGLISH' : '한국어'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent mb-6 block">
              {t.hero.support}
            </span>
            <div className="h-40 md:h-64 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeSlogan + lang}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight"
                >
                  {t.slogans[activeSlogan]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <p className="max-w-2xl text-base md:text-xl leading-relaxed opacity-80 font-serif italic whitespace-pre-line">
              {t.hero.description}
            </p>
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => document.getElementById('guesthouse')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-xs uppercase tracking-widest border-b border-brand-ink/20 pb-1 group-hover:border-brand-ink transition-colors">
                {t.hero.viewServices}
              </span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-serif italic">{t.services.title}</h2>
            <span className="text-[10px] uppercase tracking-widest opacity-50">01 — 04</span>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {SERVICES_DATA.map((service, index) => {
              const s = t.services[service.key as keyof typeof t.services] as any;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                >
                  <div className="w-full md:w-3/5 overflow-hidden group rounded-sm">
                    <img 
                      src={service.image} 
                      alt={s.subtitle}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-2/5 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-widest text-brand-accent">{s.year}</span>
                      <div className="h-[1px] w-12 bg-brand-accent/20"></div>
                      <span className="text-[10px] uppercase tracking-widest opacity-50">{service.id.replace(/-/g, ' ').toUpperCase()}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif tracking-tight">{s.subtitle}</h3>
                    <p className="text-sm md:text-base opacity-60 leading-relaxed max-w-sm">
                      {s.description}
                    </p>
                    <button className="text-xs uppercase tracking-widest border-b border-brand-ink/20 pb-1 hover:border-brand-ink transition-colors">
                      {t.services.learnMore}
                    </button>
                  </div>
                </motion.div>
              );
            })}

            {/* Meal Delivery Section (Special Highlight) */}
            <motion.div
              id="meal-delivery"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-12 md:p-24 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <span className="text-[10px] uppercase tracking-widest text-brand-accent">{t.services.mealDelivery.subtitle}</span>
                <h3 className="text-4xl md:text-6xl font-serif italic">{t.services.mealDelivery.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed font-serif whitespace-pre-line">
                  {t.services.mealDelivery.description}
                </p>
                <ul className="space-y-3 text-sm opacity-60">
                  {t.services.mealDelivery.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square overflow-hidden rounded-full border border-brand-ink/5">
                <img 
                  src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800" 
                  alt="Korean Meal Delivery"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight whitespace-pre-line">
              {t.philosophy.title}
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-80 max-w-md">
              <p>{t.philosophy.p1}</p>
              <p>{t.philosophy.p2}</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Business Environment"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 md:px-12 border-t border-brand-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
            <div className="md:col-span-2 space-y-8">
              <h4 className="text-4xl font-serif italic whitespace-pre-line">{t.footer.contactTitle}</h4>
              <div className="space-y-6">
                <a 
                  href="mailto:shillaguesthouse1301@yahoo.com" 
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="text-xl md:text-3xl tracking-tight border-b border-brand-ink/20 pb-2 hover:border-brand-ink transition-colors block w-fit"
                >
                  shillaguesthouse1301@yahoo.com
                </a>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-ink/80">
                    <Phone size={18} className="text-brand-accent" />
                    <span className="text-lg font-mono tracking-tighter">+1 470 660 1371</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-ink/80">
                    <div className="w-[18px] h-[18px] bg-brand-accent rounded-full flex items-center justify-center text-[10px] text-white font-bold">K</div>
                    <span className="text-lg font-serif italic">{t.footer.kakao} : <span className="font-sans not-italic font-medium ml-1">mingjei1301</span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Services</span>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm hover:text-brand-accent transition-colors">
                      {t.nav[item.key as keyof typeof t.nav]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-widest opacity-50">{t.footer.location}</span>
              <p className="text-sm leading-relaxed flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>
                  Detroit, Michigan <br />
                  United States <br />
                  {t.brand}
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brand-ink/5 gap-4">
            <span className="text-[10px] uppercase tracking-widest opacity-40">{t.footer.rights}</span>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">{t.footer.privacy}</a>
              <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
