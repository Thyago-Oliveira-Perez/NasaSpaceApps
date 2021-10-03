document.getElementById("botao").addEventListener("click", paginaQueVaiAbrir);

function paginaQueVaiAbrir(){

	var page1 = 1
	var page2 = 2
	var page3 = 3

	if(page1 < page3){

		window.open("./Verde/Verde.html");
				
	}else if(page2 > page1){

		window.open("./Amarelo/Amarelo.html");

	}else{

		window.open("./Amarelo/Amarelo.html");

	}

}