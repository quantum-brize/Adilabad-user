import React, { useState } from "react";
import BottomNav from "./Components/BottomNav/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Pages/Category/Category";
import CategoryDetail from "./Pages/CategoryDetail/CategoryDetail";
import SubCategory from "./Pages/SubCategory/SubCategory";
import StoreDetail from "./Pages/StoreDetail/StoreDetail";
import Profile from "./Pages/Profile/Profile";
import Notification from "./Pages/Notification/Notification";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import ProductService from "./Pages/ProductService/ProductService";
import Feedback from "./Components/Feedback/Feedback";
const App = () => {
  const [feedbackOn, setFeedbackOn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Feedback feedbackOn={feedbackOn} setFeedbackOn={setFeedbackOn} />
        <Routes>
          <Route path={"/"} element={<Category />} />
          <Route path={"/category-detail"} element={<CategoryDetail />} />
          <Route path={"/sub-category"} element={<SubCategory />} />
          <Route path={"/store-detail/:id"} element={<StoreDetail />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/notification"} element={<Notification />} />
          <Route path={"/order-history"} element={<OrderHistory />} />
          <Route path={"/product-service/:id"} element={<ProductService feedbackOn={feedbackOn} setFeedbackOn={setFeedbackOn} />} />
        </Routes>

        <BottomNav />
      </BrowserRouter>
    </div>
  );
};

export default App;
