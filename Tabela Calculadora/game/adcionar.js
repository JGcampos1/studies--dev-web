var buton = document.querySelector("#envia-num");



buton.addEventListener("click",function(){
    event.preventDefault();

    var form = document.querySelector(".add-num");

    var num1=form.num1.value
    var num2=form.num2.value

    var resultadoTr = document.createElement("tr");

    var num1Td = document.createElement("td");
    var num2Td = document.createElement("td");
    var sumTd = document.createElement("td");
    var subtractionTd = document.createElement("td");
    var multipleTd = document.createElement("td");
    var divisionTd = document.createElement("td");
    var highTd= document.createElement("td");

        num1Td.textContent = num1
        num2Td.textContent = num2
        sumTd.textContent = parseInt(num1)+parseInt(num2);
        subtractionTd.textContent = num1 - num2;
        multipleTd.textContent = num1 * num2;
        divisionTd.textContent = num1 / num2;
        highTd.textContent = Math.pow(num1, num2);

        resultadoTr.appendChild(num1Td);
        resultadoTr.appendChild(num2Td);
        resultadoTr.appendChild(sumTd);
        resultadoTr.appendChild(subtractionTd);
        resultadoTr.appendChild(multipleTd);
        resultadoTr.appendChild(divisionTd);
        resultadoTr.appendChild(highTd);

        var tabela = document.querySelector(".tabela");
        
        tabela.appendChild(resultadoTr);
        
        var formNum1 = document.querySelector("#num1");
        var formNum2 = document.querySelector("#num2");

        
        formNum1.value = 0;
        formNum2.value = 0;
        formNum1.focus();
        
        console.log(formNum1.value)
});

