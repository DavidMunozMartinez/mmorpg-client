import { OverlayModal } from './overlays/overlay.modal';
import './style.scss'

import { LoginService } from './utils/login.service'
import { ServerService } from './utils/server.service';

async function init () {
  const auth = await LoginService.isAuth();
  if (auth) {
    ServerService.initWSConnection()
    // Gather player data
  } else {
    // Render login view
    OverlayModal;
  }
}

init();