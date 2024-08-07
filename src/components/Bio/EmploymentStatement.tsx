type Props = {
  employer: string;
};

export default function EmployedStatement({ employer }: Props) {
  return (
    <p className="mb-2">
      I am currently employed and happily pushing code for {employer}.
    </p>
  );
}
