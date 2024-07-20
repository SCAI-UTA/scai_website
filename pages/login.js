
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your authentication logic here
    if (email === 'test@example.com' && password === 'password') {
      // Redirect to a protected page or dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login </button>
      </form>
      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 1rem;
        }
        form div {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          box-sizing: border-box;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Login;
