import React, { Suspense, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import * as layoutConstants from "../redux/slices/SettingSlice";

// All layouts/containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal";
import FullLayout from "../layouts/Full";

//External Lib Import
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Auth
const Login = React.lazy(() => import("../pages/Account/Login"));
const Register = React.lazy(() => import("../pages/Account/Register"));

//Page
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Logout = React.lazy(() => import("../pages/Account/Logout"));

const CategoryCreateUpdatePage = React.lazy(() =>
  import("../pages/Category/CategoryCreateUpdatePage"),
);
const CategoryListPage = React.lazy(() =>
  import("../pages/Category/CategoryListPage"),
);

const SubCategoryCreateUpdatePage = React.lazy(() =>
  import("../pages/SubCategory/SubCategoryCreateUpdatePage"),
);
const SubCategoryListPage = React.lazy(() =>
  import("../pages/SubCategory/SubCategoryListPage"),
);

const TagCreateUpdatePage = React.lazy(() =>
  import("../pages/Tag/TagCreateUpdatePage"),
);
const TagListPage = React.lazy(() => import("../pages/Tag/TagListPage"));

const NewsCreateUpdatePage = React.lazy(() =>
  import("../pages/News/NewsCreateUpdatePage"),
);
const NewsListPage = React.lazy(() => import("../pages/News/NewsListPage"));

const LoadComponent = ({ component: Component }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <Component />;
};

const AllRoutes = () => {
  const { LayoutType } = useSelector((state) => state.Setting);

  const getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (LayoutType) {
      case layoutConstants.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case layoutConstants.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case layoutConstants.LAYOUT_FULL:
        layoutCls = FullLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  let Layout = getLayout();

  return useRoutes([
    {
      // public routes
      path: "/account",
      element: <PublicRoute component={DefaultLayout} />,
      children: [
        { path: "login", element: <LoadComponent component={Login} /> },
        { path: "logout", element: <LoadComponent component={Logout} /> },
        {
          path: "register",
          element: <LoadComponent component={Register} />,
        },
      ],
    },
    {
      // auth protected routes
      path: "/",
      element: <PrivateRoute component={Layout} />,
      children: [
        {
          path: "",
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "/dashboard",
          element: <LoadComponent component={Dashboard} />,
        },
        {
          path: "category",
          children: [
            {
              path: "/category/category-create-update",
              element: <CategoryCreateUpdatePage />,
            },
            {
              path: "/category/category-list",
              element: <CategoryListPage />,
            },
          ],
        },
        {
          path: "subcategory",
          children: [
            {
              path: "/subcategory/subcategory-create-update",
              element: <SubCategoryCreateUpdatePage />,
            },
            {
              path: "/subcategory/subcategory-list",
              element: <SubCategoryListPage />,
            },
          ],
        },
        {
          path: "tag",
          children: [
            {
              path: "/tag/tag-create-update",
              element: <TagCreateUpdatePage />,
            },
            {
              path: "/tag/tag-list",
              element: <TagListPage />,
            },
          ],
        },
        {
          path: "news",
          children: [
            {
              path: "/news/news-create-update",
              element: <NewsCreateUpdatePage />,
            },
            {
              path: "/news/news-list",
              element: <NewsListPage />,
            },
          ],
        },
      ],
    },
  ]);
};

export default AllRoutes;
