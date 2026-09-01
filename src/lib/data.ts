import {
  BOOK,
  synopsis as synopsisContent,
  authorBio as authorBioContent,
  sampleChapters as sampleChaptersContent,
  allChapters as allChaptersContent,
  buyLinks as buyLinksContent,
  BLOG as BLOGContent,
  blogPosts as blogPostsContent,
} from './constants';
import type { SampleChapter } from './definitions';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  category: 'Spiritual Philosophy';
}

export const books: Book[] = [
  {
    ...BOOK,
    category: 'Spiritual Philosophy',
  },
];

export const synopsis = synopsisContent;
export const authorBio = authorBioContent;
export const sampleChapters: SampleChapter[] = sampleChaptersContent;
export const allChapters = allChaptersContent;
export const buyLinks = buyLinksContent;
export const BLOG = BLOGContent;
export const blogPosts = blogPostsContent;

export type BlogPost = (typeof blogPostsContent)[number];
export type Chapter = (typeof allChaptersContent)[number];
