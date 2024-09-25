const categories = ['Text', 'Checkbox', 'Radio Button'];

const inputField = document.getElementById('category');
const dropdownList = document.getElementById('dropdownList');


categories.forEach(category => {
    let option = document.createElement('div');
    option.textContent = category;
    option.onclick = function () {
        inputField.value = category;
        dropdownList.classList.remove('show');
        if (category === 'Radio Button') {
            let option_div = document.createElement('div');
            option_div.setAttribute('class', 'option-div');

            let option1 = document.createElement('input');
            option1.setAttribute('placeholder', 'Option 1');
            option1.setAttribute('class', 'options')

            let option2 = document.createElement('input');
            option2.setAttribute('placeholder', 'Option 2');
            option2.setAttribute('class', 'options')

            let option3 = document.createElement('input');
            option3.setAttribute('placeholder', 'Option 3');
            option3.setAttribute('class', 'options')

            let option4 = document.createElement('input');
            option4.setAttribute('placeholder', 'Option 4');
            option4.setAttribute('class', 'options')

            option_div.appendChild(option1);
            option_div.appendChild(option2);
            option_div.appendChild(option3);
            option_div.appendChild(option4);

            document.querySelector('.field-label').appendChild(option_div);

        }
    };
    dropdownList.appendChild(option);
});


inputField.addEventListener('click', function () {
    dropdownList.classList.toggle('show');
});


window.onclick = function (event) {
    if (!event.target.matches('#category')) {
        dropdownList.classList.remove('show');
    }
}


function add() {
    let type = document.getElementById('category').value;
    let label = document.getElementById('input-label').value;

    document.getElementById('category').value = '';
    document.getElementById('input-label').value = '';


    if (type === 'Text') {
        let text_div = document.createElement('div');
        text_div.setAttribute('class', 'text_div');
        let text_label = document.createElement('div');
        text_label.setAttribute('class', 'text_label');
        text_label.textContent = label;
        let text_input = document.createElement('input');
        text_input.setAttribute('id', 'text_input');
        text_input.setAttribute('placeholder', label);

        text_div.appendChild(text_label);
        text_div.appendChild(text_input);
        document.querySelector('.preview-content').appendChild(text_div);
    }
    else if (type === 'Checkbox') {
        let checkbox_div = document.createElement('div');
        checkbox_div.setAttribute('class', 'checkbox_div');
        let checkbox_input = document.createElement('input');
        checkbox_input.setAttribute('type', 'checkbox');
        checkbox_input.setAttribute('id', 'checkbox_input');
        checkbox_input.setAttribute('name', 'checkbox_input');
        checkbox_input.setAttribute('value', 'checkbox_input');

        let checkbox_label = document.createElement('label');
        checkbox_label.setAttribute('for', 'checkbox_input');
        checkbox_label.textContent = label;

        checkbox_div.appendChild(checkbox_input);
        checkbox_div.appendChild(checkbox_label);

        document.querySelector('.preview-content').appendChild(checkbox_div);

    } else if (type === 'Radio Button') {
        let radio_div = document.createElement('div');
        radio_div.setAttribute('class', 'radio_div');

        let question = document.createElement('div');
        question.setAttribute('class', 'question');
        question.textContent = label;

        let option1 = document.createElement('input');
        option1.setAttribute('type', 'radio');
        option1.setAttribute('id', 'option1');
        option1.setAttribute('name', 'question');
        option1.setAttribute('value', 'option 1');
        let label1 = document.createElement('label');
        label1.setAttribute('for', 'option1');
        label1.textContent = document.getElementsByClassName('options')[0].value;

        let option2 = document.createElement('input');
        option2.setAttribute('type', 'radio');
        option2.setAttribute('id', 'option2');
        option2.setAttribute('name', 'question');
        option2.setAttribute('value', 'option 2');
        let label2 = document.createElement('label');
        label2.setAttribute('for', 'option2');
        label2.textContent = document.getElementsByClassName('options')[1].value;

        let option3 = document.createElement('input');
        option3.setAttribute('type', 'radio');
        option3.setAttribute('id', 'option3');
        option3.setAttribute('name', 'question');
        option3.setAttribute('value', 'option 3');
        let label3 = document.createElement('label');
        label3.setAttribute('for', 'option3');
        label3.textContent = document.getElementsByClassName('options')[2].value;

        let option4 = document.createElement('input');
        option4.setAttribute('type', 'radio');
        option4.setAttribute('id', 'option4');
        option4.setAttribute('name', 'question');
        option4.setAttribute('value', 'option 4');
        let label4 = document.createElement('label');
        label4.setAttribute('for', 'option4');
        label4.textContent = document.getElementsByClassName('options')[3].value;



        radio_div.appendChild(question);
        radio_div.appendChild(option1);
        radio_div.appendChild(label1);
        radio_div.appendChild(document.createElement('br'));
        radio_div.appendChild(option2);
        radio_div.appendChild(label2);
        radio_div.appendChild(document.createElement('br'));
        radio_div.appendChild(option3);
        radio_div.appendChild(label3);
        radio_div.appendChild(document.createElement('br'));
        radio_div.appendChild(option4);
        radio_div.appendChild(label4);
        radio_div.appendChild(document.createElement('br'));



        document.querySelector('.preview-content').appendChild(radio_div);

    }
    let node = document.querySelector('.option-div');
    node.parentNode.removeChild(node);

}