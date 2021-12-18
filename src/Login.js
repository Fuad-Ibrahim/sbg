function Login({ logIn }) {
  return (
    <div>
      <label htmlFor="email">
        Email:
        <input name="email" type="text" />
      </label>
      <label htmlFor="Password">
        Password:
        <input name="password" type="text" />
      </label>
      <button>Login</button>
    </div>
  );
}

export default Login;
