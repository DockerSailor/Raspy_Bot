<em>
<h1>Raspy_Bot: como manejar una raspberry desde telegram</h1>

<h1>Descripción</h1>
<p>
    La finalidad de este proyecto es poder gestionar una Raspberry Pi 5 sin necesidad de estar en la misma ubicación que esta.
</p>

<h1>Características</h1>
<p>
    Actualmente cuenta con la posibilidad de ejecutar pings y comprobar la temperatura de la raspberry.
</p>

<h1>Instalación</h1>
<p>
Para ejecutar el proyecto hay que descargar el repositorio, y en la raiz crear un archivo .env que contenga lo siguiente:
Telegram_Token="TU_TOKEN_PARA_EL_BOT"

Para obtenerlo tienes que crear un bot usando FatherBot.
</p>

<h1>Uso</h1>
<p>
    Para usar la aplicacion, ejecutar pm2 start/stop Telegram Bot/src/index.js
</p>

<h1>Teconologías</h1>
<p>
    Este proyecto necesita las siguientes dependencias:

https://www.npmjs.com/package/dotenv
https://www.npmjs.com/package/node-telegram-bot-api
https://www.npmjs.com/package/pm2
https://nodejs.org/api/child_process.html#child-process
</p>

<h1>Histórico de versiones</h1>
<p>
<h3>V1.0.0</h3>Primera release, comandos de ping y temperatura funcionales.
</p>
</em>