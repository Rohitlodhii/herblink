// Client-side API helper to call external admin APIs
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function getAuthHeader(){
  if(typeof window === 'undefined') return {};
  const creds = sessionStorage.getItem('adminCreds');
  if(!creds) return {};
  return { 'Authorization': `Basic ${creds}` };
}

export async function apiFetch(path, options = {}){
  const url = API_BASE ? `${API_BASE.replace(/\/$/, '')}${path.startsWith('/')?path:''}` : path;
  const headers = Object.assign({}, options.headers || {}, getAuthHeader());
  if(!headers['Content-Type'] && !(options.body instanceof FormData)) headers['Content-Type'] = 'application/json';
  const res = await fetch(url, Object.assign({}, options, { headers }));
  return res;
}

export function saveCredentials(username, password){
  if(typeof window === 'undefined') return;
  const token = btoa(`${username}:${password}`);
  sessionStorage.setItem('adminCreds', token);
}

export function clearCredentials(){
  if(typeof window === 'undefined') return;
  sessionStorage.removeItem('adminCreds');
}

export function isAuthenticated(){
  if(typeof window === 'undefined') return false;
  return !!sessionStorage.getItem('adminCreds');
}
