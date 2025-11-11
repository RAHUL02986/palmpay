'use client';

import { useEffect } from 'react';
import { Button } from './components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-[#2F29E6] mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button
          onClick={() => reset()}
          size="lg"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
