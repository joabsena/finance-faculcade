## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:alpine

## Define o local onde o app vai ficar no disco do container
WORKDIR /usr/app


## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/app
COPY package*.json ./

## Executa yarn para adicionar as dependências e criar a pasta node_modules
RUN yarn

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
COPY . .

## Container ficará ouvindo os acessos na porta 3333
EXPOSE 3333

## Executa o comando yarn dev para iniciar o script que que está no package.json
CMD ["yarn", "dev"]