export interface ICard {
  id: number;
  image: string;
  title: string;
  using: string;
  language: string;
  updated: string;
  urlDemo: string;
  urlCode: string;
  publishData: number; // unix time
}

export interface ICardAction {
  url: string;
  clsName: string;
  text: string;
  icon: string;
}

export interface ICardInfoText {
  title: string;
  content: string | undefined;
}

export interface ITitle {
  text: string;
  icon: string;
}

export interface ICarouselImageProps {
  current: number;
  index: number;
  image: string;
}

export interface ICarouselInfoProps {
  title: string;
  updated: string;
}

export interface ICarouselArrowProps {
  icon: string;
  changeSlide: () => void;
}

export interface ICarouselDotProps {
  current: number;
  index: number;
  setCurrent: () => void;
}

export interface IFooterLink {
  url: string;
  clsName: string;
}

export interface ISettingsItem {
  text?: string;
  isActive: boolean;
  click?: () => void;
}
