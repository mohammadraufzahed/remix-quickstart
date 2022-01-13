import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { useState } from "react";
import type { MetaFunction } from "remix";
import BulmaCss from "bulma/css/bulma.min.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: BulmaCss,
    },
  ];
};

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                RemixJS QuickStart
              </Link>
              <a
                role="button"
                onClick={() => setMenu(!menu)}
                className={(menu ? "is-active" : "") + " navbar-burger"}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div
              id="navbarBasicExample"
              className={(menu ? "is-active" : "") + " navbar-menu"}
            >
              <div className="navbar-start">
                {menu}
                <Link to="/posts" prefetch="intent" className="navbar-item">
                  Posts
                </Link>

                <Link to="/admin" prefetch="intent" className="navbar-item">
                  Admin
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <Outlet />
        <ScrollRestoration />
        <footer className="footer" style={{ position: "absolute", bottom: 0 }}>
          <div className="content has-text-centered">
            <p>
              <strong>Remix QuickStart</strong> by{" "}
              <a href="https://mohammadraufzahed.ir" target="_blank">
                Mohammad Raufzahed
              </a>
              .
            </p>
          </div>
        </footer>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
