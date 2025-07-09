import '../styles/globals.css'

// Conditionally import AuthProvider if it exists
let AuthProvider;
try {
  const authContext = require('../contexts/AuthContext');
  AuthProvider = authContext.AuthProvider;
} catch (e) {
  // AuthProvider not available yet, use a passthrough component
  AuthProvider = ({ children }) => children;
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp