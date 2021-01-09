export const gameNavigation = (callback) => {
  const body = document.getElementsByTagName('body');
  const navigation = document.createElement('div');
  const gameNavigationTemplateHTML = `
<div class='nav-btn clicked'>People</div>
<div class='nav-btn'>Vehicles</div>
<div class='nav-btn'>Starships</div>
`;

  function onClickHandler(btn) {
    Array.from(navigation.children).forEach(btn=>btn.classList.remove('clicked'));
    btn.classList.add('clicked')
  }

  navigation.classList.add('navigation');
  navigation.innerHTML = gameNavigationTemplateHTML;
  document.body.appendChild(navigation);
  Array.from(navigation.children).forEach((btn) =>
    btn.addEventListener('click', ()=>onClickHandler(btn)),
  );
};
