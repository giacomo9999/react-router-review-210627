import AppMainPage from "./AppMainPage";
import { BrowserRouter, Route } from "react-router-dom";

const Router = () => {
  console.log("Router here...");
  return (
    <BrowserRouter>
      <Route path="/" component={AppMainPage} />
    </BrowserRouter>
  );
};

export default Router;
