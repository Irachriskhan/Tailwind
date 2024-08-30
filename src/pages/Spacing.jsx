import Navigation from "../components/Navigation";

const Spacing = () => {
  return (
    <>
      <Navigation />
      <h1>SPACING</h1>
      <section>
        <h1>PADDING</h1>
        <div className="p-10 bg-green-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, atque
          at? Similique accusamus laboriosam sequi deleniti saepe libero soluta
          aspernatur fugit at dolor? Aut quaerat impedit deleniti consequatur
          aliquid magnam.
        </div>
        <div className="pt-4 text-green-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, atque
          at? Similique accusamus laboriosam sequi deleniti saepe libero soluta
          aspernatur fugit at dolor? Aut quaerat impedit deleniti consequatur
          aliquid magnam.
        </div>
        <div className="pl-20 py-6 bg-purple-300">
          PL_PY Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
          atque at? Similique accusamus laboriosam sequi deleniti saepe libero
          soluta aspernatur fugit at dolor? Aut quaerat impedit deleniti
          consequatur aliquid magnam.
        </div>
        <div className="pb-7 bg-red-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, atque
          at? Similique accusamus laboriosam sequi deleniti saepe libero soluta
          aspernatur fugit at dolor? Aut quaerat impedit deleniti consequatur
          aliquid magnam.
        </div>
      </section>
      <section className="my-10">
        <div dir="ltr">
          <div className="mt-10 ps-40 text-3xl text-justify bg-red-300">
            ps-8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            sed natus tempore id culpa corrupti quae reprehenderit deleniti,
            praesentium ducimus. Perferendis sed incidunt ipsam explicabo
            architecto ad! Ut, eum quidem!
          </div>
          <div className="mt-10 pe-40 text-3xl text-justify bg-purple-400">
            pe-8 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam accusantium exercitationem libero! Facilis quasi eligendi
            ut, quam, quisquam, harum possimus repellat molestiae dolorum ea
            esse perspiciatis natus recusandae exercitationem fugiat?
            {/* <span className="bg-green-400">pe-8</span> */}
          </div>
        </div>

        <div dir="rtl">
          <div className=" mt-10 ps-10 text-3xl text-justify bg-green-200">
            ps-8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ex possimus molestias excepturi fuga praesentium nihil quisquam
            fugit vitae repellat sapiente iure, quia, magni amet asperiores aut
            aliquam odit rerum.
          </div>
          <div className="mt-10 pe-10 text-3xl text-justify bg-orange-300">
            pe-8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            natus corporis sit porro autem sequi rerum consectetur quos nobis,
            iusto laborum aut sed delectus impedit dolorum odit, nesciunt atque
            ut!
          </div>
        </div>
        <div className="w-72 h-60 bg-red-100">
          <h1 className="w-60 h-10 bg-purple-100 mx-auto">
            {" "}
            Heloooooooooooooo
          </h1>
        </div>
      </section>
      <section>
        <h1 className="text-center text-green-400 text-6xl p-10">SPACING</h1>
        <div className="flex space-x-10 justify-center">
          <p className="w-1/5 p-10 bg-green-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellat atque cumque ut, distinctio dicta quisquam aperiam quae
            quasi ducimus delectus porro debitis laborum? Optio fugit vitae
            reprehenderit esse dicta?
          </p>
          <p className="w-1/5 p-10 bg-green-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis facere explicabo perferendis vel doloremque, voluptatem
            error quibusdam dolore consequatur quia nesciunt rem eaque minima
            enim, id at vitae ad maxime?
          </p>
          <p className="w-1/5 p-10 bg-green-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellat atque cumque ut, distinctio dicta quisquam aperiam quae
            quasi ducimus delectus porro debitis laborum? Optio fugit vitae
            reprehenderit esse dicta?
          </p>
          <p className="w-1/5 p-10 bg-green-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis facere explicabo perferendis vel doloremque, voluptatem
            error quibusdam dolore consequatur quia nesciunt rem eaque minima
            enim, id at vitae ad maxime?
          </p>
        </div>
      </section>
    </>
  );
};

export default Spacing;
