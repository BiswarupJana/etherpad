import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      {/* <DocumentEditor padID={params.padID} /> */}
      <iframe
        src={`http://localhost:9001/p/hvRl54xYBLwAGYtwSkMY`}
        frameBorder="0"
        width="70%"
        height="800px"
      />
 
    </main>
  );
}
