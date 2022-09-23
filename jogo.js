var tl = document.querySelector('input#txt')
var um = document.querySelector('div.um')
var dois = document.querySelector('div.dois')
var tres = document.querySelector('div.tres')
var quatro = document.querySelector('div.quatro')
var cinco = document.querySelector('div.cinco')
var seis = document.querySelector('div.seis')
var sete = document.querySelector('div.sete')
var oito = document.querySelector('div.oito')
var nove = document.querySelector('div.nove')

um.addEventListener('click',clicouUM)
dois.addEventListener('click',clicouDOIS)
tres.addEventListener('click',clicouTRES)
quatro.addEventListener('click',clicouQUATRO)
cinco.addEventListener('click',clicouCINCO)
seis.addEventListener('click',clicouSEIS)
sete.addEventListener('click',clicouSETE)
oito.addEventListener('click',clicouOITO)
nove.addEventListener('click',clicouNOVE)

var vic = document.querySelector('div.vic')

um.addEventListener('mouseout',sairUM)
dois.addEventListener('mouseout',sairDOIS)
tres.addEventListener('mouseout',sairTRES)
quatro.addEventListener('mouseout',sairQUATRO)
cinco.addEventListener('mouseout',sairCINCO)
seis.addEventListener('mouseout',sairSEIS)
sete.addEventListener('mouseout',sairSETE)
oito.addEventListener('mouseout',sairOITO)
nove.addEventListener('mouseout',sairNOVE)

