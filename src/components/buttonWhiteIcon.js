export const buttonWhiteIcon = (label, iconPath, onClick) => {

    const _label = label.toUpperCase();
    const _iconPath = iconPath.toString();

    document.getElementById('swquiz-app').innerHTML = `
        <button class="gameButton btnWhiteIcon">
            <img src="${_iconPath}" alt="button WhiteIcon"/>
            <label>${_label}</label>
        </button>
         `;

    if(onClick){
        buttonWhiteIcon.addEventListener('click', onClick);
    }

}