
const accordData = [
    {
        id: 'Q1',
        btnID: "Btn1",
        quest: 'Do You Accept All Major Credit Cards?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et iste harum. Suscipit
                 eaque quas illum aperiam beatae dolores ut mollitia consectetur assumenda explicabo cupiditate harum,
                 vitae nesciunt deserunt illo!`
    },
    {
        id: 'Q2',
        btnID: "Btn2",
        quest: 'Do You Support Local Farmers?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et iste harum. Suscipit
                 eaque quas illum aperiam beatae dolores ut mollitia consectetur assumenda explicabo cupiditate harum,
                 vitae nesciunt deserunt illo!`
    },
    {
        id: 'Q3',
        btnID: "Btn3",
        quest: 'Do You use Organic ingredients?',
        answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque et iste harum. Suscipit
                 eaque quas illum aperiam beatae dolores ut mollitia consectetur assumenda explicabo cupiditate harum,
                 vitae nesciunt deserunt illo!`
    },
]


accordData.forEach(function (data) {

    document.querySelector('.acordionCont').innerHTML += `
                        <div class="acordionItem">
                            <div class="head">
                                <div>
                                    ${data.quest}
                                </div>
                                <div>
                                    <i class="fa-solid fa-plus signBorder" id="${data.btnID}" style="color: #edbd0c;"
                                    onclick="showHideDetail(this,'#${data.id}')"></i>
                                </div>
                            </div>
                            <div class="detail" id="${data.id}">
                                <div class="line"></div>
                                  <div>  ${data.answer}</div>
                            </div>
                        </div>`
})




function showHideDetail(element, detElement) {
    document.querySelector(detElement).classList.toggle('showDetail');
    document.querySelector(`#` + element.id).classList.toggle('fa-plus');
    document.querySelector(`#` + element.id).classList.toggle('fa-minus');
}
