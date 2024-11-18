function showDetail() {
    document.querySelector('.detail1').classList.add('showDetail');
    document.querySelector('.fa-minus').classList.toggle('hideMinusSign');
    document.querySelector('.fa-plus').classList.toggle('hidePlusSign');
}

function hideDetail() {
    document.querySelector('.detail1').classList.remove('showDetail');
    document.querySelector('.fa-minus').classList.toggle('hideMinusSign');
    document.querySelector('.fa-plus').classList.toggle('hidePlusSign');
}
