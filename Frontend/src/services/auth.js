export const login = async (email, password) => {
  // Mock login function
  if (email === 'test@example.com' && password === 'password') {
    return { email, token: 'fake-jwt-token' };
  } else {
    throw new Error('Invalid credentials');
  }
};
