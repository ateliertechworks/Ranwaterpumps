export interface Product {
  id: string;
  name: string;
  powerRange: string;
  description: string;
  image: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Application {
  title: string;
  description: string;
  icon: string;
}
