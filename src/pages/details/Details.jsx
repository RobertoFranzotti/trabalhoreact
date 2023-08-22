import "./Details.css";

function Details() {
  return (
    <main>
      <h1 id="sedes">Confira as trilhas a partir da sua localização</h1>

      <div className="grid-container4">
        <div className="grid-item4">
          <p className="cidades">Sede Petrópolis</p>
          <img
            className="mapa"
            src="./src/assets/sedePetropolis.jpg"
            alt="imgSedePetropolis"
          />
        </div>
        <div className="grid-item4">
          <p className="cidades">Sede Teresópolis</p>
          <img
            className="mapa"
            src="./src/assets/sedeTeresopolis.jpg"
            alt="imgSedeTeresopolis"
          />
        </div>
        <div className="grid-item4">
          <p className="cidades">Sede Guapimirim</p>
          <img
            className="mapa"
            src="./src/assets/sedeGuapimirim.jpg"
            alt="imgSedeGuapimirim"
          />
        </div>
      </div>
    </main>
  );
}

export default Details;
