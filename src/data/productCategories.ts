import companyLogo from "@/assets/logo.png";
import productSugar from "@/assets/product-sugar.png";
import productFuels from "@/assets/product-fuels.png";
import productCereals from "@/assets/product-cereals.png";
import productIcecream from "@/assets/product-icecream.png";
import productFood from "@/assets/product-food.png";
import productAngus from "@/assets/product-angus.jpg";
import productSteaks from "@/assets/product-steaks.jpg";
import productBeefRibs from "@/assets/product-beef-ribs.jpg";
import productFiletMignon from "@/assets/product-filet-mignon.jpg";
import productChicken from "@/assets/product-chicken.jpg";
import productPremium from "@/assets/product-premium-chicken.jpg";
import productWhole from "@/assets/product-whole-chicken.jpg";
import productSaria from "@/assets/product-saria.jpg";
import productDrumstick from "@/assets/product-drumstick.jpg";
import productCoffeeTin from "@/assets/product-coffee-tin.jpg";
import productCoffeeBag from "@/assets/product-coffee-bag.jpg";
import productInstantCoffee from "@/assets/product-instant-coffee.jpg";
import productSpecialtyCoffee from "@/assets/product-specialty-coffee.jpg";
import productOliveOil from "@/assets/product-olive-oil.jpg";
import productAvocadoOil from "@/assets/product-avocado-oil.jpg";
import productCoconutOil from "@/assets/product-coconut-oil.jpg";
import productBrownSugar from "@/assets/product-brown-sugar.jpg";
import productSoybeans from "@/assets/product-soybeans.jpg";
import productChocolateGelato from "@/assets/product-chocolate-gelato.jpg";
import productIronOre from "@/assets/product-iron-ore.jpg";
import productCannedFish from "@/assets/product-canned-fish.jpg";
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
      { image: productBeefRibs, titleKey: "beefRibsTitle", subKey: "beefRibsSub", descKey: "beefRibsDesc" },
      { image: productFiletMignon, titleKey: "filetMignonTitle", subKey: "filetMignonSub", descKey: "filetMignonDesc" },
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
      { image: productDrumstick, titleKey: "drumstickTitle", subKey: "drumstickSub", descKey: "drumstickDesc" },
    ],
  },
  {
    slug: "coffee",
    nameKey: "coffee",
    descKey: "coffeeDesc",
    products: [
      { image: productCoffeeTin, titleKey: "coffeeTinTitle", subKey: "coffeeTinSub", descKey: "coffeeTinDesc" },
      { image: productCoffeeBag, titleKey: "coffeeBagTitle", subKey: "coffeeBagSub", descKey: "coffeeBagDesc" },
      { image: productInstantCoffee, titleKey: "instantCoffeeTitle", subKey: "instantCoffeeSub", descKey: "instantCoffeeDesc" },
      { image: productSpecialtyCoffee, titleKey: "specialtyCoffeeTitle", subKey: "specialtyCoffeeSub", descKey: "specialtyCoffeeDesc" },
    ],
  },
  {
    slug: "sugar",
    nameKey: "sugar",
    descKey: "sugarDesc",
    products: [
      { image: productSugar, titleKey: "sugarIcumsaTitle", subKey: "sugarIcumsaSub", descKey: "sugarIcumsaDesc" },
      { image: productBrownSugar, titleKey: "brownSugarTitle", subKey: "brownSugarSub", descKey: "brownSugarDesc" },
    ],
  },
  {
    slug: "cereals",
    nameKey: "cereals",
    descKey: "cerealsDesc",
    products: [
      { image: productCereals, titleKey: "yellowCornTitle", subKey: "yellowCornSub", descKey: "yellowCornDesc" },
      { image: productSoybeans, titleKey: "soybeansTitle", subKey: "soybeansSub", descKey: "soybeansDesc" },
    ],
  },
  {
    slug: "oils",
    nameKey: "oils",
    descKey: "oilsDesc",
    products: [
      { image: productOliveOil, titleKey: "oliveOilTitle", subKey: "oliveOilSub", descKey: "oliveOilDesc" },
      { image: productAvocadoOil, titleKey: "avocadoOilTitle", subKey: "avocadoOilSub", descKey: "avocadoOilDesc" },
      { image: productCoconutOil, titleKey: "coconutOilTitle", subKey: "coconutOilSub", descKey: "coconutOilDesc" },
    ],
  },
  {
    slug: "icecream",
    nameKey: "icecream",
    descKey: "icecreamDesc",
    products: [
      { image: productIcecream, titleKey: "vanillaGelatoTitle", subKey: "vanillaGelatoSub", descKey: "vanillaGelatoDesc" },
      { image: productChocolateGelato, titleKey: "chocolateGelatoTitle", subKey: "chocolateGelatoSub", descKey: "chocolateGelatoDesc" },
    ],
  },
  {
    slug: "fuels",
    nameKey: "fuels",
    descKey: "fuelsDesc",
    products: [
      { image: productFuels, titleKey: "dieselTitle", subKey: "dieselSub", descKey: "dieselDesc" },
      { image: productIronOre, titleKey: "ironOreTitle", subKey: "ironOreSub", descKey: "ironOreDesc" },
    ],
  },
  {
    slug: "food",
    nameKey: "food",
    descKey: "foodDesc",
    products: [
      { image: productFood, titleKey: "tomatoPasteTitle", subKey: "tomatoPasteSub", descKey: "tomatoPasteDesc" },
      { image: productCannedFish, titleKey: "cannedFishTitle", subKey: "cannedFishSub", descKey: "cannedFishDesc" },
    ],
  },
];
