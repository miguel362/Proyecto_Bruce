import LayoutHome from '@/Layouts/LayoutHome';

export default function Awards() {

    const handleVisible = () => {
        //ocultar o hacer visible el contenedor
        var element = document.getElementById('premios');
        element.className = element.className === "oculto" ? "visible" : "oculto";

        //cambiar el texto del botón de ver más
        var boton = document.getElementById('btnVisPremios');
        boton.innerHTML = boton.innerHTML === "Leer más..." ? "Leer menos..." : "Leer más...";
    };

    return (
        <LayoutHome>
            <main className=" bg-main h-auto py-10 px-4">
                <div className='w-3/4 my-0 mx-auto'>
                    <h1 className=" bg-slate-700 text-white mb-4 mt-8 mx-8 text-center text-2xl">Galardones y reconocimientos</h1>
                    <figure className="mw-default-size text-center my-5" typeof="mw:File/Thumb"><img className="max-h-full my-0 mx-auto" src="/images/Walk_of_Fame.jpg" alt="paseo de la fama" title="estrella" /><figcaption>Estrella del actor en el Paseo de la Fama de Hollywood.</figcaption></figure>
                    <p className='my-5'><strong>Willis</strong> se ha hecho acreedor a una considerable variedad de <strong>reconocimientos</strong> y <strong>honores</strong> a lo largo de sus trayectorias en la <strong>televisión</strong> y el <strong>cine</strong>. Por su trabajo en la serie televisiva <strong>Luz de luna</strong>, obtuvo un <strong>Emmy</strong> («<strong>Mejor actor principal</strong> en una serie de <strong>drama</strong>») y un <strong>Globo de oro</strong> («<strong>Mejor actuación masculina</strong> en una serie de televisión: <strong>comedia o musical</strong>»), así como varias <strong>nominaciones</strong> adicionales en otras ceremonias.​ Resultó también nominado a otro <strong>Globo de oro</strong> como «<strong>Mejor actor secundario</strong>» por su participación en la película <strong>In Country</strong>.​</p>

                    <button className='btn btn-xs' id='btnVisPremios' onClick={handleVisible}>Leer más...</button>
                    <div id='premios' className='oculto'>
                        <p className='my-5'>Por otra parte, la revista <strong>Maxim</strong> catalogó a sus <strong>escenas de sexo</strong> en <strong>Color of Night</strong> (1994) como las <strong>mejores</strong> de su tipo en toda la <strong>historia del cine</strong>.​ Por su actuación en el thriller <strong>The Sixth Sense</strong> (1999) ganó un premio <strong>Blockbuster Entertainment</strong> («<strong>Actor favorito</strong>: suspense») y un galardón <strong>People's Choice</strong> («<strong>Actor favorito</strong> en un drama»); obtuvo <strong>nominaciones</strong> de igual forma en los premios <strong>Saturn</strong> en la categoría de «<strong>Mejor actor</strong>», así como dos más en la ceremonia de los premios <strong>MTV Movie</strong> como «<strong>Mejor actor</strong>» y «<strong>Mejor dúo en la pantalla grande</strong>». En 1998 recibe el <strong>Premio Razzie</strong> al <strong>peor actor</strong> por <strong>Armageddon</strong> y <strong>Mercury Rising</strong>.</p>
                        <p className='my-5'>En febrero de 2002 fue reconocido con el <strong>premio Hasty Pudding Man of the Year</strong> por parte de la <strong>Harvard's Hasty Pudding Theatricals</strong>. De acuerdo a este organismo, el galardón se les da a aquellos que contribuyen de manera significativa al mundo del <strong>entretenimiento</strong>.​ Ese mismo año fungió como <strong>portavoz nacional</strong> para <strong>Children in Foster Care</strong> como parte de un oficio encargado por el entonces presidente <strong>George W. Bush</strong>.​ Más tarde, vía online, el actor comentó: «Vi en Foster Care una manera de ayudar a mi país en un sistema por el que al brillar un poco de luz se podía beneficiar a los <strong>niños</strong> que estaban, literalmente, bajo la tutela del <strong>Gobierno</strong>».</p>
                        <img className="my-0 mx-auto" src="/images/pudding.jpg" alt="Bruce disfrazado en el premio Hasty Pudding Man of the year" title="Bruce disfrazado en el premio Hasty Pudding Man of the year" />
                        <p className='my-5'>En abril de 2006 fue honrado por el <strong>Gobierno francés</strong> por su contribución a la <strong>industria cinematográfica</strong>, siendo nombrado «<strong>Officier Dans L'ordre Des Arts Et Des Lettres</strong>» (<strong>Oficial en el Orden de las Artes y las Letras</strong>), en una ceremonia llevada a cabo en <strong>París</strong>. El <strong>primer ministro de Francia</strong> dijo al respecto: «Esta es la forma en que Francia rinde tributo a un actor que personifica la <strong>fortaleza</strong> del <strong>cine estadounidense</strong>, el poder de las <strong>emociones</strong> que nos invita a compartir en las pantallas de todo el mundo y las <strong>enérgicas personalidades</strong> de sus ya legendarios personajes».​ El 16 de octubre de ese año fue honrado también con una <strong>estrella</strong> en el <strong>Paseo de la Fama de Hollywood</strong>. Dicho reconocimiento se encuentra específicamente en la dirección <strong>Hollywood Boulevard 6.915</strong>, siendo la estrella número <strong>2.321</strong> otorgada en toda la historia del mismo. En cuanto a ello, Willis dijo: «Solía venir hasta aquí y mirar todas estas <strong>estrellas</strong>, y nunca podía resolver lo que se suponía que debías hacer para obtener una... El tiempo ha transcurrido y ahora que me encuentro haciendo esto; estoy muy emocionado. Me siento emocionado de ser <strong>actor</strong>».</p>

                    </div>


                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">ACCA Awards Awards Circuit Community Awards</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <tbody><tr>
                                <th className=' w-1/4'>Año
                                </th>
                                <th className=' w-1/4'>Categoría
                                </th>
                                <th className=' w-1/4'>Nominación
                                </th>
                                <th className=' w-1/4'>Resultado
                                </th></tr>
                                <tr>
                                    <td>1994
                                    </td>
                                    <td>Best Cast Ensemble
                                    </td>
                                    <td><strong>Pulp Fiction</strong> John Travolta; Samuel L. Jackson; Uma Thurman; Tim Roth; Harvey Keitel; Ving Rhames; Amanda Plummer; <b><u>Bruce Willis</u></b>; Eric Stoltz; Rosanna Arquette
                                    </td>
                                    <td>Ganador
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Independent Spirit Award Film Independent Spirit Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2013
                                </td>
                                <td>Best Supporting Male
                                </td>
                                <td>Bruce Wllis
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Golden Globes Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominados
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>1986
                                </td>
                                <td>Best Performance by an Actor in a Television Series - Musical or Comedy
                                </td>
                                <td>Bruce Willis <strong>Moonlighting</strong>
                                </td>
                                <td>Nominado
                                </td></tr>
                            <tr>
                                <td>1987
                                </td>
                                <td>Best Performance by an Actor in a Television Series - Musical or Comedy
                                </td>
                                <td>Bruce Willis <strong>Moonlighting</strong>
                                </td>
                                <td>Ganador
                                </td></tr>
                            <tr>
                                <td>1988
                                </td>
                                <td>Best Performance by an Actor in a Television Series - Musical or Comedy
                                </td>
                                <td>Bruce Willis <strong>Moonlighting</strong>
                                </td>
                                <td>Nominado
                                </td></tr>
                            <tr>
                                <td>1990
                                </td>
                                <td>Best Performance by an Actor in a Supporting Role in any Motion Picture
                                </td>
                                <td>Bruce Willis​ <strong>In Country</strong>
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Goldene Kamera</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2005
                                </td>
                                <td>Bester Schauspieler International
                                </td>
                                <td>Bruce Willis
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Gold Derby Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2005
                                </td>
                                <td>Ensemble Cast
                                </td>
                                <td><strong>Sin City</strong> Bruce Willis
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Gotham Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2012
                                </td>
                                <td>Best Ensemble Performance
                                </td>
                                <td>Moonrise Kingdom
                                </td>
                                <td>Nominada
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Chlotrudis Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>1995
                                </td>
                                <td>Best Supporting Actor
                                </td>
                                <td>Bruce Willis <strong>Pulp Fiction Nobody's Fool</strong>
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Critics Choice Awards Broadcast Film Critics Association Aritics Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2005
                                </td>
                                <td>Best Acting Ensamble
                                </td>
                                <td>Sin City
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">COFCA Award Central Ohio Film Critics Association</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2013
                                </td>
                                <td>Best Ensemble
                                </td>
                                <td>Moonrise Kingdom
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Primetime Emmy Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominados
                            </th>
                            <th className=' w-1/4'>Cadena
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>1986
                                </td>
                                <td>Outstanding Lead Actor In A Drama Series
                                </td>
                                <td>Bruce Willis <strong>Moonlighting</strong>
                                </td>
                                <td>ABC
                                </td>
                                <td>Nominado
                                </td></tr>
                            <tr>
                                <td>1987
                                </td>
                                <td>Outstanding Lead Actor In A Drama Series
                                </td>
                                <td>Bruce Willis <strong>Moonlighting</strong>
                                </td>
                                <td>ABC
                                </td>
                                <td>Ganador
                                </td></tr>
                            <tr>
                                <td>2000
                                </td>
                                <td>Outstanding Guest Actor In A Comedy Series
                                </td>
                                <td>Bruce Willis <strong>Friends</strong>
                                </td>
                                <td>NBC
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Hasty Pudding Theatricals</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2002
                                </td>
                                <td>Man of the Year
                                </td>
                                <td>Bruce Willis
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">Phoenix Film Critics Society Awards</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2012
                                </td>
                                <td>Best Ensemble Acting
                                </td>
                                <td>Moonrise Kingdom
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">OFTA Television Awrd Online Film & Television Association</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>1997
                                </td>
                                <td>Best Sci-Fi/Fantasy/Horror Actor
                                </td>
                                <td>Bruce Willis <strong>The Fifth Element</strong>
                                </td>
                                <td>Nominado
                                </td></tr>
                            <tr>
                                <td>1999-2000
                                </td>
                                <td>Best Guest Actor in a Comedy Series
                                </td>
                                <td>Bruce Willis <strong>Friends</strong>
                                </td>
                                <td>Ganador
                                </td></tr></tbody></table>
                    <h2 className=" bg-slate-700 text-white mb-4 mt-8 text-center">SLFCA Award St. Louis Film Critics Association</h2>
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <tbody><tr>
                            <th className=' w-1/4'>Año
                            </th>
                            <th className=' w-1/4'>Categoría
                            </th>
                            <th className=' w-1/4'>Nominación
                            </th>
                            <th className=' w-1/4'>Resultado
                            </th></tr>
                            <tr>
                                <td>2012
                                </td>
                                <td>Best Supporting Actor
                                </td>
                                <td><i>Bruce Willis <strong>Moonrise Kingdom</strong></i>
                                </td>
                                <td>Nominado
                                </td></tr></tbody></table>
                </div>
            </main>
        </LayoutHome>
    )
}