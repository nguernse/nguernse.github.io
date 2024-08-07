type Props = {
  locations: string[];
};

export default function AvailableStatement({ locations }: Props) {
  return (
    <>
      <p className="mb-2 text-slate-600">
        Hello! I am currently open to work. I am looking for a full-time,
        permanent role as an individual contributor on a team that values
        growth, learning, and collaboration. I enjoy building web applications
        for software as a service (SaaS) solutions.
      </p>
      <p className="mb-2 text-slate-600">
        I am looking for remote or hybrid opportunities. If hybrid, I am open to
        the following areas: {locations.join(", ")}.
      </p>
    </>
  );
}
