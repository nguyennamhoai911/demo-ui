export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  shortDescription: string;
  mainImage: string;
  gallery: ProductMedia[];
  snapshot: TechnicalSnapshot[];
  benefits: string[];
  applications: string[];
  options: ProductOption[];
  specs: SpecGroup[];
  downloads: DownloadFile[];
  warranty: string;
  relatedProducts: RelatedProduct[];
}

export interface ProductMedia {
  url: string;
  type: 'image' | 'video';
  thumbnail: string;
}

export interface TechnicalSnapshot {
  label: string;
  value: string;
  unit?: string;
  icon?: string;
}

export interface SpecGroup {
  groupName: string;
  items: { label: string; value: string }[];
}

export interface ProductOption {
  id: string;
  label: string;
  isActive: boolean;
}

export interface DownloadFile {
  name: string;
  format: string;
  size: string;
  url: string;
}

export interface RelatedProduct {
  id: string;
  name: string;
  image: string;
  sku: string;
  mainSpec: string;
}
