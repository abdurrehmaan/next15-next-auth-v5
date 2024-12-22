
'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils"


export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/catalog', label: 'Catalog' },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
        <Link key={link.href} href={link.href}          
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              {
                'text-primary': pathname === link.href,
                'text-muted-foreground': pathname !== link.href,
              }
            )}
          >
            {link.label}
        
        </Link>
      ))}
    </nav>
  );
}