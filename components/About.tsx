export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My start with programming began when I was 8 years old, interested
            in knowing how programs and computers worked, I started learning the
            basic principles of programming with didactic games for children,
            these games taught javascript, and although they were 'children's
            games', I was able to learn things like, what is a boolean?, what is
            an if statement?, what is a while statement?, etc. Then over the
            years I dedicated myself to working with computers from the hardware
            side but I ended up realizing that what I liked the most was
            programming.
          </p>
          <p className="py-2 text-gray-600">
            I formed my education in the Zero To Mastery academy and I was
            learning skills on my own, I consider myself a self-taught person
            with a great capacity to obtain knowledge and put it into practice,
            I can also adapt very well to different work environments and I am
            always willing to learn technologies new ones that help make my
            creations more efficient. Today I am working with Next.Js,
            typescript and some tools that you can see below.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1623520527569-fee1da87f598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="aboutImage"
          />
        </div>
      </div>
    </div>
  );
}
