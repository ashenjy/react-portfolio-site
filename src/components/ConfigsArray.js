import { useState, useEffect } from "react";

const parseConfigs = (mdContent) => {
  const configs = [];
  const regex = /(\w+):\s*(.+)\s*/g;

  let match;
  while ((match = regex.exec(mdContent)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    configs.push({ [key]: value });
  }

  return configs;
};

const ConfigsArray = () => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    fetch("/content/Configs.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setConfigs(parseConfigs(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return configs;
};

export default ConfigsArray;
