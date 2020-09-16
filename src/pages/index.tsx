import React from 'react'
import App from '../components/App'

export const config = { amp: true }

const Home = () => <App />

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }: any) {
  // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
  // Be sure your load balancer is configured to not allow spoofed host headers.
  return { props: { host: `${getProtocol(req)}://${req.headers.host}` } }
}

function getProtocol(req: any) {
  if (req.connection.encrypted) {
    return 'https'
  }
  const forwardedProto = req.headers['x-forwarded-proto']
  if (forwardedProto) {
    return forwardedProto.split(/\s*,\s*/)[0]
  }
  return 'http'
}

export default Home
