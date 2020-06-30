import { useEffect, useState } from 'react'
import crypto from 'crypto'

export const useFetch = (path, method, data) => {

  const [response, setReponse] = useState(null)
  const [error, setError] = useState(null)

  const URL_API = process.env.REACT_APP_TAUROS_ENDPOINT;
  const api_key = process.env.REACT_APP_TAUROS_API_KEY;
  const api_secret = process.env.REACT_APP_TAUROS_API_SECRET;

  let nonce = Date.now() / 1000;
  nonce = nonce.toString().replace(".", "");

  let message = nonce + method.toUpperCase() + path;

  let api_sha256 = crypto.createHash('sha256').update(message).digest();

  // create a sha512 hmac with the secret
  let hmac = crypto.createHmac('sha512', Buffer.from(api_secret, 'base64'));

  let signature = hmac.update(api_sha256).digest('base64');

  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + api_key,
    'Taur-Nonce': nonce,
    'Taur-Signature': signature
  };

  let request = {
    method: method,
    headers: headers,
    // body: JSON.stringify(data)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL_API + path, request)
        const json = res.ok ? await res.json() : { status_code: res.status, message: res.statusText }
        setReponse(json)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [])

  return { response, error }
}