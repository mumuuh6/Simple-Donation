document.getElementById('donatetonoakhali')
    .addEventListener('click',function(event)
    {
        event.preventDefault();
        const donation1= getdonationamount('input-field');//noyakhalir value pass
        const newbalance=parseFloat(document.getElementById('text-field1').innerText);
        const mainbalance=parseFloat(document.getElementById('mainbalance').innerText);
        if(mainbalance>donation1){
        const donatenoya=donation1+newbalance;
        document.getElementById('text-field1').innerText=donatenoya;
        document.getElementById('input-field').value='';
        const newbalance1=mainbalance-donation1;
        document.getElementById('mainbalance').innerText=newbalance1;

        const div=document.createElement('div');
        div.classList.add('border','rounded-md','my-4')
        div.innerHTML=`
        <p class="text-xl font-medium p-4">${donation1} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="w-full text-justify p-4 text-gray-400">Time: ${getCurrentTime()}</p>
        `
    
        document.getElementById('History1').appendChild(div);
    }
    else{
        alert('Not a proper amount');
    }
    });
