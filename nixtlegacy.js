/*
NixtJS Legacy Edition 1.05.01 BETA ->

Um grande salve para o meu amigo @K4w4n por me dar uma luz e meu amigo @adaoduque por sanar minhas dúvidas

1.0    Alpha versão inicial
1.01   Beta -> Adicionado a função template() de forma correta, e bugfixes
1.02   Beta -> Adicionado a função value() e alguns bugfixes
1.02.1 Beta -> MAIS bugfixes e deixando a função value() totalmente funcional
1.02.2 Beta -> adicionado a função show()
1.03   Beta -> ondblclick() toggle()
1.04   Beta -> adicionar funções de prepend()

1.05   Beta -> Uso de Arrow Functions, addClass(), removeClass(), toggleClass(), removeAttribute(), remove() e empty()

1.05.01 Beta -> Função template, temporarariamente removida por falta de uso e limitação por design

O Projeto ->

NixtJS Legacy Edition by isaiasroberto, MIT License

Vantagens:
    Usa conexão no DOM puro e de forma direta
    
    querySelectorAll com Loops sem uso excessivo de memoria
    
    É incrivielmente rápido que nem se nota delay em troca de atributos DOM
    
    leve, "minifyzado" não deve passar de dezena de kilobytes
    
    codigo fácil de ser entendido e extendido
    
    depende de zero frameworks e libs
    
    facilmente modificavel para colocar suas próprias funções

Desvantagens:
    Como é um projeto puramente amador e em fase beta, não é recomendado para ser usado em produção
    Não foi testado com outras bibliotecas Javascript

Funcionamento e Guia de modificação:

const nixt = (proto) => ({
    desiredFunction: function ( atribs , ...) {
        let a = document.querySelectorAll(proto).length; // O lenght do Array do querySelectorAll de um seletor, mostrando em quantidade (lenght) de seletores existentes
        for (i = 0; i < a; i++) { // um loop para percorrer cada seletor via numero index de lenght para aplicar os atributos necessarios
            document.querySelectorAll(proto)[i] ... // Um modificador DOM querySelectorAll que modifica como configurado no código o selector selecionado via index da array i gerada pelo loop para percorrer todos os seletores (lenght)
        }
    }
});

docs uteis pra vc colocar mais funções:
https://www.w3schools.com/jsref/met_element_setattribute.asp
https://www.w3schools.com/jsref/met_element_addeventlistener.asp
https://www.w3schools.com/jsref/dom_obj_event.asp
https://www.w3schools.com/jsref/dom_obj_style.asp

*/

var NixtReady = () => true; // serve para verificar por fontes externas se o nixt está mesmo alí :)

const nixt = (proto) => ({
    html: function (themVar) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].innerHTML = themVar;
        }
    },
    text: function (themVar) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].innerText = themVar;
        }
    },
    /*template: function (element, attr, content) {
        this.content = content;
        // attr = { attrName: STRING, attrValue: STRING}
        let p = document.createElement(element);
        let attName = attr.attributeName; let attValue = attr.attributeValue;
        p.setAttribute(attName, attValue);
        p.innerHTML = content;
        return {
            render: function () {
                let a = document.querySelectorAll(proto).length;

                for (i = 0; i < a; i++) {
                    document.querySelectorAll(proto)[i].appendChild(p);
                }
                //nixt( proto ).html( content );
            }
        };
    },*/
    stylize: function (style) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].setAttribute("style", style);
        }
    },
    click: function (func) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].addEventListener("click", func);
        }
    },
    dblclick: function (func) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].addEventListener("dblclick", func);
        }
    },
    hide: function () {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].setAttribute("style", "display:none");
        }
    },
    show: function () {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].setAttribute("style", "display:block");
        }
    },
    toggle: function () {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            if (document.querySelectorAll(proto)[i].style.display === "none") {
                document.querySelectorAll(proto)[i].style.display = "block";
            } else {
                document.querySelectorAll(proto)[i].style.display = "none";
            }
        }
    },
    append: function (text) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].append(text);
        }
    },
    prepend: function (text) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].prepend(text);
        }
    },
    setAttribute: function (attrName, value) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].setAttribute(attrName, value);
        }
    },
    addClass: function (className) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].classList.add(className)
        }
    },
    removeClass: function (className) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].classList.remove(className)
        }
    },
    removeAttribute: function (attrName) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].removeAttribute(attrName);
        }
    },
    toggleClass: function (className) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].classList.toggle(className)
        }
    },
    value: function (arg) {
        if (arg) {
            let a = document.querySelectorAll(proto).length;
            for (i = 0; i < a; i++) {
                document.querySelectorAll(proto)[i].value = arg;
            }
        } else {
            return document.querySelector(proto).value;
        }
    },
    remove: function() {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].remove();
        }
    },
    empty: function (themVar) {
        let a = document.querySelectorAll(proto).length;
        for (i = 0; i < a; i++) {
            document.querySelectorAll(proto)[i].innerHTML = "";
        }
    }
});
