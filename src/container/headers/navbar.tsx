 import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { auth } from '@/auth';
import { handleSignOut } from '@/app/actions/authActions';


const Navbar = async () => {
    const session = await auth()
    console.log("🚀 ~ Navbar ~ session:", session)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black font-bold text-xl">
        {session && session?.user?.name}

        </Link>
        <div className="space-x-4">
          
          {!session ? (
              <Button variant="default">Sign In</Button>
          ) : (
            <form action={handleSignOut}>
              <Button variant="default" type='submit'>Sign Out</Button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


