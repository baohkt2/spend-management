"use client"; // Đánh dấu đây là Client Component

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Spend Management</div>
        <div>
          {session ? (
            <>
              <Link href="/dashboard" className="text-white mx-2">Dashboard</Link>
              <Link href="/admin" className="text-white mx-2">User  Management</Link>
              <button onClick={() => signOut()} className="text-white mx-2">Logout</button>
            </>
          ) : (
            <Link href="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}