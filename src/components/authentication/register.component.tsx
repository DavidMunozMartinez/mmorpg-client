import { createSignal } from 'solid-js'
import { ServerService } from '../../utils/server.service'

export function RegisterComponent () {
  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')
  // const [loading, setLoading] = createSignal(false)

  const register = () => {
    // setLoading(true)
    ServerService.registerAccount(email(), password())
      .then(({ success }) => {
        console.log(success)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        // setLoading(false)
      })
  }

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
    <>
      <div>
        <h2>Register</h2>
        <input type="text" onchange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" onchange={(e) => setPassword(e.target.value)} />
        <button onclick={() => { register() }}></button>
      </div>
      <div>
        <h2>Authenticate</h2>
        <input type="text" onchange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" onchange={(e) => setPassword(e.target.value)} />
        <button onclick={() => { authenticate() }}></button>
      </div>
    </>
  )
}
