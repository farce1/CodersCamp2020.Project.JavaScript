
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
  if(listUsers.length >= 0){
    user_list.innerHTML = `
    <div class='user_list_item'>
      <h2>Place</h2>
      <p>1st</p>
      <p>2nd</p>
      <p>3rd</p>
    </div>
    <div class='user_list_item' id='rank_player'>
      <h2>Player</h2>
      <p>Player 1</p>
      <p>Player 2</p>
      <p>Player 3</p>
    </div>
    <div class='user_list_item' id='rank_answered'>
      <h2>Answered</h2>
      <p>-/-</p>
      <p>-/-</p>
      <p>-/-</p>
    </div>
  `
  }
  if(listUsers.length > 0){
    user_list.querySelector('#rank_player p:nth-child(2)').innerHTML = `${listUsers[0][0]}`;
    user_list.querySelector('#rank_answered p:nth-child(2)').innerHTML = `${listUsers[0][1]}`;

  }
  if(listUsers.length > 1){
    user_list.querySelector('#rank_player p:nth-child(3)').innerHTML = `${listUsers[1][0]}`;
    user_list.querySelector('#rank_answered p:nth-child(3)').innerHTML = `${listUsers[1][1]}`;
  }
  if(listUsers.length > 2){
    user_list.querySelector('#rank_player p:nth-child(4)').innerHTML = `${listUsers[2][0]}`;
    user_list.querySelector('#rank_answered p:nth-child(4)').innerHTML = `${listUsers[2][1]}`;
  }

  //Add element to component
  component.appendChild(header);
  component.appendChild(user_list)

  //Return a complete component
  return component;
}