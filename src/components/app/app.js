import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import featuresList from "/src/mocks/features-list";
import products from "/src/mocks/products";
import { GlobalStyle } from "./style";
import { AppRoute } from "/src/const";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";

import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={featuresList} />} />
            <Route
              path={AppRoute.BUY}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
