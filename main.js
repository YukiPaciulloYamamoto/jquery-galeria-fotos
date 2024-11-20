$(document).ready(function() { //.ready é "quando o documento(HTML) estiver pronto"
    $('header button').click(function(){ //.click ao realizar o click no botão do header
        $('form').slideDown(); //Ao clicar no botão "Nova Imagem +" ele faz com que desça a area para adicionar mais fotos
    })

    $('#botao-cancelar').click(function() { // Ao clicar no botão cancelar ele fecha a aba de adicionar foto
        $('form').slideUp(); //Ao clicar no botão "Cancelar" ele sobe a aba de adicionar mais fotos
    })

    $('form').on('submit', function(e){ // Pegando oq for inserido no input
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // o .val é a mesma coisa do .value
        const novoItem = $('<li style="display: none"></li>');  // Criando constante para colocar novos valores || <li style="display: none"></li> = é nescessario para o efeito fadeIn funcionar (Porque deixa o meu a imagem colocada invisivel)
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // O .appendTo serve para pegar um elemento e colocar em outro
        $( // Criando a função para adicionar a barra "Ver imagem em tamanho real"
            `<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); 
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $('#endereco-imagem-nova').val('') // Limpando a caixa de input após apertar no botão
    })
})
