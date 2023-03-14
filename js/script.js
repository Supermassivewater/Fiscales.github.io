//-------------------------------------------------------------------------------------------------
document.getElementById("generar").addEventListener("click", function(){generarConceptos()});
let conceptos= document.getElementById("conceptos").innerHTML;
let nummax;
let generarConceptos=function(){
    let num=document.getElementById("n-conceptos").value;
    /*a=0;
    while(document.getElementById("concepto"+a) !== null){
    a++;
    }*/
    //num=parseInt(num);
    /*num=num+a;*/
    if(num>0){
        for(let i=0; i<num; i++){
            conceptos+='<div id="concepto'+i+'">';
            conceptos+=estructuraConcepto(i);
            conceptos+='</div>';
            nummax=i;
        }
    }
    document.getElementById("conceptos").innerHTML=conceptos;  
    document.getElementById("generar").classList.add("conceptoadd");
    document.getElementById("titulob").classList.add("conceptoadd");
    document.getElementById("n-conceptos").classList.add("conceptoadd");
    document.getElementById("addconcepto").classList.remove("conceptoadd");
    document.getElementById("addconcepto").classList.add("addconcepto");
    
  
}
    

function estructuraConcepto(num){
    return `<table >
    <tr>
        <th></th>
        <th>Cantidad</th>
        <th>Descripción </th>
        <th> Valor unitario</th>
        <th>Importe </th>
    </tr>
    <tr>
        <th> <img onclick="borrarConcepto(a=`+num+`)" class="no" src="image/My project-1 (2).png" alt=""></th>
        <th> <input type="number" id="cantidad`+num+`" onblur="calcularimporte(`+num+`)" placeholder="0"></th>
        <th> <input type="text" id="descripcion`+num+`" placeholder="Descripción"></th>
        <th> <input type="number" id="valorUnitario`+num+`" onblur="calcularimporte(`+num+`)" placeholder="0.00"></th>
        <th><input type="number" id="importe`+num+`" placeholder="0.00"></th>
    </tr>
</table>`;
}

document.getElementById("addconcepto").addEventListener("click",function(){añadirconcepto()});

let añadirconcepto= function(){
   /* document.getElementById("generar").classList.remove("conceptoadd");
    document.getElementById("titulob").classList.remove("conceptoadd");
    document.getElementById("n-conceptos").classList.remove("conceptoadd");*/
    nummax++;
    let añadir= document.getElementById("conceptos").innerHTML;
    añadir+='<div id="concepto'+nummax+'">';
    añadir+=estructuraConcepto(nummax);
    añadir+='</div>';
    document.getElementById("conceptos").innerHTML=añadir;
    
}

let borrarConcepto=function(x){
    subtotal-=parseFloat(document.getElementById("importe"+x).value);
    let totalconceptos=document.getElementById("conceptos");
    let item=totalconceptos.querySelector("#concepto"+x);
    totalconceptos.removeChild(item);
    iva=subtotal*.16;
    total=subtotal+iva;
    mostrarsubtotal="$"+subtotal;
    mostrartotal="$"+total;
    mostrariva="$"+iva;
    document.getElementById("subtotal").innerHTML=mostrarsubtotal;
    document.getElementById("iva").innerHTML=mostrariva;
    document.getElementById("total").innerHTML=mostrartotal;
}
let total, iva, subtotal=0;
let calcularimporte=function(x){
    document.getElementById("importe"+x).value=
    (document.getElementById("cantidad"+x).value*document.getElementById("valorUnitario"+x).value).toFixed(2);

    subtotal+=parseFloat(document.getElementById("importe"+x).value);
    iva=subtotal*.16;
    total=subtotal+iva;
    mostrarsubtotal="$"+subtotal;
    mostrartotal="$"+total;
    mostrariva="$"+iva;
    document.getElementById("subtotal").innerHTML=mostrarsubtotal;
    document.getElementById("iva").innerHTML=mostrariva;
    document.getElementById("total").innerHTML=mostrartotal;
}