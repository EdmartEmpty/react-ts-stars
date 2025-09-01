import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Stars from "./Stars/Stars.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Stars count={4} />
  </StrictMode>
);
