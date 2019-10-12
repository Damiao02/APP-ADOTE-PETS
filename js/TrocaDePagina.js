//FUNÇÃO P/ ABRIR A DIV SOBRE

function sobre()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='inline';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("main6").style.display='none';
	document.getElementById("cadastrarPets").style.display='none';
	document.getElementById("newsletter").style.display='inline';

}

//FUNÇÃO P/ ABRIR A DIV HOME

function home()
{
	document.getElementById("main").style.display='inline';
	document.getElementById("main2").style.display='none';
    document.getElementById("banner").style.display='inline';
	document.getElementById("newsletter").style.display='inline';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("main6").style.display='none';
	document.getElementById("cadastrarPets").style.display='none';
}

//FUNÇÃO P/ ABRIR A DIV ONGS

function ongs()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='inline';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("main6").style.display='none';
	document.getElementById("cadastrarPets").style.display='none';
	document.getElementById("newsletter").style.display='inline';
}

//FUNÇÃO P/ ABRIR A DIV MEUS PETS

function meuspets()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='inline';
	document.getElementById("main5").style.display='none';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("main6").style.display='none';
	document.getElementById("cadastrarPets").style.display='none';
	document.getElementById("newsletter").style.display='inline';
}

//FUNÇÃO P/ ABRIR A DIV DICA

function dica()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='none';
	document.getElementById("main6").style.display='inline';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("cadastrarPets").style.display='none';
	document.getElementById("newsletter").style.display='inline';

}

//FUNÇÃO P/ ABRIR ADICIONAR PETS

function adicionarpets()
{
	document.getElementById("main").style.display='none';
	document.getElementById("main2").style.display='none';
	document.getElementById("main3").style.display='none';
	document.getElementById("main4").style.display='none';
	document.getElementById("main5").style.display='inline';
	document.querySelector('.menu').style.display = 'none';
	document.getElementById("main6").style.display='none';
	document.getElementById("cadastrarPets").style.display='none';
	document.getElementById("newsletter").style.display='inline';
}

//FUNÇÃO P/ ABRIR O FORMULARIO DE CADASTRO DO USUARIO
function cadastrar()
{
		document.getElementById("AbreCadastro").style.display='inline';
		document.getElementById("login").style.display='none';
	
}


//FUNÇÃO P/ ABRIR O FORMULARIO P/ ADICIONAR PETS
function AdicionarPets()
{
	document.getElementById("cadastrarPets").style.display='inline';
	document.getElementById("main5").style.display='none';
	document.getElementById("newsletter").style.display='none';
	document.getElementById("main6").style.display='none';
	
	
}


