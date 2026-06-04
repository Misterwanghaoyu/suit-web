import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export interface Inspiration {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
  };
  story: {
    year: string;
    title: string;
    paragraphs: string[];
  };
  values: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  timeline: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  quote: {
    text: string;
    author: string;
  };
  contact: {
    title: string;
    description: string;
    buttons: Array<{
      text: string;
      variant: string;
    }>;
  };
}

export interface CollectionItem {
  title: string;
  subtitle: string;
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent) as T;
}

// Product data methods
export function getAccessories(): Product[] {
  return readJsonFile<Product[]>('accessories.json');
}

export function getInspirations(): Inspiration[] {
  return readJsonFile<Inspiration[]>('inspirations.json');
}

export function getOuterwear(): Product[] {
  return readJsonFile<Product[]>('outerwear.json');
}

export function getShirts(): Product[] {
  return readJsonFile<Product[]>('shirts.json');
}

export function getSuits(): Product[] {
  return readJsonFile<Product[]>('suits.json');
}

export function getTShirts(): Product[] {
  return readJsonFile<Product[]>('t-shirts.json');
}

// About page data
export function getAboutData(): AboutData {
  return readJsonFile<AboutData>('about.json');
}

// Component data
export function getCollectionItems(): CollectionItem[] {
  return readJsonFile<CollectionItem[]>('collection.json');
}

export function getFeatures(): Feature[] {
  return readJsonFile<Feature[]>('features.json');
}
