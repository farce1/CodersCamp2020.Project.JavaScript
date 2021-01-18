export const createLightSaber=()=>{
    const component= document.createElement('div');
    const handle=document.createElement('div');
    const processBar=document.createElement('div');
    const lightprocessBar=document.createElement('div');
    component.className="lightBar";
    handle.style.backgroundImage=`url(img/Lightsaber.png)`;
    handle.className="lightSaberHandle";
    processBar.className="lightSaberProcessBar";
    lightprocessBar.className="LightProcessBar";
    component.appendChild(handle);
    component.appendChild(processBar);
    processBar.appendChild(lightprocessBar);
    var soundOnEl = document.getElementById('soundOn');

    window.onload = countingFunction=()=>{
        
        const time=120;
        let fullwidth=1480;
        setInterval(c,1000/8);
        function c(){
            fullwidth -=1480/(time*8);
            lightprocessBar.style.width=`${fullwidth}px`;
            if(fullwidth<0){
                clearInterval(c);
            }
        }
     
    };
    return component;
}




