import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query'
import axios from 'axios';

export default function SignUp() {
  let navigate = useNavigate();


  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confPassword:''

  });

  const { name, email, password, confPassword } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const body = JSON.stringify(form);

      const response = await axios.post('http://localhost:5000/users', body, config);
      console.log("ini response", response);

      // Notification
      if (response.data === 201 || 200) {
        navigate("/sign-in")
        setForm({
          email: '',
          password: '',
          name: '',
          confPassword:''
        });
      } else {
      }
    } catch (error) {
      
      // setMessage(alert);
      console.log(error);
    }
  });
  // console.log(form);
  // console.log("ini response", response);


  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" method="POST" onSubmit={(e) => handleSubmit.mutate(e)}>
              {/* {isError && <p>{message}</p>} */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="name"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confPassword" className="block text-sm font-medium text-gray-700">
                  Confirm your password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="confPassword"
                    name="confPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={confPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
               onClick={(e) => {
                // handleClose()
                handleSubmit.mutate(e)
              }}
                  // disabled={email === '' || password === '' || password !== confPassword}
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Sign me up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
