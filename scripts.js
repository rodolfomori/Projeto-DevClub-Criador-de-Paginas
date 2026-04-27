/* 
Lógica de Programação

Algoritmo - Receita de BOLO

[x] Saber quando o botão foi clicado
[x] Pegar o texto do TextArea
[x] Enviar para a IA(servidor)
[x] Pegar a resposta da IA
[ ] Colocar na tela
    [x] Código
    [x] Resultado do Código     
[ ] Refinar nosso resultado        

    querySelector - pega um elemento que eu escolher
    HTML - document
    JavaScript - script
*/
let endereco = "https://api.groq.com/openai/v1/chat/completions"

// Clicou no Botão GERAR - Chama essa função
async function gerarCodigo() {


    let textarea = document.querySelector(".texto-pagina").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <SUA CHAVE AQUI>"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": "Você é um Programador. Você recebe uma tema de negócio e cria uma pagina com HTML e CSS. Responda apenas com código. A pagina é em Portugues do Brasil"
                }
            ],
        })
    })


   let dados = await resposta.json()
   let resultado = dados.choices[0].message.content

   let espacoCodigo = document.querySelector(".bloco-codigo")
   let espacoSite = document.querySelector(".bloco-site")

   espacoCodigo.textContent = resultado
   espacoSite.srcdoc = resultado
}

/* 
IA para gerar o que queremos 

1) Qual o modelo de IA vamos usar
2) system - Quem a IA deve ser - Programador / Designer
3) user - mensagem do usuário

*/


