import { createSignal } from 'solid-js'
import { ServerService } from '../../utils/server.service'

export function AuthenticateComponent () {
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')

  const authenticate = () => {
    ServerService.authenticateAccount(email(), password())
      .then(({ success }) => {
        console.log(success)
      })
      .catch(() => {

      })
      .finally(() => {

      })
  }
  return (
    <div>
    <h2>Authenticate</h2>
    <input type="text" onchange={(e) => setEmail(e.target.value)} />
    <input type="password" name="password" id="password" onchange={(e) => setPassword(e.target.value)} />
    <button onclick={() => { authenticate() }}></button>
  </div>
  )
}
