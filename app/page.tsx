import { Metadata } from "next";

export const metadata: Metadata = {
  title: "promptopia",
};

export default function Home(): JSX.Element {
  return (
    <div className="bg-red-500">
      <h1 className="text-black">Home Page</h1>
    </div>
  );
}
