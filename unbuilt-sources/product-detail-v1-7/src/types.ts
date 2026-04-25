/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TechnicalSnapshot {
  label: string;
  value: string;
  unit?: string;
  icon?: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface SpecGroup {
  groupName: string;
  specs: {
    key: string;
    value: string;
  }[];
}

export interface DownloadFile {
  name: string;
  type: 'PDF' | 'DOC' | 'DWG' | 'IMG';
  size: string;
  url: string;
}

export interface ProductOption {
  id: string;
  name: string;
  voltage: string;
  capacity: string;
  energy: string;
  isActive?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  sku: string;
  category: string;
  name: string;
  shortDescription: string;
  mainImage: string;
  gallery: string[];
  snapshot: TechnicalSnapshot[];
  benefits: Benefit[];
  applications: string[];
  compatibility: string[];
  techSpecs: SpecGroup[];
  familyOptions: ProductOption[];
  downloads: DownloadFile[];
  faqs: FAQItem[];
}
