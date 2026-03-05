import companyLogo from "@/assets/logo.jpg";
import productAngus from "@/assets/product-angus.jpg";
import productSteaks from "@/assets/product-steaks.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productPremium from "@/assets/product-premium-chicken.jpg";
import productWhole from "@/assets/product-whole-chicken.jpg";
import productSaria from "@/assets/product-saria.jpg";
import productCoffeeTin from "@/assets/product-coffee-tin.jpg";
import productCoffeeBag from "@/assets/product-coffee-bag.jpg";
import productOliveOil from "@/assets/product-olive-oil.jpg";
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
      { image: productSteaks, titleKey: "beefRibsTitle", subKey: "beefRibsSub", descKey: "beefRibsDesc" },
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
      { image: productPremium, titleKey: "drumstickTitle", subKey: "drumstickSub", descKey: "drumstickDesc" },
    ],
  },
  {
    slug: "coffee",
    nameKey: "coffee",
    descKey: "coffeeDesc",
    products: [
      { image: productCoffeeTin, titleKey: "coffeeTinTitle", subKey: "coffeeTinSub", descKey: "coffeeTinDesc" },
      { image: productCoffeeBag, titleKey: "coffeeBagTitle", subKey: "coffeeBagSub", descKey: "coffeeBagDesc" },
      { image: productCoffeeTin, titleKey: "instantCoffeeTitle", subKey: "instantCoffeeSub", descKey: "instantCoffeeDesc" },
    ],
  },
  {
    slug: "sugar",
    nameKey: "sugar",
    descKey: "sugarDesc",
    products: [
      { image: companyLogo, titleKey: "sugarIcumsaTitle", subKey: "sugarIcumsaSub", descKey: "sugarIcumsaDesc" },
    ],
  },
  {
    slug: "cereals",
    nameKey: "cereals",
    descKey: "cerealsDesc",
    products: [
      { image: companyLogo, titleKey: "yellowCornTitle", subKey: "yellowCornSub", descKey: "yellowCornDesc" },
    ],
  },
  {
    slug: "oils",
    nameKey: "oils",
    descKey: "oilsDesc",
    products: [
      { image: productOliveOil, titleKey: "oliveOilTitle", subKey: "oliveOilSub", descKey: "oliveOilDesc" },
      { image: productOliveOil, titleKey: "avocadoOilTitle", subKey: "avocadoOilSub", descKey: "avocadoOilDesc" },
    ],
  },
  {
    slug: "icecream",
    nameKey: "icecream",
    descKey: "icecreamDesc",
    products: [
      { image: companyLogo, titleKey: "vanillaGelatoTitle", subKey: "vanillaGelatoSub", descKey: "vanillaGelatoDesc" },
    ],
  },
  {
    slug: "fuels",
    nameKey: "fuels",
    descKey: "fuelsDesc",
    products: [
      { image: companyLogo, titleKey: "dieselTitle", subKey: "dieselSub", descKey: "dieselDesc" },
    ],
  },
  {
    slug: "food",
    nameKey: "food",
    descKey: "foodDesc",
    products: [
      { image: companyLogo, titleKey: "tomatoPasteTitle", subKey: "tomatoPasteSub", descKey: "tomatoPasteDesc" },
    ],
  },
];
