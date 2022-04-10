import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div>{children}</div>
    </>
  );
}
