import icon1 from "/src/assets/feature-icon1.png";
import icon2 from "/src/assets/feature-icon2.png";
import icon3 from "/src/assets/feature-icon3.png";
import icon4 from "/src/assets/feature-icon4.png";

const featuresList = [
  {
    id: 1,
    owner: "Магазинные продукты",
    productType: "farm",
    title: "Еда намного вкуснее",
    text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    icon: `${icon1}`,
  },
  {
    id: 2,
    owner: "Магазинные продукты",
    productType: "farm",
    title: "Натуральные продукты",
    text: "Поставляем местные органические продукты выращенные без пестици дов и химических удобрений.",
    icon: `${icon2}`,
  },
  {
    id: 3,
    owner: "Фермерские продукты",
    productType: "store",
    title: "Просроченные продукты",
    text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    icon: `${icon3}`,
  },
  {
    id: 4,
    productType: "store",
    owner: "Фермерские продукты",
    title: "Некачественное мясо",
    text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    icon: `${icon4}`,
  },
];

export default featuresList;
