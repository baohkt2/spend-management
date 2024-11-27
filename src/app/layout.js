export const metadata = {
  title: "Spend Management App",
  description: "Manage your expenses efficiently with our app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#0070f3", color: "white" }}>
          <h1>Spend Management</h1>
          <nav>
            <a href="/" style={{ marginRight: "1rem", color: "white" }}>Home</a>
            <a href="/login" style={{ marginRight: "1rem", color: "white" }}>Login</a>
            <a href="/dashboard" style={{ color: "white" }}>Dashboard</a>
          </nav>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer style={{ padding: "1rem", background: "#f5f5f5", textAlign: "center" }}>
          <p>© 2024 Spend Management. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
