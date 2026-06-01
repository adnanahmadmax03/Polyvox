/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  abbreviation: string;
  accentQuote: string;
  region: string;
  badgeText: string;
  iconText: string; // Dynamic character to represent language
}

export interface AcademyFeature {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface WaitlistRecord {
  email: string;
  languages: string[];
  role: string;
  createdAt: string;
}
