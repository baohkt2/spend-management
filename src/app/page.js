// app/page.js
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    // Chuyển hướng tới dashboard nếu người dùng đã đăng nhập
    return (
      <div>
        <h1>Welcome, {session.user.name}!</h1>
        <p>Go to your <a href="/dashboard">Dashboard</a>.</p>
      </div>
    );
  }

  // Hiển thị trang mặc định nếu chưa đăng nhập
  return (
    <div>
      <h1>Welcome to Spend Management</h1>
      <p>Please <a href="/login">Login</a> to continue.</p>
    </div>
  );
}
