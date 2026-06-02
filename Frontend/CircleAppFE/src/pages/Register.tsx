function Register() {
  return (
    <div className="p-4 mt-10 mx-auto">
      <img src="../src/assets/circle_app.png" alt="Login Icon"/>
      <h1 className="text-3xl font-bold py-4 text-white p-5">Create account Circle</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="border-2 border-white rounded-lg p-2" />
        <input type="text" placeholder="Email" className="border-2 border-white rounded-lg p-2" />
        <input type="password" placeholder="Password" className="border-2 border-white rounded-lg p-2" />
        <button className="bg-green-600 text-white rounded-lg p-2 border-2 border-black">Register</button>
      </form>
      <p className="text-center text-sm mt-4">Already have an account? <a href="#" className="text-green-500">Sign in</a></p>
    </div>
  )
}

export default Register