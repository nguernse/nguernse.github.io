import Paragraph from "../Paragraph";

type Props = {
  locations: string[];
};

export default function AvailableStatement({ locations }: Props) {
  return (
    <>
      <Paragraph>
        Hello! I am currently open to work. I am looking for a full-time,
        permanent role as an individual contributor on a team that values
        growth, learning, and collaboration. I enjoy building web applications
        for software as a service (SaaS) solutions.
      </Paragraph>
      <Paragraph>
        I am looking for remote or hybrid opportunities. If hybrid, I am open to
        the following areas: {locations.join(", ")}.
      </Paragraph>
    </>
  );
}
