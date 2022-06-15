import { createRoot } from 'react-dom/client';
import Modal from './components/Modal';

export const renderInVanilla = (targetElement, projects, postFunction) => {
 
  if (!targetElement) {
    throw new Error('Algo valio cake');
  }

  const root = createRoot(targetElement);
  root.render(<Modal projects={projects} postFunction={postFunction} />);
};
