(function(){
    let search = document.querySelector('.search');
    let buttons = document.querySelectorAll('.buttons');
    let clear = document.querySelector('.btn-red');
    let equal = document.querySelector('.btn-green');
    
    buttons.forEach((button)=>{
        search.value = " ";
        button.addEventListener('click',(e)=>{
            let value = e.target.dataset.num;
            search.value += value;
        });

    })
    equal.addEventListener('click',(e)=>{
        if (search.value === ' ') {
            search.value = 'please enter';
        }else{
            let result = search.value;
            search.value = eval(result);
        }
    })
    clear.addEventListener('click',(e)=>{
            search.value = " ";
    })
})();