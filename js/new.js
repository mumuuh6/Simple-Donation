//Donation button
document.getElementById('donation').addEventListener('click', function() {
    const donation = document.getElementById('donation');
    const history = document.getElementById('History');
    donation.classList.remove('bg-[1px_inside_#1111114D]', 'text-gray-300', 'border-gray-200');
    donation.classList.add('bg-[#B4F461]', 'border-gray-200');
    history.classList.remove('bg-[#B4F461]');
    history.classList.add('bg-[1px_inside_#1111114D]', 'text-gray-300');
    const History1=document.getElementById('History1');
    const donation1=document.getElementById('donation4');
    History1.classList.add('hidden');
    donation1.classList.remove('hidden');
});

//History button
document.getElementById('History').addEventListener('click', function() {
    const donation = document.getElementById('donation');
    donation.classList.remove('bg-[#B4F461]', 'border-gray-200');
    donation.classList.add('bg-[1px_inside_#1111114D]', 'text-gray-300', 'border-gray-200','border-2');
    const history = document.getElementById('History');
    history.classList.remove('bg-[1px_inside_#1111114D]', 'text-gray-300');
    history.classList.add('bg-[#B4F461]');
    const History1=document.getElementById('History1');
    const donation1=document.getElementById('donation4');
    History1.classList.remove('hidden');
    donation1.classList.add('hidden');
});
function getCurrentTime() {
    const now = new Date();
    return now.toString();
}


