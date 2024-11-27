export default function AdminLayout({ children }) {
    return (
      <div style={{ border: "2px solid #0070f3", padding: "1rem" }}>
        <h2>Admin Panel</h2>
        {children}
      </div>
    );
  }
  