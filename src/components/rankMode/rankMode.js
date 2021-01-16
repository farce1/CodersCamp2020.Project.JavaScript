
export const rankMode = (listUsers = []) => {

  //Create elements
  const component = document.createElement('div');
  const header = document.createElement('div');
  const user_list = document.createElement('div');

  //Add classes to elements
  component.className = "rank";
  header.className = 'header__rank'
  user_list.className = 'user_list__rank'

  //Define bodies of elements
  header.innerHTML = `
    <span></span>
    <h1>Mode Ranking</h1>
  `
  if(listUsers.length > 2){
    user_list.innerHTML = `
    <div class='user_list_item'>
      <h2>Place</h2>
      <p>1st</p>
      <p>2nd</p>
      <p>3rd</p>
    </div>
    <div class='user_list_item'>
      <h2>Player</h2>
      <p>${listUsers[0][0]}</p>
      <p>${listUsers[1][0]}</p>
      <p>${listUsers[2][0]}</p>
    </div>
    <div class='user_list_item'>
      <h2>Answered</h2>
      <p>${listUsers[0][1]}</p>
      <p>${listUsers[1][1]}</p>
      <p>${listUsers[2][1]}</p>
    </div>
  `
  }

  //Add element to component
  component.appendChild(header);
  component.appendChild(user_list)

  //Return a complete component
  return component;
}