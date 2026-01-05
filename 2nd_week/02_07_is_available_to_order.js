let shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"];
let shop_orders = ["오뎅", "콜라", "만두"];

function isAvailableToOrder(menus, orders) {
  let sortedMenus = menus.sort((a, b) => a.localeCompare(b));

  for (let order of orders) {
    let minIndex = 0;
    let maxIndex = sortedMenus.length - 1;

    while (minIndex <= maxIndex) {
      let curIndex = parseInt((maxIndex + minIndex) / 2);
      console.log(
        maxIndex,
        minIndex,
        curIndex,
        order,
        order.localeCompare(sortedMenus[curIndex]),
        sortedMenus[curIndex]
      );
      if (order === sortedMenus[curIndex]) {
        return true;
      } else if (order.localeCompare(sortedMenus[curIndex]) < 0) {
        maxIndex = curIndex - 1;
        console.log(maxIndex, minIndex);
      } else {
        minIndex = curIndex + 1;
        console.log(maxIndex, minIndex);
      }
    }
  }
  return false;
}

let result = isAvailableToOrder(shop_menus, shop_orders);
console.log(result);
