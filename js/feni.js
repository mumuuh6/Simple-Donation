document.getElementById('donatetofeni')
    .addEventListener('click',function(event)
    {
        event.preventDefault();
        const donation1= getdonationamount('input-field2');//feni value pass
        const newbalance=parseFloat(document.getElementById('text-field2').innerText);
        const mainbalance=parseFloat(document.getElementById('mainbalance').innerText);
        console.log(donation1,mainbalance);
        if(mainbalance>=donation1 && donation1>0)
    {
        const donatenoya=donation1+newbalance;
        document.getElementById('text-field2').innerText=donatenoya;
        document.getElementById('input-field2').value='';
        const newbalance1=mainbalance-donation1;
        document.getElementById('mainbalance').innerText=newbalance1;

        const div=document.createElement('div');
        div.classList.add('border','rounded-md','my-4')
        div.innerHTML=`
        <p class="text-xl font-medium p-4 ">${donation1} Taka is Donated for famine-2024 at Feni, Bangladesh.</p>
        <p class="w-full text-justify p-4 text-gray-400">Time: ${getCurrentTime()}</p>
        `
    
        document.getElementById('History1').appendChild(div);
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('close-modal').addEventListener('click',function(){
            document.getElementById('modal').classList.add('hidden');
        })
        
    }
    else{
        alert('Not a proper amount');
        document.getElementById('modal').classList.add('hidden');
        
    
    }});
