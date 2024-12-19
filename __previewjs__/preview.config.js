// preview.config.js

import { defineConfig } from "@previewjs/config";

export default defineConfig({
  wrapper: {
    path: "__previewjs__/PreviewWrapper.jsx",
    componentName: "default",
  },
});