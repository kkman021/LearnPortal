import path from "path";
import fs from "fs";

const generateOpenApiPlugins = () => {
  const openapiDir = path.resolve(__dirname, '../api');
  const openapiFiles = fs.readdirSync(openapiDir).filter(file => file.endsWith('.yml'));

  const config = openapiFiles.reduce((data, file) => {
    const id = path.basename(file, '.yml');
    data[id] = {
      specPath: path.join(openapiDir, file),
      outputDir: `docs/docusaurus-api-docs/${id}`,
      sidebarOptions: {
        groupPathsBy: 'tag',
      }
    }
    return data;
  }, {});

  const result = [
    'docusaurus-plugin-openapi-docs',
    {
      id: 'api',
      docsPluginId: 'classic',
      config,
    },
  ];
  return result;
};

export default generateOpenApiPlugins;