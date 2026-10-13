import { test, expect } from '@playwright/test';

test.describe('Universal Smart Download Endpoint (/download)', () => {
  test('redirects iOS devices to Apple App Store', async ({ request }) => {
    const iosUserAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

    const response = await request.get('/download', {
      headers: {
        'user-agent': iosUserAgent,
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(307);
    const location = response.headers()['location'];
    expect(location).toContain('apps.apple.com');
  });

  test('redirects Android devices to Google Play Store', async ({ request }) => {
    const androidUserAgent =
      'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';

    const response = await request.get('/download', {
      headers: {
        'user-agent': androidUserAgent,
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(307);
    const location = response.headers()['location'];
    expect(location).toContain('play.google.com');
  });

  test('redirects desktop browsers to website download section anchor', async ({ request }) => {
    const desktopUserAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

    const response = await request.get('/download', {
      headers: {
        'user-agent': desktopUserAgent,
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(307);
    const location = response.headers()['location'];
    expect(location).toContain('#download');
  });
});
