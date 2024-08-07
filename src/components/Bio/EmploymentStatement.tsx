import Paragraph from "../Paragraph/Paragraph";

type Props = {
  employer: string;
};

export default function EmployedStatement({ employer }: Props) {
  return (
    <Paragraph>
      I am currently employed and happily pushing code for {employer}.
    </Paragraph>
  );
}
