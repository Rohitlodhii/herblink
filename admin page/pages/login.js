import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function submit(e){
    e.preventDefault();
    setError('');
    // store credentials in sessionStorage as Basic auth token and optionally try a test call
    try{
      const { saveCredentials, apiFetch } = await import('../lib/apiClient');
      saveCredentials(username, password);
      // Optional test: call a lightweight protected endpoint if available
      const test = await apiFetch('/admin/health', { method: 'GET' });
      if(test && !test.ok && test.status !== 401){
        // proceed anyway; many APIs won't expose /admin/health
      }
      router.replace('/');
    }catch(err){
      console.error(err);
      setError('Login saved locally. If the external API requires different auth, adjust credentials.');
      router.replace('/');
    }
  }

  return (
    <div className="container">
      <h1>Admin Login</h1>
      <form onSubmit={submit} aria-describedby="err"> 
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" value={username} onChange={e=>setUsername(e.target.value)} required autoFocus />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <div style={{marginTop:'.5rem'}}>
          <button className="primary" type="submit">Sign in</button>
        </div>
        {error && <p id="err" role="alert" style={{color:'crimson'}}>{error}</p>}
      </form>
    </div>
  );
}
