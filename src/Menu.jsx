import Card from "./component/Card";
import Header from "./component/Header";
import { Helmet } from "react-helmet";

function Menu() {
  return (
    <>
      <Helmet>
        <title>{`Restaurant | Menu`}</title>
        <style>
          {`
            body {
              background: none;
            }
          `}
        </style>
      </Helmet>
      <Header selected="menu" />
      <div className="flex justify-center items-center">
        <div className="container p-4 mt-16">
          <h1 className="text-2xl font-medium">Menu : </h1>
          <div className="border border-slate-200 min-h-80 rounded-md mt-4 shadow-md grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:p-8 p-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
