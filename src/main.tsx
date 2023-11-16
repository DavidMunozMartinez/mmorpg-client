/* @refresh skip */
import { LoginService } from './utils/login.service'
import { WebSocketService } from './utils/websocket/websocket.service';
import { initializeCurrentLivePlayers, initializeMainPlayer } from './player/player.handler';
import { render } from 'solid-js/web';

import './style.scss'
import { ServerService } from './utils/server.service';

const app = document.getElementById('app');
render(App, app!)

/**
 * Initialize the game here
 */
function App() {
  async function init () {
    const auth = await LoginService.isAuth();
    if (auth) {
      // Get online players before we ourself go online so we don't get ourself in the list
      const players = await ServerService.getOnlineRenderPlayers();
      initializeCurrentLivePlayers(players);

      await WebSocketService.init(auth.playerId);
      initializeMainPlayer(auth.playerId);
    }
  }
  init();

  return (
    <>
      <div class="game-view">
        {/* Turn map into a SolidJS component */}
        <div id="map" class="game" tabindex="0"></div>
        {/* Turn inventory into a SolidJS component */}
        <div class="inventory"></div>
      </div>
      {/* Turn chat into a SolidJS component */}
      <div class="chat"></div>
    </>
  )
}