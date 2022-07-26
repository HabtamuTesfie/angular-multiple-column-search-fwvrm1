
export class SearchModel {
  userId: number;
  title: string;
  body: string;
}

export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}