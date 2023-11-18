var an=document.getElementById("annastere")
var button= document.getElementById("button")
var body= document.getElementById("body")
var nume= document.getElementById("nume")
var prenume= document.getElementById("prenume")
var img= document.getElementById("img")
var exp= document.getElementById("exp")
var tp= document.getElementById("textpoza")
var hobby= document.getElementById("hobby")
var culoare=document.getElementById("culoare")


button.addEventListener("click", altaViata)
button.addEventListener("mouseover", DisplayAge)
const d= new Date()
var year=d.getFullYear()
function DisplayAge()
					{
					an.innerHTML=year-an.innerHTML
					}

function altaViata()
					{
					nume.innerHTML="Functie: Inginer-Sef";
					exp.innerHTML="Experienta: <ul><li>Licenta</li><li>Masterat</li><li>Erasmus</li><li>Work and Travel</li></ul> ";
					culoare.style.color="black";
					exp.style.color="black";
					annastere.style.color="black";

					nume.style.color="black";
					tp.innerHTML="";
					exp.style.fontFamily="DM Serif Display, serif"; 
					hobby.style.color="black";
					prenume.style.color="black";
					prenume.innerHTML="Locul de munca: Google";
						
					imagine.src="rich.jpg";
					body.style.backgroundColor="#CCBA78";
					body.style.color="black";
									
					}
					
