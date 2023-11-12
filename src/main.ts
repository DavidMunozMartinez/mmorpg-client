import { OverlayModal } from './overlays/overlay.modal';
import { MainPlayer } from './player/player.class';
import './style.scss'

import { LoginService } from './utils/login.service'
import { ServerService } from './utils/server.service';

async function init () {
  const auth = await LoginService.isAuth();
  if (auth) {
    ServerService.initWSConnection();
    MainPlayer.initEvents();
    // Gather player data
  } else {
    // Render login view
    OverlayModal;
  }
}

init();