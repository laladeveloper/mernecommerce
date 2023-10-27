// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Header from "./component/layout/Header/Header.js";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home";
// import ProductDetails from "./component/Product/ProductDetails";
// import Products from "./component/Product/Products";
// import Search from "./component/Product/Search";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import Profile from "./component/User/Profile";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import LoginSignUp from "./component/User/LoginSignUp";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UserOptions from "./component/layout/Header/UserOptions";
// import ResetPassword from "./component/User/ResetPassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import PageNotFound from "./component/layout/Not Found/NotFound.js";
// import Navbar from "./component/layout/Header/Navbar.js";
// import { useSelector } from "react-redux";

// function MyApp() {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   return (
//     <BrowserRouter>
//       {/* <Header /> */}
//       <Navbar />
//       {isAuthenticated && <UserOptions user={user} />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:keyword" element={<Products />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route
//           path="/account"
//           element={<ProtectedRoute component={Profile} />}
//         /> */}
//         <Route path="/account">
//           <Route element={<ProtectedRoute component={Profile} />} />
//         </Route>
//         <Route
//           path="/me/update"
//           element={<ProtectedRoute component={UpdateProfile} />}
//         />
//         <Route
//           path="/password/update"
//           element={<ProtectedRoute component={UpdatePassword} />}
//         />
//         <Route path="/login" element={<LoginSignUp />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route
//           path="/shipping"
//           element={<ProtectedRoute component={Shipping} />}
//         />
//         <Route
//           path="/success"
//           element={<ProtectedRoute component={OrderSuccess} />}
//         />
//         <Route
//           path="/orders"
//           element={<ProtectedRoute component={MyOrders} />}
//         />
//         <Route
//           path="/order/confirm"
//           element={<ProtectedRoute component={OrderSuccess} />}
//         />
//         <Route
//           path="/order/:id"
//           element={<ProtectedRoute component={OrderDetails} />}
//         />
//         <Route
//           path="/admin/dashboard"
//           element={<ProtectedRoute isAdmin={true} component={Dashboard} />}
//         />
//         <Route
//           path="/admin/products"
//           element={<ProtectedRoute isAdmin={true} component={ProductList} />}
//         />
//         <Route
//           path="/admin/product"
//           element={<ProtectedRoute isAdmin={true} component={NewProduct} />}
//         />
//         <Route
//           path="/admin/product/:id"
//           element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />}
//         />
//         <Route
//           path="/admin/orders"
//           element={<ProtectedRoute isAdmin={true} component={OrderList} />}
//         />
//         <Route
//           path="/admin/order/:id"
//           element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />}
//         />
//         <Route
//           path="/admin/users"
//           element={<ProtectedRoute isAdmin={true} component={UsersList} />}
//         />
//         <Route
//           path="/admin/user/:id"
//           element={<ProtectedRoute isAdmin={true} component={UpdateUser} />}
//         />
//         <Route
//           path="/admin/reviews"
//           element={<ProtectedRoute isAdmin={true} component={ProductReviews} />}
//         />
//         <Route path="/password/forgot" element={<ForgotPassword />} />
//         <Route path="/password/reset/:token" element={<ResetPassword />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default MyApp;
