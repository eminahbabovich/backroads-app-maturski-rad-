import awesomeBeach from "../slike/about.jpeg";
import Title from "./Title.js";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="O" subTitle="Nama" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={awesomeBeach} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Dobrodošli u Explore The Difference!</h3>
          <p>
            Otkrijte razlike koje čine putovanje nezaboravnim. Naša stranica je
            posvećena istraživanju najuzbudljivijih destinacija, iskustava i
            kultura širom svijeta. Bez obzira jeste li avanturistički putnik,
            ljubitelj kulinarskih delicija ili žudite za dubokim duhovnim
            iskustvima, mi smo tu da vam pružimo inspiraciju i informacije koje
            su vam potrebne za nezaboravno putovanje
          </p>
          <p>
            Ne propustite priliku da otkrijete svijet na način koji nikada prije
            niste doživjeli. Naša stranica je vaš vodič u istraživanju
            raznolikosti i ljepote koju svijet nudi. Spremni ste za avanturu?
            Krenite s nama na putovanje koje će promijeniti vaš pogled na
            svijet.
          </p>
          <a href="#about" className="btn">
            Vidi više
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
