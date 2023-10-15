var buttons=document.querySelectorAll('.amt');

buttons.forEach(function (btn){
    btn.addEventListener('click',function(e){
        style=e.currentTarget.classList;

        if(style.contains('Hazelnut'))
        {
           var item=document.getElementById('item1').value;
           alert('You have to pay ${item}');
        }
    });
})