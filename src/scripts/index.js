import { presentationContent, showPresentaionButton } from './dom-selectors';
import '../styles/normalize.css';
import '../styles/settings.css';
import '../styles/elements/button.css';
import '../styles/components/container.css';
import '../styles/components/header.css';
import '../styles/components/presentation.css';
import '../styles/utilities/hide.css';

const hiddenClass = 'u-hidden';
let isPresentationVisible = false;

const togglePresentation = () => {
  if (!isPresentationVisible) {
    presentationContent.classList.remove(hiddenClass);
  } else {
    presentationContent.classList.add(hiddenClass);
  }
}

const toggleButton = () => {
  if (!isPresentationVisible) {
    showPresentaionButton.innerHTML = 'Hide it';
  } else {
    showPresentaionButton.innerHTML = 'Show it';
  }
}

const togglePresentationState = () => {
  togglePresentation();
  toggleButton();
  isPresentationVisible = !isPresentationVisible;
}

showPresentaionButton.addEventListener('click', togglePresentationState);
