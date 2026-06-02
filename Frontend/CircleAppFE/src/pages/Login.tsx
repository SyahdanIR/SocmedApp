function Login() {
  return (
    <div className="p-4 mt-10 mx-auto">
      <img src="../src/assets/circle_app.png" alt="Login Icon"/>
      <h1 className="text-3xl font-bold py-4 text-white p-5">Login to Circle</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm mx-auto">
        <input type="text" placeholder="Email/Username" className="border-2 border-white rounded-lg p-2" />
        <input type="password" placeholder="Password" className="border-2 border-white rounded-lg p-2" />
        <button className="bg-green-600 text-white rounded-lg p-2 border-2 border-black">Login</button>
      </form>
      <p className="text-center text-sm mt-4">Don't have an account? <a href="#" className="text-green-500">Create account</a></p>
    </div>
  )
}

export default Login