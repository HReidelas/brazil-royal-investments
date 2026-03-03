import productAngus from "@/assets/product-angus.jpg";
import productSteaks from "@/assets/product-steaks.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productPremium from "@/assets/product-premium-chicken.jpg";
import productWhole from "@/assets/product-whole-chicken.jpg";
import productSaria from "@/assets/product-saria.jpg";
import productCoffeeTin from "@/assets/product-coffee-tin.jpg";
import productCoffeeBag from "@/assets/product-coffee-bag.jpg";
import type { Translations } from "@/i18n/translations";

export interface ProductItem {
  image: string;
  titleKey: keyof Translations["products"];
  subKey: keyof Translations["products"];
  descKey: keyof Translations["products"];
}

export interface CategoryConfig {
  slug: string;
  nameKey: keyof Translations["products"];
  descKey: keyof Translations["products"];
  products: ProductItem[];
}

export const categories: CategoryConfig[] = [
  {
    slug: "beef",
    nameKey: "beefCategory",
    descKey: "beefCategoryDesc",
    products: [
      { image: productAngus, titleKey: "angusTitle", subKey: "angusSub", descKey: "angusDesc" },
      { image: productSteaks, titleKey: "luxSteaksTitle", subKey: "luxSteaksSub", descKey: "luxSteaksDesc" },
    ],
  },
  {
    slug: "poultry",
    nameKey: "poultryCategory",
    descKey: "poultryCategoryDesc",
    products: [
      { image: productChicken, titleKey: "chickenTitle", subKey: "chickenSub", descKey: "chickenDesc" },
      { image: productPremium, titleKey: "premChickenTitle", subKey: "premChickenSub", descKey: "premChickenDesc" },
      { image: productWhole, titleKey: "wholeTitle", subKey: "wholeSub", descKey: "wholeDesc" },
      { image: productSaria, titleKey: "sariaTitle", subKey: "sariaSub", descKey: "sariaDesc" },
    ],
  },
  {
    slug: "coffee",
    nameKey: "coffee",
    descKey: "coffeeDesc",
    products: [
      { image: productCoffeeTin, titleKey: "coffeeTinTitle", subKey: "coffeeTinSub", descKey: "coffeeTinDesc" },
      { image: productCoffeeBag, titleKey: "coffeeBagTitle", subKey: "coffeeBagSub", descKey: "coffeeBagDesc" },
    ],
  },
  {
    slug: "sugar",
    nameKey: "sugar",
    descKey: "sugarDesc",
    products: [],
  },
  {
    slug: "cereals",
    nameKey: "cereals",
    descKey: "cerealsDesc",
    products: [],
  },
  {
    slug: "oils",
    nameKey: "oils",
    descKey: "oilsDesc",
    products: [],
  },
  {
    slug: "icecream",
    nameKey: "icecream",
    descKey: "icecreamDesc",
    products: [],
  },
  {
    slug: "fuels",
    nameKey: "fuels",
    descKey: "fuelsDesc",
    products: [],
  },
  {
    slug: "food",
    nameKey: "food",
    descKey: "foodDesc",
    products: [],
  },
];
