//Declaração da classe do Heroi
class usuarioHeroi{
    constructor(nomeHoroi,idadeHeroi,tipoHeroi){
        this.nomeHoroi = nomeHoroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
        this.attck = null
        
    }
    //Tipos de Ataques
   atackHero(){
    switch(this.tipoHeroi){
        case "mago":
            this.attck = "Mágia"
            break;
        case "guerreiro":
            this.attck = "Espada"
            break;
        case "monge":
            this.attck = "Artes Marciais"
            break;
        case "ninja":
            this.attck = "Shuriken"
            break;
        case "buda":    
            default:
            // Esse é um ataque gênerico que será usado sempre que o heroi especificado não corresponder aos do case do switch
            this.attck = "***** Furia de Tita *****";
        }                                   

    }
    //Menssagem do tipo de ataque
    attckJogador(){
        this.atackHero();
        console.log(`O Jogador ${this.tipoHeroi} atacou usando ${this.attck}`)
    }
    //Menssagem do nome do jogador e sua Idade
     showNameAge(){
        console.log(`O herói ${this.nomeHoroi} tem  ${this.idadeHeroi} anos de  idade`);
     }
}
    //Criação de Objetos dos Atributos do Jogador
    let mago = new usuarioHeroi("Ruan",34,"mago");
    let guerreiro = new usuarioHeroi("Diego",35, "guerreiro");
    let ninja = new usuarioHeroi("Arthur",25,"ninja");
    let monge = new usuarioHeroi("Wellington",42, "monge");
  
   //Imprimindo na tela
   mago.showNameAge();
   mago.attckJogador();
   console.log("-----------------------------------")
   guerreiro.showNameAge();
   guerreiro.attckJogador();
   console.log("-----------------------------------")
   ninja.showNameAge();
   ninja.attckJogador();
   console.log("-----------------------------------")
   monge.showNameAge();
   monge.attckJogador();

