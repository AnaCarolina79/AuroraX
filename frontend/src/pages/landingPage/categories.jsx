import "./style.scss";
import categories from "../../data/categories.json";
import * as Icons from "react-icons/fa";

export default function Categories() {
  return (
    <section className="categories">
      <h2>Nossos Tópicos</h2>
      <div className="categorie">
        {categories.map(({ id, text, icon, color }) => {
          const Icon = Icons[icon];
          return <div key={id} className="cards"><span>{Icon && <Icon size={28} color={'rgb(190, 94, 255)'} />}</span><p>{text}</p></div>;
        })}
      </div>
    </section>
  );
}
