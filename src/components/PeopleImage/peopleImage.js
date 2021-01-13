 export const peopleImage=(src)=>{
    if(src){
    const component= document.createElement('div');
    component.style.background=`url(${src})`;
    component.className="peopleImage"
    return component;
    }
}


