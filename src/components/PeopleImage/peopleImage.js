 export const peopleImage=(src)=>{
    if(src){
    const component= document.createElement('div');
    component.style.backgroundImage=`url("${src}")`;
    component.className="peopleImage";
    return component;
    }
}


