export interface ProductType {
  image: string | null;
  title: string;
  category: string;
  note: string;
  price?: string;
  type?: "ad" | string;
}
