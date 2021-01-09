export const gameNavigation = (callback) => {
  const body = document.getElementsByTagName('body');
  const navigation = document.createElement('div');
  const gameNavigationTemplateHTML = `
<button class='nav-btn clicked'>People</button>
<button class='nav-btn'>Vehicles</button>
<button class='nav-btn'>Starships</button>
`;

  function onClickHandler(e) {
    const currentElement = e.target;
    console.log(currentElement);
  }


    // gameNavigation.addEventListener('click', onClickHandler);

  navigation.classList.add('navigation');
  navigation.innerHTML = gameNavigationTemplateHTML;
  document.body.appendChild(navigation);
};
