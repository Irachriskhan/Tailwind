import Navigation from "../components/Navigation";

const Customization = () => {
  return (
    <>
      <Navigation />
      <section className="py-10 px-16 leading-loose">
        <h2 className="text-xl">Customization</h2>
        <p>
          Tailwind CSS is highly customizable, allowing you to easily apply
          different styles and colors to your components.
        </p>
        <ul>
          <li className="text-brown-800">Customize colors: Brown color</li>
          <li className="text-green-800">Non customized white color</li>
          <li>Extend and customize the core styles to suit your needs</li>
        </ul>
      </section>
      <section>
        <button className="bg-[#1da1f2] text-white ...">
          Share on Twitter
        </button>
      </section>
    </>
  );
};

export default Customization;
