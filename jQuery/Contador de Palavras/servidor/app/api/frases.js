var api = {};

var frases = [
	{_id: 0, texto:'A arte de programar consiste em organizar e dominar a complexidade.', tempo: 15 },
	{_id: 1, texto:'O espaço entre a teoria e a prática não é tão grande como é, a teoria na prática.',tempo: 8 },
	{_id: 2, texto:'Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.', tempo: 15 },
	{_id: 3, texto:'Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.', tempo: 15 },
	{_id: 4, texto:'Ciência da computação é tão sobre computadores quanto astronomia é sobre telescópios.', tempo: 15 },
	{_id: 5, texto:'Na minha máquina funciona.', tempo: 5 },
	{_id: 6, texto:'Hardware é o que você chuta, software é o que você xinga.', tempo: 12 },
	{_id: 7, texto:'Falar é fácil. Mostre-me o código.', tempo: 10 },
	{_id: 8, texto:'Nove pessoas não podem fazer um bebê em um mês.', tempo: 7},
	{_id: 9, texto:'Há dois principais produtos que saem de Berkeley: LSD e UNIX.Nós não acreditamos que isso seja uma coincidência.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
