import { Product, Stat, Application } from './types';
import { IMAGES } from './assets/images';

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Single Phase Openwell Submersible Pump",
    powerRange: "0.37 kW – 2.2 kW",
    description: "Efficient and compact pumping solution designed for agricultural and domestic water supply applications.",
    category: "Submersible",
    image: IMAGES.products.submersible1
  },
  {
    id: "2",
    name: "Centrifugal Monobloc Pump",
    powerRange: "0.37 kW – 0.75 kW",
    description: "High-efficiency monobloc pump suitable for water transfer and irrigation systems.",
    category: "Monobloc",
    image: IMAGES.products.monobloc1
  },
  {
    id: "3",
    name: "Vertical Openwell Submersible Pump",
    powerRange: "2.2 kW – 15 kW",
    description: "Heavy-duty pump engineered for continuous performance in agricultural applications.",
    category: "Submersible",
    image: IMAGES.products.verticalSubmersible
  },
  {
    id: "4",
    name: "Borewell Submersible Pump",
    powerRange: "0.37 kW – 7.5 kW",
    description: "Reliable borewell pumping system for domestic and farming requirements.",
    category: "Submersible",
    image: IMAGES.products.borewellSub
  },
  {
    id: "5",
    name: "Stainless Steel Borewell Submersible Pump",
    powerRange: "0.37 kW – 18.5 kW",
    description: "Corrosion-resistant stainless steel pump designed for high durability and efficiency.",
    category: "Submersible",
    image: IMAGES.products.ssBorewell
  },
  {
    id: "6",
    name: "Vertical Monobloc Dewatering Submersible Pump",
    powerRange: "0.75 kW – 1.8 kW",
    description: "Ideal solution for drainage and dewatering operations.",
    category: "Submersible",
    image: IMAGES.products.dewatering
  },
  {
    id: "7",
    name: "Three Phase Openwell Submersible Pump",
    powerRange: "2.2 kW – 15 kW",
    description: "Powerful pumping system suitable for large-scale agricultural applications.",
    category: "Submersible",
    image: IMAGES.products.threePhaseOpen
  },
  {
    id: "8",
    name: "Three Phase Centrifugal Monobloc Pump",
    powerRange: "0.37 kW – 15 kW",
    description: "Industrial-grade pump for efficient water transfer and heavy-duty applications.",
    category: "Monobloc",
    image: IMAGES.products.industrialMonobloc
  },
  {
    id: "9",
    name: "Pressure Booster Pump",
    powerRange: "0.37 kW – 1.1 kW",
    description: "Designed to maintain consistent water pressure in domestic and commercial systems.",
    category: "Booster",
    image: IMAGES.products.booster
  },
  {
    id: "10",
    name: "Single Phase Vertical Openwell Pump",
    powerRange: "0.37 kW – 2.2 kW",
    description: "Compact and efficient vertical pump solution for daily water supply needs.",
    category: "Submersible",
    image: IMAGES.products.verticalOpen
  },
  {
    id: "11",
    name: "Control Panels",
    powerRange: "Single / Three Phase",
    description: "Reliable motor control systems engineered for safe and smooth pump operations.",
    category: "Accessories",
    image: IMAGES.products.controlPanel
  },
  {
    id: "12",
    name: "Single / Three Phase Centrifugal Monobloc Pump",
    powerRange: "2.2 kW – 15 kW",
    description: "High-performance centrifugal pump designed for industrial and agricultural operations.",
    category: "Monobloc",
    image: IMAGES.products.heavyMonobloc
  },
  {
    id: "13",
    name: "Single Phase Self Priming Mini Monobloc",
    powerRange: "0.18 kW – 1.1 kW",
    description: "Compact self-priming pump ideal for domestic water applications.",
    category: "Monobloc",
    image: IMAGES.products.miniMonobloc
  },
  {
    id: "14",
    name: "Single Stage Mini Monobloc",
    powerRange: "0.18 kW – 1.1 kW",
    description: "Efficient and lightweight mini monobloc pump for household use.",
    category: "Monobloc",
    image: IMAGES.products.monobloc1
  },
  {
    id: "15",
    name: "Self Priming Centrifugal Jet Pumpsets",
    powerRange: "0.37 kW – 0.75 kW",
    description: "Reliable self-priming jet pump designed for smooth water flow applications.",
    category: "Jet Pumps",
    image: IMAGES.products.jetPumps
  }
];

export const STATS: Stat[] = [
  { label: "Years of Excellence", value: "10", suffix: "+" },
  { label: "Satisfied Customers", value: "1000", suffix: "+" },
  { label: "Pump Categories", value: "15", suffix: "+" },
  { label: "Certified Manufacturing", value: "ISO" }
];

export const APPLICATIONS: Application[] = [
  {
    title: "Agriculture",
    description: "Efficient irrigation and farming water management solutions.",
    icon: "Sprout"
  },
  {
    title: "Domestic",
    description: "Reliable water supply systems for homes and residential buildings.",
    icon: "Home"
  },
  {
    title: "Industrial",
    description: "Heavy-duty pumping systems for industrial operations.",
    icon: "Factory"
  },
  {
    title: "Commercial",
    description: "Pressure and water transfer systems for commercial environments.",
    icon: "Building2"
  }
];

export const CONTACT_INFO = {
  address: "6/180 - A, Arasamara Thottam, Thudiyalur Road, Vaiyampalayam, Coimbatore, Tamil Nadu - 641110",
  phones: ["+91 86106 19891", "+91 96262 15925"],
  email: "ranpumpsindustries@gmail.com",
  whatsapp: "918610619891"
};
