function fun1(){
    const radi=document.getElementsByName("r1")
    for(let i=0;i<radi.length;i++){
        if(radi[i].checked){
            alert(`Выбран ${i+1} Элемент`)
        }
    }
}