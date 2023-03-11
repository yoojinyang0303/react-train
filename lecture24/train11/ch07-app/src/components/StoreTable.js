import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
  console.log(props.products);
  const { products } = props;
  //   const sportingGoods = products.filter((p) => p.category === "Sporting Goods");
  //   const electronics = products.filter((p) => p.category === "Electronics");

  //   console.log(sportingGoods);
  //   console.log(electronics);

  // 확장성을 가진 코드
  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // key 갖고 있는 케이스 -> 배열에 추가만 하면 됨
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      // 새로운 카테고리의 key를 생성하고, 배열도 추가해줘야 함.
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);
  console.log(keys);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {keys.map((key, idx) => (
            <ProductsTable category={key} items={result[key]} key={idx} />
          ))}
        </tbody>
      </table>
    </>
  );
}
