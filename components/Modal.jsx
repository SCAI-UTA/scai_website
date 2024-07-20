
// import { useState, useEffect } from 'react';

// const Modal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === 'test@example.com' && password === 'password') {
//       window.location.href = '/dashboard';
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <h1 className="login-heading">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error">{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//       <style jsx>{`
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 1000;
//           backdrop-filter: blur(5px);
//         }
//         .modal-content {
//           background: rgba(255, 255, 255, 0.7);
//           padding: 2rem;
//           border-radius: 8px;
//           width: 90%;
//           max-width: 400px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           text-align: center;
//         }
//         .login-heading {
//           color: black;
//           margin-bottom: 1rem;
//         }
//         form {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
//         form div {
//           width: 90%;
//           margin-bottom: 1rem;
//         }
//         label {
//           display: block;
//           margin-bottom: 0.5rem;
//           text-align: left;
//           color: black;
//         }
//         input {
//           width: 100%;
//           padding: 0.5rem;
//           box-sizing: border-box;
//           background: rgba(255, 255, 255, 0.8);
//           border: 1px solid rgba(0, 0, 0, 0.2);
//           border-radius: 4px;
//           color: black;
//         }
//         input::placeholder {
//           color: rgba(0, 0, 0, 0.5);
//         }
//         button {
//           padding: 0.5rem 1rem;
//           background-color: black;
//           color: #fff;
//           border: none;
//           cursor: pointer;
//           margin-top: 1rem;
//           border-radius: 4px;
//         }
//         .error {
//           color: #ff6b6b;
//           margin-top: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Modal;

import { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up logic
      console.log('Sign up:', { firstName, lastName, email, password });
    } else {
      // Handle login logic
      if (email === 'test@example.com' && password === 'password') {
        window.location.href = '/dashboard';
      } else {
        setError('Invalid email or password');
      }
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="login-heading">{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div>
                <label htmlFor="firstName" className="small-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="small-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="small-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="small-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button-group">
            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
            <p className="toggle-signup">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <a href="#" onClick={toggleSignUp}>
                {isSignUp ? 'Login' : 'Sign Up'}
              </a>
            </p>
          </div>
        </form>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background: rgba(255, 255, 255, 0.7);
          padding: 2rem;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .login-heading {
          color: black;
          margin-bottom: 1rem;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        form div {
          width: 90%;
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.4rem;
          text-align: left;
          color: black;
        }
    
          .small-label {
            font-size: 0.8rem; // Adjust this value to make the text smaller or larger
            padding-left: 17px; // Add left padding to move labels to the right
          }
        input {
          width: 90%;
          padding: 0.5rem;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          color: black;
        }
        input::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        .button-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        button {
          padding: 0.5rem 1rem;
          background-color: black;
          color: #fff;
          border: none;
          cursor: pointer;
          margin-top: 1rem;
          border-radius: 4px;
          width: 40%;
        }
        .error {
          color: #ff6b6b;
          margin-top: 1rem;
        }
        .toggle-signup {
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .toggle-signup a {
          color: #66668a;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Modal;