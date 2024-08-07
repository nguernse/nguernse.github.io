type Props = {
  yearsExperience: number;
};

export default function FunStatement({ yearsExperience }: Props) {
  return (
    <>
      <p className="mb-2 text-slate-600">
        I have been developing web applications for over {yearsExperience} years
        and am capable of working across the entire stack. I gravitate towards
        the front end and enjoy delivering clean, intuitive, and performant UI.
        But I also like to dive into the back end and develop APIs, test
        services, and fix annoying bugs.
      </p>
      <p className="mb-2 text-slate-600">
        If I am not writing code, you can catch me outside hiking, playing disc
        golf, reading sci-fi, and traveling to remote areas to record natural
        sounds.
      </p>
    </>
  );
}
