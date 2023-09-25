import "@styles/globals.css";

type layoutProps = {
  children: JSX.Element;
};
function RootLayout({ children }: layoutProps): JSX.IntrinsicElements["html"] {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
