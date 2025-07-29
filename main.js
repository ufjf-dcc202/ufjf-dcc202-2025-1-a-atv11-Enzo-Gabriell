import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const btnApagar = document.querySelector("#apagar");

btnAdicionar.addEventListener('click', adicionaItemNaLista);
btnLimpar.addEventListener('click', limparItensDeLista);
btnApagar.addEventListener('click', apagarItemSelecionado);

let indiceSelecionado = null;

function adicionaItemNaLista() {
    adicionaNaLista(pEntrada.textContent);
    pEntrada.textContent = "";
    atualizarLista();
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}

function apagarItemSelecionado() {
    removeDaLista(indiceSelecionado);
    atualizarLista();
}

function atualizarLista() {
    olItens.innerHTML = " ";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        li.addEventListener('click', () => {
            indiceSelecionado = i;
            atualizarLista();
        });
        olItens.appendChild(li);
    }
}

atualizarLista();