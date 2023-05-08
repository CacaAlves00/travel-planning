# travel-planning
Aplicativo planejador de viagem.
A duração das viagens tomam como meio de locomoção um automóvel.
Implementado, tanto no **frontend** como no **backend**, com a linguagem TypeScript.
Implementado com a biblioteca React no **frontend** e com Node.js (utilizando Express) no **backend**.
O banco de dados utilizado foi NeDB.

[Project design no Figma](https://www.figma.com/file/LVZ2NWQhBk3ctXonYirSA8/Untitled?type=design&node-id=0-1)

[Color palette usada](https://coolors.co/palette/292625-ea4633-f5f8fc-7fc8f8-5ebd78-fde74c)

# Como instalar

- Faça o clone do repositório
- Instale a dependências (com o comando *npm i*), tanto na pasta **frontend** como na pasta **backend**.
- Crie um arquivo .env no **backend** e insira um valor para PORT (e.g., PORT=3333).
- Faça login na Rapid API e subscreva-se nas API's TrueWay Matrix (https://rapidapi.com/trueway/api/trueway-matrix/) e GeoDB Cities (https://rapidapi.com/wirefreethought/api/geodb-cities/)
- Crie um arquivo .env no **frontend** e insira um valor para REACT_APP_BACKEND_URL (e.g., REACT_APP_BACKEND_URL=http://localhost:3333/api/v1, sendo *3333* o valor de PORT atribuído no arquivo .env do **backend**) e REACT_APP_RAPIDAPI_KEY (esta última é a KEY da Rapid API).
# Como usar
- Inicie o **backend** executando o comando *npm run dev*
- Inicie o **frontend** executando o comando *npm run start*

![Captura de tela de 2023-05-08 18-51-39](https://user-images.githubusercontent.com/96545053/236945431-d54e7251-945c-4cd8-b12e-4aa97b54afdc.png)
![Captura de tela de 2023-05-08 18-51-49](https://user-images.githubusercontent.com/96545053/236945452-3475796d-9df0-4573-b733-0ff24b84569e.png)
![Captura de tela de 2023-05-08 18-52-11](https://user-images.githubusercontent.com/96545053/236945475-c5d71691-d76a-4c5e-af50-f76732548024.png)

