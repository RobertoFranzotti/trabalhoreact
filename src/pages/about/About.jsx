import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section>
        <div>
          <div className="titulo-principal1">
          <h1 >A História do Parque Nacional da Serra dos Órgãos</h1>
          <br />
          <br/>
          </div>
          </div>
          <div className="texto">
            <p>
              Localizado no coração do estado do Rio de Janeiro, o Parque
              Nacional da Serra dos Órgãos, comumente referido como PARNASO,
              destaca-se não apenas por sua formação rochosa singular, mas
              também como um exemplar essencial de conservação do meio ambiente
              brasileiro.
              <p />
              <br />
              <p>
                A Serra dos Órgãos é uma Unidade de Conservação Federal de
                Proteção Integral, subordinada ao Instituto Chico Mendes de
                Conservação da Biodiversidade (ICMBio). Criado em 30 de novembro
                de 1939, o parque é o terceiro mais antigo do país e representa
                um marco significativo na história das Unidades de Conservação
                Brasileiras.
              </p>
              <br />
              <p>
                Estendendo-se por 20.024 hectares, o parque protege territórios
                em municípios como Teresópolis, Petrópolis, Magé e Guapimirim.
                Essa vasta área foi designada para resguardar a incrível
                biodiversidade encontrada nesta parte da Serra do Mar na Região
                Serrana do Rio de Janeiro. Abriga mais de 2.800 espécies de
                plantas, 462 espécies de aves, 105 de mamíferos, 103 de anfíbios
                e 83 de répteis. Surpreendentemente, entre estes, 130 animais
                estão ameaçados de extinção, e várias espécies são endêmicas, ou
                seja, só são encontradas nessa região específica.
              </p>
              <br />
              <p>
                O PARNASO é reconhecido como um dos melhores destinos no Brasil
                para esportes de montanha. Desde escalada até caminhada, rapel e
                mais. Destaca-se a figura imponente do Dedo de Deus, considerado
                o marco inicial da escalada no país. Além disso, o Parque possui
                a maior rede de trilhas do Brasil, totalizando mais de 200
                quilômetros. As opções variam desde trilhas acessíveis, como a
                suspensa — adequada até para cadeirantes —, até desafios mais
                intensos como a Travessia Petrópolis-Teresópolis, que se estende
                por 30 Km de montanhas.
              </p>
              <br />
              <p>
                A combinação da majestosa paisagem, a rica biodiversidade e as
                oportunidades para atividades ao ar livre fazem da Serra dos
                Órgãos um destino inigualável. No entanto, sua história e
                esforços conservacionistas são o que realmente consolidam sua
                importância. Desde a criação do parque, esforços contínuos têm
                sido feitos para garantir sua preservação e permitir que as
                futuras gerações também possam apreciar e aprender com este
                valioso patrimônio natural e cultural.
              </p>
            </p>
          </div>
        
          <Link to="/form" >
          <input className="button1" type="button" value="Agendar Sua Visita" />
          </Link>
        <br />
        <div className="grid">
          <h1 className="titulo-principal">Um pouco mais sobre o Parque Nacional da Serra dos Orgãos</h1>
          <br/>
          <img src="./src/assets/ESCALAVRADO.PNG" alt="Serra dos Orgãos"></img>
        </div>
        <div className="texto2">
          <h2 className="titulo">Escalavrado</h2>
          <br/>
          <br/>
          <p>
            O Escalavrado é uma das mais destacadas formações rochosas da Serra
            dos Órgãos, atingindo 1.406 metros de altura. Localizado próximo à
            BR-116 (Rio-Teresópolis) em Guapimirim, a trilha de acesso é
            categorizada como de alta intensidade e, por isso, é recomendada
            principalmente para aqueles que já possuem experiência em trilhas de
            montanha. Durante o percurso, os visitantes encontram um caminho
            estreito e inclinado, com várias seções que podem requerer
            habilidades de escalaminhada. Em certos trechos, há disponibilidade
            de cordas para proporcionar maior segurança, embora sua utilização
            não seja obrigatória e dependa do nível de conforto e experiência do
            trilheiro. Do cume do Escalavrado, os visitantes são agraciados com
            uma panorâmica espetacular da cadeia de montanhas da Serra dos
            Órgãos.
          </p>
          <br />
          <h2 className="titulo">Dedo de Nossa Senhora</h2>
          <br />
          <br/>
          <p>
            O Dedo de Nossa Senhora é uma proeminente formação da Serra dos
            Órgãos, localizado entre o monte Escalavrado e o icônico Dedo de
            Deus. Esta montanha alcança uma altitude de 1.320 metros e é
            acessada por uma trilha de 4 km, que apresenta um nível moderado de
            dificuldade. Durante a caminhada, os visitantes passarão por trilhas
            florestais que levam à base da formação rochosa. A partir daí, é
            necessário realizar escalada com o apoio de cordas e cabos de aço.
            Devido à sua complexidade e trechos de escalada, a trilha não é
            recomendada para principiantes. Do cume, os visitantes têm uma vista
            panorâmica impressionante da região da Serra dos Órgãos.
          </p>
          <br />
          <h2 className="titulo">Dedo de Deus</h2>
          <br />
          <br/>
          <p>
            O Dedo de Deus é uma destacada formação montanhosa da Serra dos
            Órgãos, atingindo uma altitude de 1.692 metros. Sua silhueta, que
            lembra uma mão com o dedo indicador apontando para o céu, é um dos
            marcos geológicos mais reconhecidos da região e é renomado
            internacionalmente. A história do montanhismo brasileiro tem forte
            relação com a ascensão do Dedo de Deus, conquistada por José
            Teixeira Guimarães e pelos irmãos Américo de Oliveira (Acácio,
            Alexandre e Raul Carneiro) em 9 de abril de 1912. Este pico não
            apenas possui importância geológica e histórica, mas também é um
            símbolo cultural e patriótico, estando presente tanto na bandeira
            quanto no brasão do estado do Rio de Janeiro. Para uma visualização
            mais detalhada da trilha, do processo de escalada e das magníficas
            vistas do cume.
          </p>
          <br />
          <h2 className="titulo">Cabeça de Peixe</h2>
          <br />
          <br/>
          <p>
            O Pico da Cabeça de Peixe, elevando-se a 1.680 metros de altitude,
            oferece uma panorâmica impressionante das montanhas do PARNASO.
            Situado nas proximidades do icônico Dedo de Deus, os dois picos
            estão separados por uma diferença sutil de 12 metros em altura. A
            primeira ascensão registrada ao Pico da Cabeça de Peixe foi
            realizada em 1931 pelo CEB – Centro Excursionista Brasileiro. Devido
            à sua complexidade, a trilha é categorizada como de alta dificuldade
            e, por isso, não é aconselhável para principiantes. A jornada de
            caminhada até o cume leva aproximadamente 8 horas.
          </p>
          <br />
          <br/>
          <br/>
          <br/>
          
          
          
        </div>
      </section>
    </main>
  );
}

export default About;