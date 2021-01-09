export const gameNavigation = (onClick) => {
  const body = document.getElementsByTagName('body');
  const navigation = document.createElement('div');
  const gameNavigationTemplateHTML = `
<button class='nav-btn'>People</button>
<button class='nav-btn'>Vehicles</button>
<button class='nav-btn'>Starships</button>
`;
  if (onClick) {
    gameNavigation.addEventListener('click', onClick);
  }
  navigation.innerHTML = gameNavigationTemplateHTML;
  document.body.appendChild(navigation);
};
