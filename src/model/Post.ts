export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  type: string;
  status: string;
  categories: string[];
  tags: string[];
  author: Author;
  title: RenderedContent<string>;
  content: RenderedContent<string>;
  excerpt: RenderedContent<string>;
  yoast_head_json: YoastHeadJSON;
  yoast_head: string;
}

export interface Avatars {
  24: string;
  48: string;
  96: string;
  128: string;
}

export interface Author {
  avatar_urls: Avatars;
  description: string;
  name: string;
  id: number;
}

export interface YoastHeadJSON {
  title: string;
  og_title: string;
  og_description: string;
  article_published_time: string;
  article_modified_time: string;
  og_image: YoastOGImage[];
  author: string;
}

export interface YoastOGImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

interface RenderedContent<T> {
  rendered: T;
}
