export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  type: string;
  status: string;
  title: RenderedContent<string>;
  content: RenderedContent<string>;
  excerpt: RenderedContent<string>;
  yoast_head_json: YoastHeadJSON;
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
