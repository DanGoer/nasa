import React from "react";

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavBarLinksI {
  toggleNav: (() => void) | undefined;
}

export interface SocialIconsI {
  name: string;
  viewBox: string;
  svg: string;
  link: string;
}

export interface SocialListI {
  name: string;
  link: string;
}

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CustomLinkI {
  to: string;
  children: string;
  className: string;
  "aria-label": string;
  onClick: () => void;
  key: string;
}

export interface GenericCardI {
  children: JSX.Element | JSX.Element[];
  added: string;
}

export interface NavBarLinksI {
  toggleNav: (() => void) | undefined;
}

export interface Props {
  children: React.ReactNode;
}

export interface InfoModalI {
  text: string;
  showModal: boolean;
  setShowModal: (arg0: boolean) => void;
  buttontext: string;
}
export interface UniverseButtonI {
  setter: () => void;
  text: string;
  icon: { New: Element };
}

export interface BannerI {
  bannerContent: any;
  link: string;
  setBanner: (arg0: boolean) => void;
}

export interface AccordionI {
  children?: JSX.Element | JSX.Element[];
  item: any;
  index: number;
}

export interface ButtonBackgroundCardI {
  children?: JSX.Element | JSX.Element[];
}

export interface DividerButtonI {
  link: string;
  name: string;
}

export interface HRIconI {
  view: string;
  path?: JSX.Element | JSX.Element[];
}

export interface LinkCardI {
  content: any;
  translation: Object;
}

export interface StatisticsI {
  cardOne: string;
  cardTwo: string;
  cardThree: string;
  cardFour: string;
  title: any;
  typeOfStatistics: string;
}

export interface ToolBarI {
  handleDate: (d: number) => void;
}

export interface MrpImage {
  img_src: string;
  camera?: any;
  full_name?: string;
}
export interface CarouselI {
  data: MrpImage[];
  Camera: string;
  setModal: React.Dispatch<React.SetStateAction<MrpImage[]>>;
}

export interface ModalI {
  modal: MrpImage[];
  setModal: React.Dispatch<React.SetStateAction<MrpImage[]>>;
}

export interface GalleryMRPI {
  data: MrpImage[];
  setModal: React.Dispatch<React.SetStateAction<MrpImage[]>>;
}
