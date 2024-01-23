# Pendrivify

Pendrivify cria uma lista personalizada de suas músicas mais escutadas no Spotify que você pode baixar e compartilhar nas redes sociais. É voltado para o público brasileiro e é inspirado nos pen drives com música gravada que são vendidos em camelôs. Você pode ler sobre eles [aqui](https://www.vice.com/es/article/nezavw/pirateria-digital-usb-musica-san-andresito).

Se preferir, pode ler esta documentação em <a href="https://github.com/scsoares/pendrivify/blob/master/README.md">inglês</a> ![great britain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png)

### Pré-requisitos:

Google Chrome or outro navegador instalado, Python3 instalado e uma conta no Spotify.

### Instruções:

1. ```
   git clone https://github.com/scsoares/pendrivify
   ```

   ou baixe este repositório em [pasta zipada](https://github.com/scsoares/pendrivify/archive/master.zip).

2. Extraia a pasta zipada e você terá uma pasta de nome `pendrivify-main`.

3. Vá para o seu [Painel de desenvolvedor do Spotify](https://developer.spotify.com/dashboard/) e crie sua aplicação. Eu registrei essa URI de redirecionamento, e você pode copiá-la (pode usar uma porta diferente também, mas mantenha o /redirect):

- http://localhost:5000/redirect

1. Uma vez criada a aplicação, insira seu CLIENT_ID, CLIENT_SECRET a crie uma chave SECRET_KEY aleatória no arquivo credentials.py.

2. Para rodar a aplicação, abra a pasta `pendrivify-main` e digite no terminal:

```
pip install -r requirements.txt
Flask run
```

3. Então, vá em `http://localhost:5000` ou sua porta escolhida no seu navegador.

## Feito com

`HTML` `CSS` `JavaScript` `Flask`

## Autores

- **Sarah Soares** - [scsoares](https://github.com/scsoares)

## Histórico de versões

- 1.0.0 BETA
  - Versão inicial

## Contribuição

Se tiver alguma sugestão de melhora, sinta-se livre pra [me mandar um e-mail](mailto:sasodsgn@gmail.com) ou solicitar um pull request! 🙂

## Reconhecimentos

- Inspiração: projeto [Receiptify](https://receiptify.herokuapp.com/) da [Michelle Liu](https://github.com/michellexliu) e [Receiptify-flask](https://github.com/eriktoor/receiptify-flask)
