function mostrarpets(){
	/*CRIANDO OS ELEMENTOS E CHAMANDO O OBJETO DO BANCO */

	

	cadastros_usuarios.database.forEach(function(meuspets){

		

		let  article = document.createElement('article');
		let  img = document.createElement('img');
		let  div = document.createElement('div');
		let  a = document.createElement('a');
		let  h4 = document.createElement('h4');
		let  p = document.createElement('p');

		/* IF PARA COMPARAR DE QUAL ANIMAL SE TRATA*/

		/*VARIAVEIS UTILIZADAS NA COMPARAÇÃO */
		var tipoAnimalGato = 'gato';
		var tipoSexoAnimalGato = 'femea';
		var tipoSexoAnimalGatoMacho = 'macho';
		var tipoAnimalCachorro ='cachorro';
		var tipoSexoAnimalCachorro = 'femea';
        var tipoSexoAnimalCachorroMacho = 'macho';
        
       
        
        

         /* NAUTILLUS ADICIONAR EM CADA IF A COMPARAÇÃO DO NOME DO OBJETO MEUSPETS E O OBJETO DO CADASTRO DO USUARIO */
		
        
		 /*MOSTRANDO AS GATAS CADASTRADAS DO LOCAL STORAGE NA DIV HOME */

 if  (meuspets.opcaoAnimal == tipoAnimalGato && meuspets.opcaoSexo == tipoSexoAnimalGato ) 
 {
	   /* INSERINDO AS INFORMAÇÕES NAS VARIAVEIS*/
	 
		let meuspets_nome_animal_a = document.createTextNode (meuspets.nomeAnimal);
		let meuspets_nome_animal_h4 = document.createTextNode('Oi, sou a ' + meuspets.nomeAnimal);
		let meuspets_sobre_animal_p = document.createTextNode('Essa gatinha linda é a ' + meuspets.nomeAnimal +' . A ' + meuspets.nomeAnimal + ' é carinhosa e companheira, '+ meuspets.opcaoCastrado +', '+ meuspets.opcaoVacinado +' e '+ meuspets.opcaoVermifugada +' . Ela está em '+ meuspets.cidade +', mas pode ser levada para  outras cidades próximas.  Alguém tem espaço na sua casa e na sua vida para acolher essa panterinha fofa? Se sim, pedimos que escreva para gente: '+ meuspets.email +' , ou ligue: '+ meuspets.telefone + ' .');
           /*ADICIONANDO A IMAGEM */
		img.setAttribute('src','img/beautiful_cat_cat_muzzle_fluffy_93328_1280x720.jpg');

		  /*ADICIONANDO AS CLASSES AOS ELEMENTOS DO ARTICLE E DA DIV */

		article.setAttribute('class','servico');
		div.setAttribute('class', 'inner');

			  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS IMG E A DIV PERTENCEM AO ARTICLE*/
			  
		article.appendChild(img);
		article.appendChild(div);

		  /* MOSTRANDO PARA O NAVEGADOR QUE OS ELEMENTOS A, H4 E P PERTENCEM A DIV*/

		div.appendChild(a);
		div.appendChild(h4);
		div.appendChild(p);
				
		 /*ABRINDO OS ELEMENTOS A, H4 E P */
 
		a.appendChild(meuspets_nome_animal_a);
		h4.appendChild(meuspets_nome_animal_h4);
		p.appendChild(meuspets_sobre_animal_p);

		 /*ADICIONANDO CLASSE MAIN AO ARTICLE */

		document.querySelector('#main4').appendChild(article);
		
		 
	 }


	 /*MOSTRANDO OS GATOS CADASTRADOS DO LOCAL STORAGE  NA DIV HOME*/

 if (meuspets.opcaoAnimal == tipoAnimalGato && meuspets.opcaoSexo == tipoSexoAnimalGatoMacho)
 {
	let meuspets_nome_animal_a = document.createTextNode(meuspets.nomeAnimal);
	let meuspets_nome_animal_h4 = document.createTextNode('Oi, sou o ' + meuspets.nomeAnimal);
	let meuspets_sobre_animal_p = document.createTextNode('Esse gatinho lindo é o ' + meuspets.nomeAnimal +' . O ' + meuspets.nomeAnimal + ' é carinhoso e companheiro, '+ meuspets.opcaoCastrado +', '+ meuspets.opcaoVacinado +' e '+ meuspets.opcaoVermifugada +' . Ele está em '+ meuspets.cidade +', mas pode ser levado para  outras cidades próximas.  Alguém tem espaço na sua casa e na sua vida para acolher esse panterinha fofo? Se sim, pedimos que escreva para gente: '+ meuspets.email +' , ou ligue: '+ meuspets.telefone + ' .');

	img.setAttribute('src','img/cat_muzzle_eyes_mustache_81681_1280x720.jpg');

	article.setAttribute('class','servico');
	div.setAttribute('class', 'inner');

	article.appendChild(img);
	article.appendChild(div);

	div.appendChild(a);
	div.appendChild(h4);
	div.appendChild(p);

	a.appendChild(meuspets_nome_animal_a);
	h4.appendChild(meuspets_nome_animal_h4);
	p.appendChild(meuspets_sobre_animal_p);

	document.querySelector('#main4').appendChild(article);
	

 }

	/*MOSTRANDO AS CADELAS CADASTRADAS DO LOCAL STORAGE NA DIV HOME */
	
 if(meuspets.opcaoAnimal == tipoAnimalCachorro && meuspets.opcaoSexo == tipoSexoAnimalCachorro) 
 {
	let meuspets_nome_animal_a = document.createTextNode (meuspets.nomeAnimal);
	let meuspets_nome_animal_h4 = document.createTextNode('Oi, sou a ' + meuspets.nomeAnimal);
	let meuspets_sobre_animal_p = document.createTextNode( meuspets.nomeAnimal + ' é Muito, mas muito dócil, carinhosa, tranquila, educada, convive bem com cães machos e pessoas, é uma querida!. Ela '+ meuspets.opcaoCastrado +', '+ meuspets.opcaoVacinado +' e '+ meuspets.opcaoVermifugada +' . Contatos '+ meuspets.cidade +' . '+ meuspets.email +' ou pelo telefone: '+ meuspets.telefone +' .');

	img.setAttribute('src','img/dog_foliage_autumn_104944_1280x720.jpg');

	article.setAttribute('class','servico');
	div.setAttribute('class', 'inner');

	article.appendChild(img);
	article.appendChild(div);

	div.appendChild(a);
	div.appendChild(h4);
	div.appendChild(p);

	a.appendChild(meuspets_nome_animal_a);
	h4.appendChild(meuspets_nome_animal_h4);
	p.appendChild(meuspets_sobre_animal_p);

	document.querySelector('#main4').appendChild(article);


	 
 }

 /*MOSTRANDO OS CACHORROS CADASTRADOS DO LOCAL STORAGE NA DIV HOME */
	
 if  (meuspets.opcaoAnimal == tipoAnimalCachorro && meuspets.opcaoSexo == tipoSexoAnimalCachorroMacho) 
 {
	let meuspets_nome_animal_a = document.createTextNode (meuspets.nomeAnimal);
	let meuspets_nome_animal_h4 = document.createTextNode('Oi, sou o ' + meuspets.nomeAnimal);
	let meuspets_sobre_animal_p = document.createTextNode (meuspets.nomeAnimal+ ' . '+ meuspets.opcaoCastrado +', '+ meuspets.opcaoVacinado +' e '+ meuspets.opcaoVermifugada +', é muito bonzinho, amoroso, feliz, dócil e carente e adora brincar com outros amigos caninos e ficar perto das pessoas, um querido! Contatos '+ meuspets.cidade +'; '+ meuspets.email +' ou ligue '+ meuspets.telefone +'.  ');

	img.setAttribute('src','img/puppy_grass_lie_color_84136_1280x720.jpg');

	article.setAttribute('class','servico');
	div.setAttribute('class', 'inner');

	article.appendChild(img);
	article.appendChild(div);

	div.appendChild(a);
	div.appendChild(h4);
	div.appendChild(p);

	a.appendChild(meuspets_nome_animal_a);
	h4.appendChild(meuspets_nome_animal_h4);
	p.appendChild(meuspets_sobre_animal_p);

	document.querySelector('#main4').appendChild(article);
	

 }

		
 
})
} 

