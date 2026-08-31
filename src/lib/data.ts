import {
  BOOK,
  synopsis as synopsisContent,
  authorBio as authorBioContent,
  sampleChapters as sampleChaptersContent,
  buyLinks as buyLinksContent,
} from './constants';
import type { SampleChapter } from './definitions';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  category: 'Spiritual';
}

export const books: Book[] = [
  {
    ...BOOK,
    category: 'Spiritual',
  },
];

export const synopsis = synopsisContent;
export const authorBio = authorBioContent;
export const sampleChapters: SampleChapter[] = sampleChaptersContent;
export const buyLinks = buyLinksContent;