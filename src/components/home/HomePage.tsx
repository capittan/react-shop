import classNames from "classnames";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProductSearch } from "./types";

const HomePage = () => {
  const { GetProductList } = useActions();
  const [search, setSearch] = useState<IProductSearch>({
    page: 1,
  });

  const { list, current_page, count_page, total } = useTypedSelector(
    (store) => store.product
  );

  useEffect(() => {
    GetProductList(search);
  }, [search]);

  const content = list.map((product: { id: number; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; detail: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  const buttons: Array<number> = [];
  for (let i = 1; i <= count_page; i++) buttons.push(i);

  const paginate = buttons.map((page) => {
    return (
      <li key={page} className="page-item">
        <Link
          to={"?page=" + page}
          onClick={() => setSearch({ page })}
          className={classNames("page-link", { active: page === current_page })}
        >
          {page}
        </Link>
      </li>
    );
  });

  return (
    <>
      {console.log("Page render web app")}
      <h1 className="text-center">Головна сторінка</h1>
      <h4>
        Кількість записів <b>{total}</b>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>{content}</tbody>
      </table>
      <nav>
        <ul className="pagination">{paginate}</ul>
      </nav>
    </>
  );
};
export default HomePage;

function useActions(): { GetProductList: any; } {
    throw new Error("Function not implemented.");
}


function useTypedSelector(arg0: (store: any) => any): { list: any; current_page: any; count_page: any; total: any; } {
    throw new Error("Function not implemented.");
}
