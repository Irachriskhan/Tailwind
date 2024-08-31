import image1 from "../assets/images/image1.jpeg";
import mountain from "../assets/images/mountain.avif";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <h1>Layout</h1>
      <section className="flex gap-10 p-10">
        <div className="w-1/2">
          <h2>Aspect Ration</h2>
          <div className="w-96">
            <img
              className="w-full aspect-video hover:aspect-[4/3] hover: transition ease-in duration-1000"
              src={image1}
              alt="Unsplash"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h1>Container</h1>
          <div className="container p-8 bg-red-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod
            accusamus praesentium iusto repudiandae aut voluptate culpa tenetur
            minus, saepe nostrum assumenda unde quidem eveniet doloremque
            provident ab laborum consectetur!
          </div>
        </div>
      </section>
      <section className="lg:columns-4 md:columns-2 gap-4">
        <div className="w-fit p-8 border border-solid border-black">
          <h1>Columns</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            eligendi reiciendis corporis quia, a nisi ipsum non ad vero ratione,
            libero, iusto voluptatum quod magnam? Repellendus nemo dolorum minus
            dolores.
          </p>
        </div>
        <div className="w-fit  p-2 bg-cyan-200">
          <h1>Break After</h1>
          <div className="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p className="break-after-page bg-red-200">
              Sure, go ahead, laugh... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas
            </p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>
        </div>
        <div className="w-fit  p-8">
          <h1>Break Inside</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            eligendi reiciendis corporis quia, a nisi ipsum non ad vero ratione,
            libero, iusto voluptatum quod magnam? Repellendus nemo dolorum minus
            dolores.
          </p>
        </div>
        <div className="w-fit  p-8 bg-cyan-200">
          <h1>Break Before</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            eligendi reiciendis corporis quia, a nisi ipsum non ad vero ratione,
            libero, iusto voluptatum quod magnam? Repellendus nemo dolorum minus
            dolores.
          </p>
        </div>
      </section>
      <section className="flex py-10">
        <div className="w-1/3">
          <h1 className="text-center">Box decoration break</h1>
          <div className="flex">
            <span className="box-decoration-slice  bg-gradient-to-r from-indigo-700 to-pink-600 text-white p-8 m-10">
              Hello <br /> Typescript!!
            </span>
            <span className="box-decoration-clone bg-gradient-to-r from-pink-600 to-indigo-700 text-white p-8 m-10 hover:box-decoration-slice">
              Hello <br /> Next.js!!
            </span>
          </div>
        </div>
        <div className="w-1/3 bg-red-50">
          <h1>Box-sizing</h1>
          <div className="box-border  border-4 border-solid border-black mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            modi repellendus rerum! Maiores harum earum adipisci corporis
            consequuntur reprehenderit ea? Temporibus eligendi neque facere?
            Asperiores exercitationem commodi porro quae aut.
          </div>
          <div className="box-content  border-4 border-solid border-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            modi repellendus rerum! Maiores harum earum adipisci corporis
            consequuntur reprehenderit ea? Temporibus eligendi neque facere?
            Asperiores exercitationem commodi porro quae aut.
          </div>
        </div>
        <div className="w-1/3">
          <h1>Display</h1>
          <div>
            When controlling the flow of text, using the CSS property
            <span className="inline"> display: inline </span>
            will cause the text inside the element to wrap normally. While using
            the property{" "}
            <span className="inline-block"> display: inline-block </span>
            will wrap the element to prevent the text inside from extending
            beyond its parent. Lastly, using the property{" "}
            <span className="block">display: block</span>
            will put the element on its own line and fill its parent.
          </div>
        </div>
      </section>
      <section className="flex ...">
        <div className="table w-3/4 p-10 m-8 bg-red-50">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-left">Song</div>
              <div className="table-cell text-left">Artist</div>
              <div className="table-cell text-left">Year</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </div>
              <div className="table-cell">Malcolm Lockyer</div>
              <div className="table-cell">2000</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell ">Witchy Woman</div>
            <div className="table-cell ">The Eagles</div>
            <div className="table-cell ">1972</div>
          </div>
        </div>
        <div className="flex bg-slate-400 w-full">
          <div className="hidden ">01</div>
          <div className="p-10">02</div>
          <div className="p-10">03</div>
        </div>
      </section>
      <section className="sticky top-0">
        <h1 className=" text-green-700 text-7xl">STICKY ELEMENT</h1>
      </section>
      <section>
        <div className="w-full p-20">
          <h1>Floating types</h1>
          <p className="float-start bg-brown-400">Floating element: Start</p>
          <p className="">Floating element</p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            rerum expedita laborum incidunt beatae veniam voluptatum. Dolorum
            ex, nisi esse dignissimos rerum consequatur veritatis explicabo eius
            placeat! Reiciendis, atque suscipit.
          </p>
          <p className="float-left bg-brown-400">Floating element: Left</p>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto nobis perspiciatis ipsam, amet nam dolor dolorem commodi
            laboriosam sint, ratione nemo incidunt provident placeat,
            repudiandae natus tenetur minus soluta.
          </p>
          <p className="">Floating element</p>
        </div>
        <div className="w-full p-20">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            consectetur est eius aperiam possimus. Architecto, voluptas suscipit
            ab exercitationem accusantium error sunt tempora voluptatem vero sed
            culpa nihil, ea tempore?
          </h1>
          <p className="float-right w-1/2 bg-brown-400">
            Floating element: \Right Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus aperiam earum quia nam quo
            perspiciatis. Consequatur tempore placeat minima quos pariatur optio
            alias. Non obcaecati est minus neque id sed.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            assumenda, ex nisi nihil sequi id ullam unde quasi officiis
            consequuntur, quas inventore! Provident magnam architecto qui odit,
            ut explicabo odio.
          </p>
          <p className="">Floating element</p>
        </div>
        <div className="w-full px-20 border border-green-100 border-solid">
          <h1>Floating types</h1>
          <p className="float-end bg-slate-300 w-1/2">
            Floating element: End Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit quae reiciendis, eius minima ipsam
            odit dolorem qui ratione cupiditate nostrum, quibusdam,
            exercitationem nihil. Id accusamus commodi minus nemo neque.
            Dolorum!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
            recusandae similique et nulla error aperiam accusamus eos officia
            nisi ducimus sed sunt quae, vel, odit nemo minus eum veritatis.
          </p>
          <p className="">Floating element</p>
          <p className="">Floating element</p>
        </div>
      </section>
      <section>
        <h1>CLEAR</h1>
        <div className=" w-full px-20 border border-green-100 border-solid">
          <h1>Floating types with RELATIVE position</h1>
          <br />
          <br />
          <p className="float-left bg-slate-300 w-1/3 sticky">
            Floating element: End Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit quae reiciendis, eius minima ipsam
            odit dolorem qui ratione cupiditate nostrum, quibusdam,
            exercitationem nihil. Id accusamus commodi minus nemo neque.
            Dolorum!
          </p>
          <p className="float-right w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
            recusandae similique et nulla error aperiam accusamus eos officia
            nisi ducimus sed sunt quae, vel, odit nemo minus eum veritatis.
          </p>
          <p className=" w-1/3">
            CLEAR BOTH: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim asperiores minima commodi placeat! Dolor eius laudantium
            quaerat recusandae minus explicabo fuga consequatur eum
            exercitationem nihil tempore, corrupti aspernatur aperiam esse?
          </p>
          <p className="float-right w-1/3">
            FLOAT RIGHT:Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur qui vero aspernatur consequatur hic quibusdam,
            reiciendis id natus voluptas iste veritatis sed corporis, itaque,
            ipsum ad. Provident fuga incidunt reiciendis!
          </p>
        </div>
      </section>
      <section className="w-3/4 bg-purple-300 h-96 overflow-scroll overscroll-none">
        <h1>OBJECT FIT</h1>
        <div className="w-96 h-96 py-10 bg-green-300 overflow-hidden mb-40">
          <img className="object-cover bg-red-200 " src={mountain} alt="" />
        </div>
        <div className="w-96 h-96 bg-green-600 py-10 mb-40">
          <img className="object-contain bg-red-500" src={image1} alt="" />
        </div>
        <div className="w-96 h-96 bg-blue-300 py-10 mb-40">
          <img className="object-fill bg-red-500" src={mountain} alt="" />
        </div>
        <div className="w-96 h-96 bg-blue-600 py-10 mb-40 overflow-hidden">
          <img className="object-scale-down bg-red-500" src={mountain} alt="" />{" "}
        </div>
      </section>
      <section className="p-40 bg-amber-300">
        <div className=" bg-blue-300 ">
          <img className="w-1/2 object-cover" src={image1} alt="" />
        </div>
        <div className="relative text-blue-800 text-6xl bg-red-400 h-60">
          <p>Relative parent</p>
          <div className="absolute bottom-0 left-0 inset-x-0 bg-purple-300 text-center">
            <p className="text-3xl text-green-800">
              Absolute child and INSET-X-0
            </p>
          </div>
          <div>The last Dive</div>
        </div>
      </section>
      <section>
        <div className="z-40 ...">05</div>
        <div className="z-30 ...">04</div>
        <div className="z-20 ...">03</div>
        <div className="z-10 ...">02</div>
        <div className="z-0 ...">01</div>
      </section>
    </>
  );
};

export default Layout;
