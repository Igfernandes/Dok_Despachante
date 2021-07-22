# Thema: Dok - Despachante
# Desenvolvedor: Igor Fernandes Barreto

O projeto foi construído para atender a uma vaga de emprego


## 🔗 Grade de conteúdos:

- [Recursos](#recursos)
- [Arquitetura](#arquitetura)
- [Instruções](#instruções)


============================//================//===========

## ⚡ RECURSOS:

### [RECURSOS] - Styles
- [Normalize](https://necolas.github.io/normalize.css/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/)

### [RECURSOS] - Scripts
- [Jquery](https://jquery.com/download/)
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [popper](https://popper.js.org)
- Bootstrap



## 📂 ARQUITETURA

<table>
    <thead>
        <tr>
            <td>Directório</td>
            <td>1° Setor</td>
            <td>2° Setor</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>assets</td>
            <td>dist ~| src</td>
            <td>css - Js   ~|  fonts - img</td>
        </tr>
        <tr>
            <td>includes</td>
            <td>html5shive  ~| normalize</td>
        </tr>
    </tbody>
</table>


## [ARQUITETURA] - Visual:

| Directório     | 1° Setor                 | 2° Setor                                          |  
| assets         | dist      ~| src         | css - js    ~|   fonts - img                      | 
| includes       | html5shiv ~| normalize   | ...                                               | 


## 📂 INSTRUÇÕES


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS

<pre>
- A folha de estilo está divida. Crie a sua e introduza o chamado dela no arquivo "landing-globals.css"
</pre>

<h3><strong>Abaixo se encontra uma tabela com a indicação de cada arquivo de estilo:</strong></h3>



## [INSTRUÇÕES] - COD:

<table>
    <thead>
        <tr>
            <td>Função</td>
            <td>Arquivo</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Índice</td>                   
            <td>landing-globals.scss</td>
        </tr>
        <tr>
            <td>responsive</td>
            <td>responsive/_responsive.scss</td>
        </tr>
        <tr>
            <td>libary</td>
            <td>libary/bootstrap/bootstrap.min.scss</td>
            <td>libary/bootstrap/bootstrap.rtl.min.scss</td>
        </tr>
        <tr>
            <td>layout</td>
            <td>articles/_articles.css</td>
            <td>footer/_footer.css</td>
            <td>form/_form.css</td>
            <td>info/_info.css</td>
            <td>main/_main.css</td>
            <td>prices/_prices.css</td>
        </tr>
        <tr>
            <td>globals</td>
            <td>globals/_font.css</td>
            <td>globals/_tags.css</td>
            <td>globals/_vars.css</td>
        </tr>
    </tbody>
</table>


## [INSTRUÇÕES] - Visual:

| Função                     | Arquivo                              |
| ---                        |                                      |
| Índice                     |  landing-globals.csss                |
| responsive                 |  responsive/_responsive.css          |
| Fontes                     |  globals/_font.css                   |
| cores                      |  globals/_vars.css                   |
| bibliotecas                |  libary/bootstrap/bootstrap.min.css  |
| layouts                    |  layout/...                          | 
| Keyframes adicioais        |  ...                                 |   


**OBS¹: O container principal que engloba o layout respeita a configuração do bootstrap de "col-11" para dispositivos desktop e "col-12" para dispositivos com telas menores do que 1444px.**

Na função criada de responsividade, existem as seguintes medidas:

| Dispositivo                 | Largura    |
| Extra largo (desktop)       | 1550px     |
| Largo (laptop)              | 1050px     |
| media (tablet)              | 780px      |
| pequeno (mobile)            | 550px      |


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - JS
<pre>
- As declarações precisam ser criadas dos arquivos presentes na pasta "/main". Caso haja necessidade de criar outro, exporte e importe tudo para landing-globals.js
</pre>

