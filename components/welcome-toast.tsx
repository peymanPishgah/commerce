'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            we help you to have best choice{' '}
            <br />
            <a
              href="https://"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              questions to find your item!
            </a>
          </>
        )
      });
    }
  }, []);

  return null;
}
