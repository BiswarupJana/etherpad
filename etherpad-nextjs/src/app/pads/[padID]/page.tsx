// import DocumentEditor from '../../../components/DocumentEditor';

export default function PadPage({ params }: { params: { padID: string } }) {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      {/* <DocumentEditor padID={params.padID} /> */}
      <iframe
        src={`http://localhost:9001/p/hvRl54xYBLwAGYtwSkMY`}
        frameBorder="0"
        width="70%"
        height="800px"
      />
    </div>
  );
}