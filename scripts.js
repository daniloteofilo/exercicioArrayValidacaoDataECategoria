let pessoas = [
    {nome: "Carlos" , 
    dataDeNascimento: "1990-06-29" , 
    aprovado: true , 
    categorias: ["A"]},


    {nome: "Ricardo" , 
    dataDeNascimento: "1976-04-23" , 
    aprovado: true , 
    categorias: ["A" , "B" , "C"] },

  
    {nome: "Rafael" , 
    dataDeNascimento: "1995-05-01" , 
    aprovado: true, 
    categorias: ["A" , "B"]},
  
  
  
    {nome: "Larissa" , 
    dataDeNascimento: "2000-03-04" , 
    aprovado: true , 
    categorias: ["A"]}
]

let data = new Date();
let dia = String(data.getDate()).padStart(2, "0");
let mes = String(data.getMonth() + 1).padStart(2, "0");
let ano = data.getFullYear() - 18;
let dataAtual = (ano + "-" + mes + "-" + dia);

function listarAprovadosECategoria() {
    for (let i = 0; i < pessoas.length; i++) 

        for (let j = 0; j < pessoas[i].categorias.length; j++) {
            const categorias = pessoas[i].categorias[j];
        
        if(pessoas[i].aprovado && pessoas[i].dataDeNascimento <= dataAtual && categorias == "B"){
            console.log(pessoas[i].nome)
            }
        
    }
    }
    
    listarAprovadosECategoria()