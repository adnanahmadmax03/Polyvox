/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, AcademyFeature } from './types';

export const LANGUAGES: Language[] = [
  {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    abbreviation: 'FR',
    accentQuote: 'La langue de l’amour et de l’esprit.',
    region: 'Europe, Africa & Canada',
    badgeText: 'Romance',
    iconText: 'Fr'
  },
  {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    abbreviation: 'ES',
    accentQuote: 'El idioma de la pasión y el ritmo.',
    region: 'Americas & Europe',
    badgeText: 'Romance',
    iconText: 'Es'
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    abbreviation: 'DE',
    accentQuote: 'Die Sprache der Dichter und Denker.',
    region: 'Europe & Tech Hubs',
    badgeText: 'Germanic',
    iconText: 'De'
  },
  {
    id: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    abbreviation: 'JA',
    accentQuote: '和を重んじる、優美な響き。',
    region: 'East Asia',
    badgeText: 'East Asian',
    iconText: '日'
  },
  {
    id: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    abbreviation: 'KO',
    accentQuote: '한글의 과학적 아름다움과 깊이.',
    region: 'East Asia',
    badgeText: 'East Asian',
    iconText: '한'
  },
  {
    id: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    abbreviation: 'RU',
    accentQuote: 'Язык великой литературы и космоса.',
    region: 'Eurasia',
    badgeText: 'Slavic',
    iconText: 'Ру'
  },
  {
    id: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    abbreviation: 'IT',
    accentQuote: 'Il dolce suono della cultura e dell’arte.',
    region: 'Europe',
    badgeText: 'Romance',
    iconText: 'It'
  },
  {
    id: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    abbreviation: 'PT',
    accentQuote: 'A expressão calorosa da lusofonia.',
    region: 'South America, Europe & Africa',
    badgeText: 'Romance',
    iconText: 'Pt'
  },
  {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    abbreviation: 'EN',
    accentQuote: 'The global bridge for professional ideas.',
    region: 'Global Connect',
    badgeText: 'Germanic',
    iconText: 'En'
  },
  {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    abbreviation: 'AR',
    accentQuote: 'لغة البيان والبلاغة والعمق الثقافي.',
    region: 'Middle East & North Africa',
    badgeText: 'Semitic',
    iconText: 'ع'
  },
  {
    id: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    abbreviation: 'ZH',
    accentQuote: '千年的智慧与现代商业之桥。',
    region: 'East Asia & Commerce',
    badgeText: 'Sino-Tibetan',
    iconText: '中'
  },
  {
    id: 'uz',
    name: 'Uzbek',
    nativeName: 'Oʻzbek',
    abbreviation: 'UZ',
    accentQuote: 'Kuch – adolatdadir. (Power is in justice.)',
    region: 'Central Asia & Silk Road',
    badgeText: 'Turkic',
    iconText: 'Uz'
  },
  {
    id: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    abbreviation: 'FA',
    accentQuote: 'بی همگان بسر شود، بی‌تو بسر نمی‌شود.',
    region: 'Western & Central Asia',
    badgeText: 'Indo-Iranian',
    iconText: 'فا'
  },
  {
    id: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    abbreviation: 'TR',
    accentQuote: 'Yurtta sulh, cihanda sulh.',
    region: 'Eurasia & Mediterranean',
    badgeText: 'Turkic',
    iconText: 'Tr'
  }
];

export const FEATURES: AcademyFeature[] = [
  {
    id: 'live-classes',
    title: 'Live Interactive Classes',
    description: 'Speak from day one. Participate in rigorous, small-group seminars guided by elite educators to develop conversational fluency under guidance.',
    tag: 'Synchronous'
  },
  {
    id: 'expert-mentors',
    title: 'Expert Coaching & Mentorship',
    description: 'Achieve absolute cultural integration with modern 1-on-1 performance advice, precise feedback, and professional diagnostic sessions.',
    tag: '1-on-1 Guidance'
  },
  {
    id: 'free-demo',
    title: 'Free Demo Class',
    description: 'Experience Polyvox before enrolling. Join a free interactive demo class and discover our teaching approach, learning platform, and language programs firsthand.',
    tag: 'Free Trial Access'
},
  {
    id: 'live-doubt',
    title: 'Extra Live Doubt Sessions',
    description: 'Get additional support through dedicated live doubt-solving sessions where learners can ask questions, practice speaking, and strengthen concepts with expert guidance.',
    tag: 'Student Support'
}
];
