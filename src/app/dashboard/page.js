import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state
  }

  if (!session) {
    router.push('/login');
    return null; // Prevent rendering while redirecting
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
      {/* Fetch and display spends here */}
    </div>
  );
}