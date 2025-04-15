import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "docusaurus-api-/user-management-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "docusaurus-api-/get-all-users",
          label: "Get all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "docusaurus-api-/create-a-user",
          label: "Create a user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "docusaurus-api-/get-user-by-id",
          label: "Get user by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
