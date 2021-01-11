export const iconButton = (label, iconPath, onClick) => {

    const _label = label.toUpperCase();
    const _iconPath = iconPath.toString();

    if(onClick){
        iconButton.addEventListener('click', onClick);
    }

    const component = document.createElement('button');
    component.className = "gameButton iconButton";
    component.innerHTML = `   
                <img src="${_iconPath}" alt="button WhiteIcon"/>
                <label>${_label}</label>        
         `;
    return component;
}