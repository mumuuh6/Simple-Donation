document.getElementById('donatetofeni')
    .addEventListener('click',function(event)
    {
        event.preventDefault();
        const donation1= getdonationamount('input-field2');//fenir value pass
        const newbalance=parseFloat(document.getElementById('text-field2').innerText);
        
        const mainbalance=parseFloat(document.getElementById('mainbalance').innerText);
        if(mainbalance>donation1){
        const donatenoya=donation1+newbalance;
        document.getElementById('text-field2').innerText=donatenoya;
        document.getElementById('input-field2').value='';
        const newbalance1=mainbalance-donation1;
        document.getElementById('mainbalance').innerText=newbalance1;
    }
    else{
        alert('Not a proper amount');
    }
    });
