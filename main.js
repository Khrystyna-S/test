const getS = selector => document.querySelector(selector);
// функція кнопки edit
getS('.btnEdit').onclick = function(){
    getS('.blockTextArea').classList.add('show');
    getS('.block-style').classList.remove('show');
    getS('.textarea').value = getS('.block-text').innerHTML;
}
// функція кнопки save
getS('.btnSave').onclick = function(){
    getS('.blockTextArea').classList.remove('show');
    getS('.block-text').innerHTML = getS('.textarea').value;
}
// функція кнопки style
getS('.btnStyle').onclick = function(){
    getS('.block-style').classList.add('show');
    getS('.blockTextArea').classList.remove('show');
}
// функції блоку style
function fontSize(){
    getS('.block-text').style.fontSize = event.target.value;
}
let fontFamily = document.forms[0].fontFamily;
fontFamily.onchange = function(){
    getS('.block-text').style.fontFamily = this.value;
}
let colors = ['brown', 'dodgerblue', 'limegreen', 'black', 'gold', 'lightpink', 'white', 'rgb(122, 43, 69)', 'lightseagreen'];
getS('.btnColor').onclick = function(){
    getS('.colors').classList.remove('hide');
    for(let i = 0; i< getS('.colors').children.length; i++){
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.block-text').style.color = this.style.backgroundColor;
        }
    }
}
getS('.btnBgColor').onclick = function(){
    getS('.colors').classList.remove('hide');
    getS('.colors').classList.remove('hide');
    for(let i = 0; i< getS('.colors').children.length; i++){
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.block-text').style.backgroundColor = this.style.backgroundColor;
        }
    }
}
getS('.boldText').onclick = function(){
    if(event.target.checked){
        getS('.block-text').classList.add('bold');
    }
    else{
        getS('.block-text').classList.remove('bold');
    }
}
getS('.cursiveText').onclick = function(){
    if(event.target.checked){
        getS('.block-text').classList.add('cursive');
    }
    else{
        getS('.block-text').classList.remove('cursive');
    }
}
// фінкції кнопки add
getS('.btnAdd').onclick = function(){
    getS('.first-box').classList.remove('show');
    getS('.second-box').classList.add('show');
    getS('.create-list').classList.remove('show');
    getS('.create-table').classList.remove('show');
}
// фінкції кнопки Table
getS('.chooseTable').onclick = function(){
    getS('.create-table').classList.add('show');
    getS('.create-list').classList.remove('show');
}
// фінкції кнопки create Table
getS('.btnTable').onclick = function(){
    let countTR = getS('.tr').value;
    let countTD = getS('.td').value;
    let countWTD = getS('.widthTD').value;
    let countHTD = getS('.heightTD').value;
    let countWBD = getS('.widthBD').value;
    let countWTP = getS('.widthTP').value;
    let countWCL = getS('.widthCL').value;
    getS('.textarea').value += `<table style="border-spacing: 0px; border-collapse: collapse; margin-top: 10px">`;
    for(let i = 0; i<countTR; i++){
        getS('.textarea').value += `<tr></tr>`;
        for(let i = 0; i<countTD; i++){
            getS('.textarea').value += `<td style="width: ${countWTD}px; height: ${countHTD}px; border: ${countWBD}px ${countWTP} ${countWCL}; text-align: center;">TD</td>`;
        }
    }
    getS('.textarea').value += `</table>`;
    getS('.first-box').classList.add('show');
    getS('.second-box').classList.remove('show');
}
// фінкції кнопки list
getS('.chooseList').onclick = function(){
    getS('.create-list').classList.add('show');
    getS('.create-table').classList.remove('show');
}
// фінкції кнопки create list
getS('.btnList').onclick = function(){
    let count = getS('.list-count').value;
    let type = getS('.list-type').value;
    getS('.textarea').value += `<ul style="list-style-type: ${type}">`;
    for(let i = 0; i<count; i++){
        getS('.textarea').value += `<li>item ${i+1}</li>`;
    }
    getS('.textarea').value += `</ul>`;
    getS('.first-box').classList.add('show');
    getS('.second-box').classList.remove('show');
}



