import DocumentEditor from '../../../components/DocumentEditor';

export default function PadPage({ params }: { params: { padID: string } }) {
  return (
    <div>
      <DocumentEditor padID={params.padID} />
    </div>
  );
}