//CADASTRO DOS USUARIOS
class Cadastro_Pets{
	constructor(cpf,email,telefone,nomeAnimal,opcaoVacinado, opcaoCastrado,opcaoVermifugada,cidade,opcaoAnimal,opcaoSexo){
        this.cpf = cpf;
		this.email = email;
		this.telefone = telefone;
		this.nomeAnimal = nomeAnimal;
		this.opcaoVacinado = opcaoVacinado;
		this.opcaoCastrado = opcaoCastrado;
		this.opcaoVermifugada = opcaoVermifugada;
		this.cidade = cidade;
		this.opcaoAnimal = opcaoAnimal;
		this.opcaoSexo = opcaoSexo;
		
	}
}

//FUNÇÃO RECEBENDO OS VALORES DOS IDS
function CadastrarPets() {
	
	var cpf = document.getElementById('Cpf_Pets').value;
	var email = document.getElementById('Email_Pets').value;
    var telefone = document.getElementById('Telefone_Pets').value;
	var nomeAnimal = document.getElementById('Nome_Animal').value;
	var opcaoVacinado = document.getElementById('OpcaoVacinado').value;
	var opcaoCastrado = document.getElementById('OpcaoCastrado').value;
	var opcaoVermifugada = document.getElementById('OpcaoVermifugada').value;
	var cidade = document.getElementById('Cidade').value;
	var opcaoAnimal = document.getElementById('OpcaoAnimal').value;
	var opcaoSexo = document.getElementById('OpcaoSexo').value;


	if (cpf,email,telefone,nomeAnimal,opcaoVacinado, opcaoCastrado,opcaoVermifugada,cidade,opcaoAnimal,opcaoSexo == '') {
		alert('Campos vazios !!! preencha');
    }
    else{
		var cadastro = new Cadastro_Pets(cpf,email,telefone,nomeAnimal,opcaoVacinado, opcaoCastrado,opcaoVermifugada,cidade,opcaoAnimal,opcaoSexo);
		cadastros_usuarios.salvar_cadastro_usuario(cadastro);
		location.reload();
		
        
    }
}


