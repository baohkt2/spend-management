// app/page.js
export default function HomePage() {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Spend Management</h1>
        <p className="mt-4">Manage your expenses efficiently!</p>
        <a href="/login" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">
          Login
        </a>
      </div>
    );
  }