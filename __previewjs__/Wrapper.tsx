// __previewjs__/Wrapper.tsx

import React from 'react';
import "../src/index.css";

export const Wrapper: React.FC = ({ children }) => (
  <>
    <MyContext.Provider value={...}>
      <div className="wrapped">
        {children}
      </div>
    </MyContext.Provider>
  </>
);