import { createRoot } from "react-dom/client";
import Modal from "./components/Modal";

export const renderInVanilla = (targetElement, projects, apiFunction) => {
  if (!targetElement) {
    throw new Error("Please send a target to render this component");
  }

  const root = createRoot(targetElement);
  root.render(<Modal projects={projects} apiFunction={apiFunction} />);
};
