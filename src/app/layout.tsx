import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "web development",
    "app development",
    "web hosting",
    "email hosting",
    "VPS server",
    "VPN solution",
    "ISP service",
    "IT consultation",
    "remote IT support",
    "business software subscriptions",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

const themeScript = `
(function () {
  var storageKey = 'globalized-theme-v4';

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light';
    } catch (error) {
      return 'light';
    }
  }

  function applyTheme(theme) {
    var dark = theme === 'dark';
    document.documentElement.classList.toggle('dark', dark);

    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  applyTheme(getStoredTheme());

  function findParentWithAttribute(node, attributeName) {
    while (node && node !== document) {
      if (node.nodeType === 1 && node.hasAttribute && node.hasAttribute(attributeName)) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }

  function findParentLink(node) {
    while (node && node !== document) {
      if (node.nodeType === 1 && node.tagName && node.tagName.toLowerCase() === 'a') {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target) return;

    var themeButton = findParentWithAttribute(target, 'data-theme-toggle');
    if (themeButton) {
      event.preventDefault();
      var nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch (error) {}
      applyTheme(nextTheme);
      return;
    }

    var link = findParentLink(target);
    if (link) {
      var openMenus = document.querySelectorAll('details[open]');
      for (var i = 0; i < openMenus.length; i += 1) {
        openMenus[i].removeAttribute('open');
      }
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var openMenus = document.querySelectorAll('details[open]');
    for (var i = 0; i < openMenus.length; i += 1) {
      openMenus[i].removeAttribute('open');
    }
  });
})();`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-white text-slate-950 antialiased dark:bg-slate-950 dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />

      <Script
  id="tawk-to-live-chat"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      (function () {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];

        s1.async = true;
        s1.src = "https://embed.tawk.to/6a6344ba8ba7d41d4914c509/1ju9s8uvh";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");

        if (s0 && s0.parentNode) {
          s0.parentNode.insertBefore(s1, s0);
        }
      })();
    `,
  }}
/>

      </body>
    </html>
  );
}
