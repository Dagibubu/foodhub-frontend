import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button asChild className="bg-teal-700 hover:bg-teal-800">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
