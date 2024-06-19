import LayoutHome from '@/Layouts/LayoutHome';

export default function Welcome() {

    const handleVisiblePrimerosAnios = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('primerosAnios');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVisPrimeros');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisible1980 = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('vis1980');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVis1980');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisible1990 = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('vis1990');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVis1990');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisible2000 = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('vis2000');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVis2000');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisibleMatrimonio = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('visMatrimonio');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVisMatrimonio');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisiblePolitica = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('visPolitica');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVisPolitica');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    const handleVisibleMilitar = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('visMilitar');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVisMilitar');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    return (
        <>
            <LayoutHome>
                <main className=" bg-main h-auto py-10 px-4">
                    <div className='w-3/4 my-0 mx-auto'>
                        <p className="my-2"><strong>Walter Bruce Willis</strong> (Idar-Oberstein, Alemania Occidental; 19 de marzo de 1955) es un <strong>actor retirado</strong>, <strong>productor</strong> y <strong>músico</strong> estadounidense, cuya trayectoria comenzó en la <strong>industria televisiva</strong> durante los años 1980. Ha interpretado roles <strong>cómicos</strong>, <strong>dramáticos</strong> y de <strong>acción</strong>. Es conocido por su interpretación del oficial <strong>John McClane</strong> en la saga <strong>La jungla de cristal</strong>, que obtuvo buenas críticas y una <strong>recaudación considerable</strong> a partir del estreno de la primera cinta en 1988.​ Asimismo, ha aparecido en más de <strong>sesenta películas</strong>, entre las que se incluyen éxitos de taquilla como <strong>Pulp Fiction</strong>, <strong>Sin City</strong>, <strong>Doce monos</strong>, <strong>El quinto elemento</strong>, <strong>Armageddon</strong>, <strong>El sexto sentido</strong>, <strong>El protegido</strong>, <strong>Glass</strong>, <strong>Looper</strong>, <strong>Lucky Number Slevin</strong> o <strong>The Expendables</strong>.</p>
                        <p className="my-2">Las películas en las que ha aparecido Willis han logrado sumar <strong>7500 millones de dólares</strong> en las taquillas de todo el mundo, por lo que se le considera como uno de los actores más <strong>rentables</strong> en un rol estelar o secundario. &ZeroWidthSpace;Por sus interpretaciones, ha sido acreedor de varios <strong>premios</strong>, entre ellos <strong>dos premios Emmy</strong>, un <strong>Globo de Oro</strong> y <strong>cuatro Saturn</strong>.</p>
                        <img className="my-0 mx-auto" src="/images/biografia.png" alt="Willis" title="Willis" />
                        <p className="my-2">En cuanto a su vida privada, se casó con la actriz <strong>Demi Moore</strong>, con quien tuvo <strong>tres hijas</strong> antes de su divorcio en 2000, después de <strong>trece años de matrimonio</strong>. Tiempo después contrajo matrimonio con la modelo <strong>Emma Heming</strong>.​</p>
                        <p className="my-2">En marzo de <strong>2022</strong> su familia anunció que se retiraría de la actuación tras haber sido diagnosticado con <strong>afasia</strong>, un trastorno de lenguaje que afecta a la capacidad de <strong>comunicación</strong> de una persona.&ZeroWidthSpace; Sin embargo, en febrero de <strong>2023</strong> informaron que su <strong>condición médica</strong> había avanzado y que disponían de un diagnóstico más específico: <strong>demencia frontotemporal</strong>, conocida como <strong>FTD</strong>.</p>


                        <h2 className="mw-headline text-2xl py-10 text-center"><b>Biografía</b></h2>
                        <h3 className=" mb-5 text-xl"><b>Primeros años</b></h3>
                        <p className="my-2">Bruce Willis nació en <strong>Idar-Oberstein</strong>, Alemania Occidental, hijo de <strong>Marlene</strong>, una alemana que trabajaba en un banco, y <strong>David Willis</strong>, un soldado estadounidense. Es el mayor de <strong>cuatro hermanos</strong>: Florence, David y Robert. Tras el retiro de su padre del ejército en 1957, la familia se mudó a <strong>Nueva Jersey</strong>. Para entonces, Bruce Willis contaba apenas <strong>dos años</strong> de edad.</p>
                        <p className="my-2">Durante su adolescencia en <strong>Penns Grove, Nueva Jersey</strong>, Willis enfrentó el <strong>divorcio</strong> de sus padres y problemas de <strong>tartamudez</strong>, lo que le valió el apodo de "Buck-Buck" en la secundaria.</p>
                        <button className='btn btn-xs' id='btnVisPrimeros' onClick={handleVisiblePrimerosAnios}>Leer más...</button>
                        <div id='primerosAnios' className='oculto'>
                            <p className="my-2">Con el apoyo de su profesor de teatro, <strong>Jerry Rockwood</strong>, y un especialista en el habla, Willis superó su tartamudez mediante ejercicios de confianza y actuación. Este desafío personal, mencionado en los libros "Bruce Willis: The Unauthorized Biography" y "Bruce Willis: Overcoming Adversity," lo llevó a desempeñar <strong>pequeños roles</strong> en <strong>teatro escolar</strong> y eventualmente a liderar el <strong>club de teatro</strong> y el <strong>consejo estudiantil</strong>.</p>

                            <p className="my-2">Una vez que se graduó de la <strong>Penns Grove High School</strong>, en 1973, trabajó en la fábrica <strong>DuPont Chambers Works</strong> y como vigilante de seguridad en la planta nuclear <strong>Salem</strong>. En busca de una carrera en actuación, Willis estudió <strong>drama</strong> en la <strong>Universidad de Montclair</strong>, donde participó en producciones teatrales y estudió con <strong>Stella Adler</strong>. En 1977, dejó la universidad y se mudó a <strong>Nueva York</strong>, compartiendo departamento con la actriz <strong>Linda Fiorentino</strong> en <strong>Hell's Kitchen</strong>.</p>

                            <p className="my-2">Para subsistir económicamente, trabajó en bares y restaurantes, obteniendo un empleo en el <strong>West Bank Café</strong>. En 1977, hizo su debut teatral en la producción <strong>off-Broadway</strong> (es decir, una obra llevada a cabo en Nueva York, pero independiente del concepto de Broadway) de <strong>Heaven and Earth</strong> y participó en más de <strong>cien obras teatrales</strong>, incluyendo "Fool for Love" de <strong>Sam Shepard</strong>. Además, apareció en anuncios comerciales de <strong>Levi's</strong>.</p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/nuevaJersey.jpg" alt="Nueva Jersey" title="Nueva Jersey" />


                        <h3 className=" mb-5 text-xl mt-6"><b>Carrera</b></h3>
                        <h4 className="mb-5 text-xl mt-8"><b>1980-1990</b></h4>
                        <p className="my-2">En 1980, Bruce Willis debutó en el cine como extra en <strong>"El primer pecado mortal"</strong>. Después se mudó a <strong>California</strong> para audicionar en programas de televisión. En noviembre de 1984, apareció en un episodio de <strong>"Miami Vice"</strong>. En Los Ángeles, audicionó para la película <strong>"Desperately Seeking Susan"</strong> y para el papel de <strong>David Addison Jr.</strong> en <strong>"Luz de luna"</strong> (1985-1989), compitiendo con 3,000 actores. Obtuvo el papel, consolidándose como un <strong>actor de comedia</strong> y el programa duró <strong>cinco temporadas</strong>.</p>

                        <p className="my-2">El éxito de <strong>"Luz de luna"</strong> llevó a Willis a protagonizar campañas publicitarias para <strong>Seagram</strong>, ganando entre 5 y 7 millones de dólares. En 1985, apareció en <strong>"The Twilight Zone"</strong>. En 1987, fue arrestado por perturbar la paz y agredir a un oficial, lo cual pudo haber contribuido a su despido de <strong>Seagram</strong>.</p>

                        <button className='btn btn-xs' id='btnVis1980' onClick={handleVisible1980}>Leer más...</button>
                        <div id='vis1980' className='oculto'>
                            <p className="my-2">Ese mismo año, protagonizó <strong>"Cita a ciegas"</strong> de <strong>Blake Edwards</strong>, recaudando 39 millones de dólares en EE.UU. y recibiendo buenas críticas. En 1988, Edwards lo dirigió en <strong>"Asesinato en Beverly Hills"</strong>, que fracasó en taquilla y críticas. Sin embargo, su papel en <strong>"Die Hard"</strong> (1988) lo catapultó a la fama. La película recaudó <strong>138 millones de dólares</strong> y es considerada una de las mejores películas de acción.</p>

                            <p className="my-2">En 1989, Willis actuó en <strong>"In Country"</strong>, recibiendo buenas críticas y dedicando la película a los <strong>veteranos de guerra</strong>. También prestó su voz para <strong>"Mira quién habla"</strong>, que fue un éxito comercial, y repitió el papel en la <strong>secuela de 1990</strong>.</p>

                            <p className="my-2">En 1987, lanzó su carrera musical con el álbum <strong>"The Return of Bruno"</strong>, que incluyó el éxito <strong>"Respect Yourself"</strong>. Aunque sus siguientes grabaciones no fueron tan exitosas, lanzó un segundo álbum en 1989. Willis ha seguido involucrado en la <strong>música</strong>, presentándose ocasionalmente en eventos como las inauguraciones de <strong>Planet Hollywood</strong>.</p>
                        </div>

                        <img className="my-0 mx-auto" src="/images/willis_80.jpg" alt="willis" title="willis y Cybill Lynne Shepherd" />


                        <h4 className="mb-5 text-xl mt-7"><b>1990-2000</b></h4>
                        <p className="my-2">A principios de la década de 1990, la carrera de Bruce Willis experimentó un declive con películas que fracasaron en taquilla y crítica, como <strong>"The Bonfire of the Vanities"</strong> y <strong>"El gran halcón"</strong>. En 1990, retomó su papel como <strong>John McClane</strong> en <strong>"Die Hard 2"</strong>, que recaudó <strong>240 millones de dólares</strong> a nivel mundial a pesar de críticas mixtas. En 1992, actuó en <strong>"Death Becomes Her"</strong>, que fue un éxito de taquilla.</p>

                        <p className="my-2">Entre 1992 y 1994, Willis participó en comerciales de <strong>Subaru</strong> y protagonizó <strong>"Color of Night"</strong>, que fue mal recibida por la crítica pero ganó notoriedad en formato de video. Su papel secundario en <strong>"Pulp Fiction"</strong> (1994) de <strong>Quentin Tarantino</strong> revitalizó su carrera, con la película recaudando <strong>214 millones de dólares</strong> y recibiendo elogios por su actuación como <strong>Butch Coolidge</strong>.</p>

                        <button className='btn btn-xs' id='btnVis1990' onClick={handleVisible1990}>Leer más...</button>
                        <div id='vis1990' className='oculto'>
                            <p className="my-2">En 1995, protagonizó <strong>"Doom Monkeys"</strong>, dirigida por <strong>Terry Gilliam</strong>, recaudando <strong>170 millones de dólares</strong> y siendo elogiada por <strong>Roger Ebert</strong>. En 1997, interpretó a un taxista en <strong>"El quinto elemento"</strong>, dirigida por <strong>Luc Besson</strong>, que recaudó <strong>263 millones de dólares</strong> a nivel mundial y fue un éxito internacional.</p>

                            <p className="my-2">Sin embargo, hacia finales de la década, Willis experimentó otro declive con películas mal recibidas como <strong>"The Jackal"</strong> y <strong>"Mercury Rising"</strong>. A pesar de esto, <strong>"Armageddon"</strong> (1998), dirigida por <strong>Michael Bay</strong>, se convirtió en la <strong>película más taquillera</strong> del año a nivel mundial, aunque recibió críticas negativas. En 1999, protagonizó <strong>"The Sixth Sense"</strong> de <strong>M. Night Shyamalan</strong>, que fue un éxito de taquilla y crítica, revitalizando su carrera.</p>

                            <p className="my-2">Entre 1999 y 2000, Willis fue el portavoz de la compañía de <strong>gafas de sol Police</strong> y apareció en anuncios publicitarios.</p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/willis_pulp_fiction.jpg" alt="Bruce willis en pulp fiction" title="Bruce willis pulp fiction" />


                        <h4 className="mb-5 text-xl mt-8"><b>2000-2010</b></h4>
                        <p className='my-2'>En el <strong>2000</strong>, <strong>Bruce Willis</strong> ganó un <strong>Emmy</strong> por su actuación en <strong>"Friends"</strong> y fue nominado a los <strong>American Comedy Awards</strong> en <strong>2001</strong>. Aunque inicialmente fue elegido para <strong>"Ocean's Eleven"</strong>, rechazó el papel para trabajar en su álbum <strong>"The Universal Masters Collection"</strong>, lanzado en enero de <strong>2000</strong>. En <strong>2004</strong>, hizo una breve aparición en la secuela de <strong>"Ocean's Eleven"</strong>. En <strong>2007</strong>, interpretó al antagonista en <strong>"Planet Terror"</strong> y continuó apareciendo en el programa <strong>"The Late Show with David Letterman"</strong>, donde realizaba elaboradas bromas.</p>
                        <p className='my-2'><strong>Willis</strong> trabajó en varios proyectos con <strong>Samuel L. Jackson</strong>, incluyendo <strong>"Die Hard with a Vengeance"</strong> y <strong>"El protegido"</strong>. En <strong>2005</strong>, actuó con su hija <strong>Rumer</strong> en <strong>"Hostage"</strong>. En <strong>2007</strong>, protagonizó <strong>"Seduciendo a un extraño"</strong> con <strong>Halle Berry</strong>, que recibió malas críticas. También ese año, apareció en <strong>"Alpha Dog"</strong> y <strong>"Live Free or Die Hard"</strong>, esta última recaudando <strong>383.5 millones de dólares</strong>.</p>
                       
                        <button className='btn btn-xs' id='btnVis2000' onClick={handleVisible2000}>Leer más...</button>
                        <div id='vis2000' className='oculto'>
                            <p className='my-2'>Participó en <strong>"Algo pasa en Hollywood"</strong> (<strong>2008</strong>) y <strong>"Surrogates"</strong> (<strong>2009</strong>), obteniendo críticas mixtas. Aunque estaba previsto que interpretara al general <strong>William R. Peers</strong> en <strong>"Pinkville"</strong> de <strong>Oliver Stone</strong>, el proyecto fue cancelado debido a la <strong>huelga de guionistas de 2007-2008</strong>. En <strong>2009</strong>, colaboró con <strong>Blues Traveler</strong> y apareció en una campaña publicitaria para <strong>Aviva</strong>.</p>

                            <p className='my-2'>En <strong>2010</strong>, protagonizó <strong>"Cop Out"</strong> y apareció en el video musical de <strong>"Stylo"</strong> de <strong>Gorillaz</strong>, que rompió récords en <strong>YouTube</strong>. También tuvo una breve pero esperada aparición en <strong>"The Expendables"</strong> junto a <strong>Sylvester Stallone</strong> y <strong>Arnold Schwarzenegger</strong>. Ese mismo año, protagonizó <strong>"Red"</strong>, basada en la miniserie de cómics homónima.</p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/friends.jpg" alt="Bruce willis y David Schwimmer en friends" title="Bruce willis y David Schwimmer en friends" />


                        <h4 className="mb-5 text-xl mt-8"><b>Posterior al 2010</b></h4>
                        <p className="my-2">Un proyecto que el actor tiene programado protagonizar es la adaptación cinematográfica del videojuego <strong>Kane &amp; Lynch: Dead Men</strong>. El <strong>5 de mayo de 2010</strong>, se confirmó la producción de <strong>Die Hard 5</strong>, y <strong>Willis</strong> ha sido considerado para interpretar una vez más al oficial <strong>John McClane</strong>.</p>
                        <img className="my-0 mx-auto" src="/images/mercenarios.jpg" alt="Portada Los Mercenarios 2" title="Portada Los Mercenarios 2" />
                        <p className="my-2">Para el <strong>2012</strong>, <strong>Willis</strong> participó en la continuación de <strong>The Expendables 2</strong>. Anteriormente, <strong>Stallone</strong> había expresado su interés en que <strong>Willis</strong> retome su personaje en la secuela pero en un papel más importante; <strong>Willis</strong> confirmó su participación en la película el <strong>6 de septiembre de 2011</strong>. La cinta fue la más taquillera de las tres, recaudando <strong>311 millones de dólares</strong>.</p>


                        <h2 className="mw-headline text-2xl py-10 text-center"><b>Vida privada</b></h2>
                        <h3 className="mb-5 text-xl mt-5"><b>Matrimonios y familia</b></h3>
                        <p className="my-2"><strong>Bruce Willis</strong> conoció a la actriz <strong>Demi Moore</strong> en el estreno de <strong>"Procedimiento ilegal"</strong> y, aunque <strong>Moore</strong> estaba saliendo con <strong>Emilio Estévez</strong>, <strong>Willis</strong> y <strong>Moore</strong> se casaron el <strong>21 de noviembre de 1987</strong>. Tuvieron tres hijas: <strong>Rumer</strong> (nacida el <strong>16 de agosto de 1988</strong>), <strong>Scout</strong> (nacida el <strong>20 de julio de 1991</strong>) y <strong>Tallulah</strong> (nacida el <strong>3 de febrero de 1994</strong>). La pareja se divorció el <strong>18 de octubre de 2000</strong> sin dar razones públicas. <strong>Willis</strong> expresó sentirse fracasado como padre y esposo, y agradeció a <strong>Will Smith</strong> por su apoyo. A pesar de los rumores de una reconciliación, <strong>Moore</strong> se casó con <strong>Ashton Kutcher</strong>. <strong>Willis</strong> mantuvo una relación cercana con ambos y compartió la custodia de sus hijas con <strong>Moore</strong>, considerando a <strong>Kutcher</strong> parte de su "familia extendida".</p>
                        <button className='btn btn-xs' id='btnVisMatrimonio' onClick={handleVisibleMatrimonio}>Leer más...</button>

                        <div id='visMatrimonio' className='oculto'>
                            <p className="my-2">Tras el divorcio, <strong>Willis</strong> tuvo relaciones con modelos como <strong>María Bravo Rosado</strong> y <strong>Emily Sandberg</strong>, y se comprometió con <strong>Brooke Burns</strong>, terminando en <strong>2004</strong>. El <strong>21 de marzo de 2009</strong>, <strong>Willis</strong> se casó con <strong>Emma Heming</strong> en las <strong>Islas Turcas y Caicos</strong>, repitiendo la ceremonia en <strong>Beverly Hills</strong> para legalizarla. Tuvieron dos hijas: <strong>Mabel Ray</strong> (nacida en <strong>2012</strong>) y <strong>Evelyn Penn</strong> (nacida en <strong>2014</strong>).</p>
                            <p className="my-2">A principios de <strong>2022</strong>, la familia de <strong>Willis</strong>, incluida <strong>Moore</strong>, anunció su retiro debido a un diagnóstico de <strong>afasia</strong>, un trastorno del habla. En <strong>febrero de 2023</strong>, informaron que su condición había progresado a <strong>demencia frontotemporal</strong>. En <strong>marzo de 2023</strong>, <strong>Willis</strong> y <strong>Heming</strong> renovaron sus votos matrimoniales.</p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/bruce_demmi.jpg" alt="Bruce willis y Demmi moore" title="Bruce willis y Demmi moore" />


                        <h3 className="mb-5 text-xl mt-5"><b>Religión</b></h3>
                        <p className="my-2">En algún momento, el actor fue <strong>luterano</strong> (perteneció específicamente a la <strong>Iglesia luterana Sínodo de Misuri</strong>), aunque dejó de practicar dicha religión después de declarar lo siguiente en una entrevista realizada para la revista estadounidense <strong>George</strong>, en julio de <strong>1998</strong>:</p>
                        <blockquote className="flexquote">
                            <div className="flex">
                                <div className="quote">Las religiones organizadas son, en mi opinión general, vertientes moribundas [...] Todas eran más importantes cuando no sabíamos por qué se movía el Sol, por qué cambiaba el clima, por qué ocurrían los huracanes o qué generaba los volcanes [...] La religión contemporánea es el sendero final de la mitología moderna. Aunque hay gente que interpreta la <strong>Biblia</strong> literalmente. ¡Literalmente! Elijo no creer de esa manera. Y eso es lo que hace a <strong>Estados Unidos</strong> tan interesante, ¿te das cuenta?</div>
                            </div>
                            <div className="cite mt-1"><strong>Bruce Willis</strong>​</div>
                        </blockquote>
                        <img className="my-0 mx-auto" src="/images/iglesia.jpg" alt="Iglesia luterana" title="Iglesia luterana" />

                        <h3 className="mb-5 text-xl mt-5"><b>Intereses empresariales</b></h3>
                        <p className="my-2"><strong>Willis</strong> es arrendatario de un apartamento en la <strong>Torre Trump</strong> (en la ciudad de <strong>Nueva York</strong>), y otro en el complejo departamental <strong>Riverside South</strong> (conocido también como <strong>Trump Place</strong>), además de propietario de un local en <strong>Los Ángeles</strong>, una casa en <strong>Malibú (California)</strong>, un rancho en <strong>Montana</strong>, una casa playera en <strong>Parrot Cay</strong> (una pequeña isla radicada en el conjunto <strong>Turcas y Caicos</strong>) y numerosas propiedades en el centro turístico invernal <strong>Sun Valley (Idaho)</strong>. En <strong>1997</strong>, <strong>Willis</strong> cofundó la compañía teatral <strong>Company of Fools</strong>, una empresa sin ánimos de lucro radicada en <strong>Idaho</strong>.</p>
                        <img className="my-0 mx-auto" src="/images/empresa.jpg" alt="Logo cheyenne enterprise" title="Logo Cheyenne enterprise" />
                        <p className="my-2">De igual forma, posee su propia compañía productora de filmes denominada <strong>Cheyenne Enterprises</strong>, fundada en <strong>2000</strong> junto a su socio <strong>Arnold Rifkin</strong>. De manera similar cofundó, en <strong>Los Ángeles</strong>, la productora <strong>Willis Brothers Films</strong> con su hermano <strong>David Willis</strong> y el empresario <strong>Stephen Eads</strong>. Es dueño de varios negocios pequeños en <strong>Hailey, Idaho</strong>, incluyendo <strong>The Mint Bar</strong> y <strong>The Liberty Theater</strong>, siendo cofundador de <strong>Planet Hollywood</strong> junto con los actores <strong>Arnold Schwarzenegger</strong> y <strong>Sylvester Stallone</strong>. En <strong>2009</strong> firmó un contrato para convertirse en el rostro internacional del vodka <strong>Sobieski</strong>, de la empresa <strong>Belvedere SA</strong>, a cambio de un <strong>3,3% de sus acciones</strong>.</p>


                        <h3 className="mb-5 text-xl mt-5"><b>Ideología política</b></h3>
                        <p className="my-2">En <strong>1988</strong>, <strong>Bruce Willis</strong> y <strong>Demi Moore</strong> apoyaron la candidatura presidencial de <strong>Michael Dukakis</strong>. En <strong>1992</strong>, <strong>Willis</strong> respaldó la reelección de <strong>George H. W. Bush</strong> y criticó a <strong>Bill Clinton</strong>. Sin embargo, en <strong>1996</strong>, decidió no apoyar a <strong>Bob Dole</strong> después de que este criticara a <strong>Moore</strong> por su actuación en <strong>"Striptease"</strong>. En <strong>2000</strong>, fue orador en la <strong>Convención Nacional Republicana</strong> y apoyó a <strong>George W. Bush</strong>. Aunque no contribuyó en la campaña presidencial de <strong>2008</strong>, declaró que aún mantenía algunas ideologías republicanas.</p>
                        <button className='btn btn-xs' id='btnVisPolitica' onClick={handleVisiblePolitica}>Leer más...</button>
                        <div id='visPolitica' className='oculto'>
                        <p className="my-2">En <strong>2006</strong>, <strong>Willis</strong> sugirió que <strong>Estados Unidos</strong> debía invadir <strong>Colombia</strong> para acabar con el narcotráfico. Ha expresado su apoyo a mejores salarios para maestros y policías, pero critica el trato del gobierno hacia los nativos americanos. Es un firme defensor del derecho a poseer armas, argumentando que desarmar a los ciudadanos legales solo dejaría armas en manos de criminales. A pesar de ser republicano, <strong>Willis</strong> ha criticado la influencia de la derecha cristiana en el partido y el tamaño del gobierno, abogando por menos intervención y más responsabilidad fiscal.</p>
                        <p className="my-2"><strong>Willis</strong> expresó su descontento con las preguntas políticas en <strong>2006</strong>, declarando que se consideraba apolítico y no necesariamente republicano, sino a favor de un gobierno más pequeño y fiscalmente responsable. En <strong>agosto de 2006</strong>, su nombre apareció en un anuncio en <strong>Los Angeles Times</strong> condenando a <strong>Hamás</strong> y <strong>Hezbolá</strong> y apoyando a <strong>Israel</strong> durante la <strong>Guerra del Líbano</strong></p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/politica.jpg" alt="Bruce willis y George H. W. Bush" title="Bruce willis y George H. W. Bush" />


                        <h3 className="mb-5 text-xl mt-5"><b>Intereses militares</b></h3>
                        <p className="my-2">A lo largo de su carrera, <strong>Bruce Willis</strong> ha interpretado a varios personajes militares en películas como <strong>"The Siege"</strong>, <strong>"Hart's War"</strong>, <strong>"Lágrimas del sol"</strong> y <strong>"Grindhouse"</strong>. Criado en una familia militar, <strong>Willis</strong> ha mostrado su apoyo a las fuerzas armadas estadounidenses en diversas ocasiones. En <strong>2002</strong>, su hija menor, <strong>Tallulah</strong>, sugirió que comprara galletas de chicas escultistas para enviarlas a las tropas, lo que llevó a <strong>Willis</strong> a adquirir <strong>12,000 cajas</strong> de galletas que fueron distribuidas a marinos a bordo del <strong>USS John F. Kennedy</strong> y a tropas en el <strong>Medio Oriente</strong>.</p>
                        <button className='btn btn-xs' id='btnVisMilitar' onClick={handleVisibleMilitar}>Leer más...</button>
                        <div id='visMilitar' className='oculto'>
                        <p className="my-2">En <strong>2003</strong>, <strong>Willis</strong> visitó <strong>Irak</strong> como parte de un recorrido de la organización <strong>USO</strong>, donde cantó para las tropas con su banda <strong>The Accelerators</strong>. Aunque consideró unirse a la milicia para combatir en la segunda guerra de Irak, fue disuadido por su edad (<strong>48 años</strong> en ese momento). En <strong>junio de 2007</strong>, aclaró en la revista <strong>Vanity Fair</strong> que su oferta de <strong>un millón de dólares</strong> a cualquier no combatiente que brindara información útil sobre líderes terroristas como <strong>Osama bin Laden</strong>, <strong>Ayman al-Zawahiri</strong> o <strong>Abu Musab al-Zarqawi</strong> fue una declaración hipotética y no debía tomarse literalmente. <strong>Willis</strong> criticó a los medios por enfocarse en los aspectos negativos de la guerra, señalando que no se informaba lo suficiente sobre los esfuerzos de los soldados para ayudar a la población local.</p>
                        <p className="my-2">En <strong>2005</strong>, expresó su deseo de hacer una película en pro de la guerra que mostrara a los soldados estadounidenses como combatientes valientes que buscan la libertad y la democracia. Este proyecto se centraría en las experiencias del <strong>24° Regimiento de Infantería</strong> en <strong>Mosul</strong>, basándose en los escritos del bloguero <strong>Michael Yon</strong>, un exsoldado de las <strong>Boinas Verdes</strong>. Sin embargo, no se ha realizado ningún anuncio adicional sobre esta producción desde entonces.</p>
                        </div>
                        <img className="my-0 mx-auto" src="/images/armada.jpg" alt="Fuerzas armadas estadounidenses" title="Fuerzas armadas estadounidenses" />
                    </div>
                </main>
            </LayoutHome>
        </>
    );
}
