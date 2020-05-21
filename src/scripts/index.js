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