function sairUM(){
    if(um.innerHTML == "O" && dois.innerHTML == "O" && tres.innerHTML == "O"){
        um.innerHTML = "--O--"
        dois.innerHTML = "----O----"
        tres.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && dois.innerHTML == "X" && tres.innerHTML == "X"){
        um.innerHTML = "--X--"
        dois.innerHTML = "----X----"
        tres.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(um.innerHTML == "O" && quatro.innerHTML == "O" && sete.innerHTML == "O"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && quatro.innerHTML == "X" && sete.innerHTML == "X"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|"
        tl.value = "X Venceu"
    }
    if(um.innerHTML == "O" && cinco.innerHTML == "O" && nove.innerHTML == "O"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && cinco.innerHTML == "X" && nove.innerHTML == "X"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "X Venceu"
    }
}
function sairDOIS(){
    if(um.innerHTML == "O" && dois.innerHTML == "O" && tres.innerHTML == "O"){
        um.innerHTML = "--O--"
        dois.innerHTML = "----O----"
        tres.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && dois.innerHTML == "X" && tres.innerHTML == "X"){
        um.innerHTML = "--X--"
        dois.innerHTML = "----X----"
        tres.innerHTML = "--X--"
        tl.value = "X Venceu"      
    }
    if(dois.innerHTML == "O" && cinco.innerHTML == "O" && oito.innerHTML == "O"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(dois.innerHTML == "X" && cinco.innerHTML == "X" && oito.innerHTML == "X"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "X Venceu"
    }
}
function sairTRES(){
    if(um.innerHTML == "O" && dois.innerHTML == "O" && tres.innerHTML == "O"){
        um.innerHTML = "--O--"
        dois.innerHTML = "----O----"
        tres.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && dois.innerHTML == "X" && tres.innerHTML == "X"){
        um.innerHTML = "--X--"
        dois.innerHTML = "----X----"
        tres.innerHTML = "--X--" 
        tl.value = "X Venceu"       
    }
    if(tres.innerHTML == "O" && seis.innerHTML == "O" && nove.innerHTML == "O"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && seis.innerHTML == "X" && nove.innerHTML == "X"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "X Venceu"
    }
    if(tres.innerHTML == "O" && cinco.innerHTML == "O" && sete.innerHTML == "O"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && cinco.innerHTML == "X" && sete.innerHTML == "X"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "X Venceu"
    }
}
function sairQUATRO(){
    if(quatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O"){
        quatro.innerHTML = "--O--"
        cinco.innerHTML = "----O----"
        seis.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(quatro.innerHTML == "X" && cinco.innerHTML == "X" && seis.innerHTML == "X"){
        quatro.innerHTML = "--X--"
        cinco.innerHTML = "----X----"
        seis.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(um.innerHTML == "O" && quatro.innerHTML == "O" && sete.innerHTML == "O"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && quatro.innerHTML == "X" && sete.innerHTML == "X"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|" 
        tl.value = "X Venceu"
    }
}
function sairCINCO(){
    if(quatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O"){
        quatro.innerHTML = "--O--"
        cinco.innerHTML = "----O----"
        seis.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(quatro.innerHTML == "X" && cinco.innerHTML == "X" && seis.innerHTML == "X"){
        quatro.innerHTML = "--X--"
        cinco.innerHTML = "----X----"
        seis.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(dois.innerHTML == "O" && cinco.innerHTML == "O" && oito.innerHTML == "O"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(dois.innerHTML == "X" && cinco.innerHTML == "X" && oito.innerHTML == "X"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "X Venceu"
    }
    if(um.innerHTML == "O" && cinco.innerHTML == "O" && nove.innerHTML == "O"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && cinco.innerHTML == "X" && nove.innerHTML == "X"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "X Venceu"
    }
    if(tres.innerHTML == "O" && cinco.innerHTML == "O" && sete.innerHTML == "O"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && cinco.innerHTML == "X" && sete.innerHTML == "X"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "X Venceu"
    }
}
function sairSEIS(){
    if(quatro.innerHTML == "O" && cinco.innerHTML == "O" && seis.innerHTML == "O"){
        quatro.innerHTML = "--O--"
        cinco.innerHTML = "----O----"
        seis.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(quatro.innerHTML == "X" && cinco.innerHTML == "X" && seis.innerHTML == "X"){
        quatro.innerHTML = "--X--"
        cinco.innerHTML = "----X----"
        seis.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(tres.innerHTML == "O" && seis.innerHTML == "O" && nove.innerHTML == "O"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && seis.innerHTML == "X" && nove.innerHTML == "X"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "X Venceu"
    }
}
function sairSETE(){
    if(sete.innerHTML == "O" && oito.innerHTML == "O" && nove.innerHTML == "O"){
        sete.innerHTML = "--O--"
        oito.innerHTML = "----O----"
        nove.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(sete.innerHTML == "X" && oito.innerHTML == "X" && nove.innerHTML == "X"){
        sete.innerHTML = "--X--"
        oito.innerHTML = "----X----"
        nove.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(um.innerHTML == "O" && quatro.innerHTML == "O" && sete.innerHTML == "O"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && quatro.innerHTML == "X" && sete.innerHTML == "X"){
        um.innerHTML = "|"
        quatro.innerHTML = "|"
        sete.innerHTML = "|"
        tl.value = "X Venceu"
    }
    if(tres.innerHTML == "O" && cinco.innerHTML == "O" && sete.innerHTML == "O"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && cinco.innerHTML == "X" && sete.innerHTML == "X"){
        tres.innerHTML = "/"
        cinco.innerHTML = "/"
        sete.innerHTML = "/"
        tl.value = "X Venceu"
    }
}
function sairOITO(){
    if(sete.innerHTML == "O" && oito.innerHTML == "O" && nove.innerHTML == "O"){
        sete.innerHTML = "--O--"
        oito.innerHTML = "----O----"
        nove.innerHTML = "--O--"
        tl.value = "Bolinha Venceu"
    }
    if(sete.innerHTML == "X" && oito.innerHTML == "X" && nove.innerHTML == "X"){
        sete.innerHTML = "--X--"
        oito.innerHTML = "----X----"
        nove.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(dois.innerHTML == "O" && cinco.innerHTML == "O" && oito.innerHTML == "O"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(dois.innerHTML == "X" && cinco.innerHTML == "X" && oito.innerHTML == "X"){
        dois.innerHTML = "|"
        cinco.innerHTML = "|"
        oito.innerHTML = "|"
        tl.value = "X Venceu"
    }
}
function sairNOVE(){
    if(sete.innerHTML == "O" && oito.innerHTML == "O" && nove.innerHTML == "O"){
        document.getElementById('vic3').style.background = "rgb(68, 68, 68)"
        sete.innerHTML = "--O--"
        oito.innerHTML = "----O----"
        nove.innerHTML = "--O--"
    }
    if(sete.innerHTML == "X" && oito.innerHTML == "X" && nove.innerHTML == "X"){
        sete.innerHTML = "--X--"
        oito.innerHTML = "----X----"
        nove.innerHTML = "--X--"
        tl.value = "X Venceu"       
    }
    if(tres.innerHTML == "O" && seis.innerHTML == "O" && nove.innerHTML == "O"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "Bolinha Venceu"
    }
    if(tres.innerHTML == "X" && seis.innerHTML == "X" && nove.innerHTML == "X"){
        tres.innerHTML = "|"
        seis.innerHTML = "|"
        nove.innerHTML = "|"
        tl.value = "X Venceu"
    }
    if(um.innerHTML == "O" && cinco.innerHTML == "O" && nove.innerHTML == "O"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "Bolinha Venceu"
    }
    if(um.innerHTML == "X" && cinco.innerHTML == "X" && nove.innerHTML == "X"){
        um.innerHTML = "\\"
        cinco.innerHTML = "\\"
        nove.innerHTML = "\\"
        tl.value = "X Venceu"
    }
}
function clicouUM(){
    if(um.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
        um.innerHTML = "O"
    }
        else{
        um.innerHTML = "X"
    }
        if(tl.value == "Vez de O"){
        tl.value = "Vez de X"
    }
        else{
        tl.value = "Vez de O"
    }
    }
    if(dois.innerHTML != "" && tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != ""){
        tl.value = "Deu velha"
    }
}
function clicouDOIS(){
    if(dois.innerHTML == ""  && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            dois.innerHTML = "O"
        }
        else{
            dois.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != ""){
        tl.value = "Deu velha"
    }
}    
function clicouTRES(){
    if(tres.innerHTML == ""  && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            tres.innerHTML = "O"
        }
        else{
            tres.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && tres.innerHTML != ""){
        tl.value = "Deu velha"
    }
}    
function clicouQUATRO(){
    if(quatro.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            quatro.innerHTML = "O"
        }
        else{
            quatro.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && quatro.innerHTML != "" ){
        tl.value = "Deu velha"
    }
}
function clicouCINCO(){
    if(cinco.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            cinco.innerHTML = "O"
        }
        else{
            cinco.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != ""  && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && cinco.innerHTML != ""){
        tl.value = "Deu velha"
    }
}   
function clicouSEIS(){
    if(seis.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            seis.innerHTML = "O"
        }
        else{
            seis.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && seis.innerHTML != "" ){
        tl.value = "Deu velha"
    }
} 
function clicouSETE(){
    if(sete.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            sete.innerHTML = "O"
        }
        else{
            sete.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && oito.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && sete.innerHTML != ""){
        tl.value = "Deu velha"
    }
}
function clicouOITO(){
    if(oito.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            oito.innerHTML = "O"
        }
        else{
            oito.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && nove.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && oito.innerHTML != "" ){
        tl.value = "Deu velha"
    }
}
function clicouNOVE(){
    if(nove.innerHTML == "" && tl.value != "Bolinha Venceu" && tl.value != "X Venceu" ){
        if(tl.value == "Vez de O"){
            nove.innerHTML = "O"
        }
        else{
            nove.innerHTML = "X"
        }
        if(tl.value == "Vez de O"){
            tl.value = "Vez de X"
        }
        else{
            tl.value = "Vez de O"
        }
    }
    if(tres.innerHTML != "" && quatro.innerHTML != "" && cinco.innerHTML != "" && seis.innerHTML != "" && sete.innerHTML != "" && oito.innerHTML != "" && um.innerHTML != "" && dois.innerHTML != "" && nove.innerHTML != ""){
        tl.value = "Deu velha"
    }
}