//External Lib Import
import { BsCircle } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineDocumentDuplicate, HiOutlineNewspaper } from "react-icons/hi";

import { AiOutlineTag, AiOutlineUserAdd } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const MenuItems = () => {
  const { t } = useTranslation();

  return [
    { key: "navigation", label: t("Navigation"), isTitle: true },
    {
      key: "Dashboard",
      label: t("Dashboard"),
      url: "/dashboard",
      isTitle: false,
      icon: <RiDashboardLine className="side-bar-item-icon" />,
    },
    {
      key: "Category",
      label: t("Category"),
      isTitle: false,
      icon: <HiOutlineDocumentDuplicate className="side-bar-item-icon" />,
      children: [
        {
          key: "NewCategory",
          label: t("New Category"),
          url: "/category/category-create-update",
          parentKey: "Category",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "CategoryList",
          label: t("Category List"),
          url: "/category/category-list",
          parentKey: "Category",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "SubCategory",
      label: t("Sub Category"),
      isTitle: false,
      icon: <HiOutlineDocumentDuplicate className="side-bar-item-icon" />,
      children: [
        {
          key: "NewSubCategory",
          label: t("New Sub Category"),
          url: "/subcategory/subcategory-create-update",
          parentKey: "SubCategory",
          icon: (
            <AiOutlineUserAdd size={16} className="side-bar-subitem-icon" />
          ),
        },
        {
          key: "Sub Category List",
          label: t("Sub Category List"),
          url: "/subcategory/subcategory-list",
          parentKey: "SubCategory",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "Tag",
      label: t("Tag"),
      isTitle: false,
      icon: <AiOutlineTag className="side-bar-item-icon" />,
      children: [
        {
          key: "NewTag",
          label: t("New Tag"),
          url: "/tag/tag-create-update",
          parentKey: "Tag",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "TagList",
          label: t("Tag List"),
          url: "/tag/tag-list",
          parentKey: "Tag",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
    {
      key: "News",
      label: t("News"),
      isTitle: false,
      icon: <HiOutlineNewspaper className="side-bar-item-icon" />,
      children: [
        {
          key: "NewNews",
          label: t("New News"),
          url: "/news/news-create-update",
          parentKey: "News",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
        {
          key: "NewsList",
          label: t("News List"),
          url: "/news/news-list",
          parentKey: "News",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
        },
      ],
    },
  ];
};

export default MenuItems;
