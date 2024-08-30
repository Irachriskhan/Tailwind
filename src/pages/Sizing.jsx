import Navigation from "../components/Navigation";

const Sizing = () => {
  return (
    <>
      <Navigation />
      <h1>Sizing</h1>
      <section>
        <div className="w-screen">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure hic
          sapiente voluptatum quos itaque quaerat at tempore qui cupiditate,
          eligendi eaque laboriosam officia quisquam dolore voluptatibus
          possimus fugiat similique veritatis?
        </div>
        <div className="w-2/3 bg-green-300 p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus consectetur ipsa, vitae sequi corrupti
          officiis delectus aliquid culpa autem quam repellat quidem nesciunt
          quaerat quis dignissimos laboriosam? Veniam, mollitia.
        </div>

        <div className="w-fit bg-purple-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          rerum? Quasi laudantium excepturi ipsam architecto aliquid doloremque,
          blanditiis culpa harum quae exercitationem magni possimus eveniet,
          ratione earum ipsum assumenda obcaecati.
        </div>
        <div className="w-1/2 float-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          rerum? Quasi laudantium excepturi ipsam architecto aliquid doloremque,
          blanditiis culpa harum quae exercitationem magni possimus eveniet,
          ratione earum ipsum assumenda obcaecati.
        </div>
      </section>
      <section className="float-none w-screen">
        <div className="max-w-min bg-red-200 mt-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          repellendus accusantium explicabo sapiente quasi atque hic alias
          distinctio eligendi dolorem aspernatur rerum nisi laboriosam earum
          quas, ipsa, debitis, impedit ratione.
        </div>
        <div className="size-min bg-red-500 mt-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          repellendus accusantium explicabo sapiente quasi atque hic alias
          distinctio eligendi dolorem aspernatur rerum nisi laboriosam earum
          quas, ipsa, debitis, impedit ratione.
        </div>
      </section>
    </>
  );
};

export default Sizing;
