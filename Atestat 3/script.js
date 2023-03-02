var i = 0;

document.querySelectorAll('.buton').forEach(buton => {
    buton.addEventListener('click', () => {
        const continut = buton.nextElementSibling;
        buton.classList.toggle('buton_activ');

        if(i==0){
            i = 1;
            buton.classList.add('buton_activ');
        }
        else if(i==1){
            i = 0;
            buton.classList.remove('buton_activ');
        }

        if(buton.classList.contains('buton_activ'))
        {
            continut.style.maxHeight = continut.scrollHeight + 'px';
        } 
        else if(!buton.classList.contains('buton_activ'))
        {
            continut.style.maxHeight = 0;
        }
    })
})
