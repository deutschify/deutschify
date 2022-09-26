const AboutUs = () => {
    return (
        <div className="md:grid grid-cols-6 ">
            
            <img src="../../../images/aboutUs2.png" alt="image" className="hidden w-9/12 ml-20 md:block md:col-start-1 md:col-end-3 md:row-start-1 mt-36 ml- z-10" />
            <img src="../../../images/aboutUs3.png" alt="image" className=" hidden w-9/12  md:block md:col-start-5 md:col-end-7 md:row-start-2 z-10 md:ml-8" />
            <img src="../../../images/aboutUs1.png" alt="image" className="hidden w-8/12 m-8 md:block md:col-start-1 md:col-end-3 md:row-start-3 z-10" />
            <img src="../../../images/aboutUs4.png" alt="image" className="hidden w-9/12 md:block md:col-start-5 md:col-end-7 md:row-start-3 md:mt-80 z-10" />

            <div className="col-start-2 col-span-4 row-start-1 row-end-4  bg-palette-80  text-palette-60 border-4 border-palette-50 rounded-2xl m-10 flex flex-col items-center">
                <h1 className=" text-center bg-palette-50  mt-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60">
                    Über uns und unserer Webseite
                </h1>
                
                <div className="md:grid grid-col-6">
        
                    <div className="col-start-2 col-end-6 m-10 bg-palette-50  p-6 border-4 border-palette-60 rounded-xl text-palette-60">
                        Wir sind ein Team von vier sehr schlauen Köpfen, die
                        sich in der Ausbildung bei DCI Digital Career Institute
                        gefunden haben und im Rahmen des „Final-Projects“ dieses
                        Projekt ins Leben gerufen haben. Unser Team besteht aus
                        der stylischen, zielorientierten und begnadeten Sali,
                        dem Genie der Webentwicklung und sehr weisem Mezekir.
                        Dem Einstein und begabten Macher Omar und der
                        hartnäckigen, organisierten und problemlösenden Zubia.
                        Unser Motto während der Entwicklungsphase war ausser
                        „Zubia, STOP!! Das reicht!!“, „Geht nicht - Gibts
                        nicht!!!“ Uns war keine Idee unmöglich und kein Promlen
                        unlösbar. Hand in Hand und mit gegenseitiger
                        Unterstützung konnten wir in einer lustigen Umgebung
                        gemeinsam dieses sehr nützliche Werkzeug zum lernen für
                        die DTZ-Prüfung entwickeln.
                    </div>

                    <div className="col-start-1 col-end-5 m-10 bg-palette-50  mt-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60">
                        Die Idee dieser Seite ist es Zuwanderern in Deutschland
                        bei ihrem DTZ (Deutschtest für Zuwanderer) zu helfen.
                        Jeder Zuwanderer in Deutschland muss einen so genannten
                        "Integrationskurs" besuchen. Dieser Kurs gliedert sich
                        in einen "Sprachkurs" und einen "Orientierungskurs". Der
                        allgemeine Integrationskurs umfasst insgesamt 600
                        Unterrichtseinheiten. Im Sprachkurs werden neben der
                        deutschen Rechtschreibung und Grammatik wichtige Aspekte
                        des täglichen Lebens behandelt, wie z.B.:
                        <ul className="list-disc m-6">
                            <li>Arbeit und Beruf,</li>
                            <li>Aus- und Weiterbildung,</li>
                            <li>Kindererziehung und -aufzucht,</li>
                            <li>Einkaufen/Handel/Konsumieren,</li>
                            <li>Freizeit und soziales Miteinander,</li>
                            <li>Gesundheit und Hygiene/Körperpflege,</li>
                            <li>Medien und Mediennutzung sowie Wohnen.</li>
                        </ul>
                        Außerdem lernen sie, Briefe und E-Mails auf Deutsch zu
                        schreiben, Formulare auszufüllen, zu telefonieren und
                        sich auf Stellen zu bewerben. Die Themen sind
                        unterschiedlich, je nachdem, welche Art von Kurs Sie
                        besuchen. Wenn die Zuwanderer z. B. einen
                        Jugendintegrationskurs besuchen, werden Sie sich mit
                        Themen beschäftigen, die für junge Menschen besonders
                        interessant sind, wie z. B. die Bewerbung um einen
                        Ausbildungsplatz. <br />
                        <br />
                        Den Abschluss des Sprachkurses bildet der "Deutsche
                        Sprachtest für Zuwanderer" (DTZ). Im Anschluss an den
                        Sprachkurs besuchen die Zuwanderer den
                        Orientierungskurs. Er umfasst 100 Unterrichtsstunden.
                        Hier werden behandelt man unter anderem folgende Themen
                        <ul className="list-disc m-6">
                            <li>das deutsche Rechtssystem,</li>
                            <li>Geschichte und Kultur,</li>
                            <li>Rechte und Pflichten in Deutschland,</li>
                            <li>Formen des Zusammenlebens,</li>
                            <li>
                                Werte, die in Deutschland wichtig sind, wie z.
                                B. Religionsfreiheit, Toleranz und
                                Gleichberechtigung.
                            </li>
                        </ul>
                        Der Orientierungskurs wird mit dem Test "Leben in
                        Deutschland", der auch relevant für die Einbürgerung
                        ist, abgeschlossen. Unsere Website wird den Zuwanderern
                        helfen, sich auf diesen Test vorzubereiten und die
                        besten Ergebnisse zu erzielen.
                    </div>
                </div>
                <div className="border-4 border-palette-60 bg-palette-50 rounded-xl md:w-9/12 my-10 flex flex-col items-center m-10">
                    <p className="mt-6">Das sind wir</p> {/* zubia */}
                    <div className="bg-palette-80 w-10/12 md:w-9/12 mZ-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60 grid grid-cols-3 items-center">

                       
                        <img
                            src="../../../public/images/imgZubi.png"
                            alt="image"
                            className="w-10/12"
                        />
                        <div className="col-span-2">
                            {" "}
                            <div className="border-b-2 border-palette-60 mb-4">
                                Zubia Rashid
                            </div>
                            <div className="">
                                HTML, CSS, SASS, Tailwind, Javascript, React JS,
                                Node JS, Express JS, MongoDB, Typescript
                            </div>
                        </div>
                    </div>
                    <div className="bg-palette-80 w-10/12 md:w-9/12 mt-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60 grid grid-cols-3 items-center">
                        <img
                            src="../../../public/images/"
                            alt="image"
                            className="w-10/12"
                        />
                        <div className="col-span-2">
                            {" "}
                            <div className="border-b-2 border-palette-60 mb-4">
                 Sali Taymour
                            </div>
                            <div className="">
                                HTML, CSS, Javascript, React JS,
                                Node JS, 
                            </div>
                        </div>
                    </div>
                    <div className="bg-palette-80 w-10/12 md:w-9/12 mt-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60 grid grid-cols-3 items-center">
                        <img
                            src="../../../public/images/"
                            alt="image"
                            className="w-10/12"
                        />
                        <div className="col-span-2">
                            {" "}
                            <div className="border-b-2 border-palette-60 mb-4">
                                Mezekir Abraham Ghebreyesus
                            </div>
                            <div className="">
                                HTML, CSS, SASS, Tailwind, Javascript, React JS,
                                Node JS, Express JS, MongoDB, Typescript
                            </div>
                        </div>
                    </div>
                    <div className="bg-palette-80 w-10/12 md:w-9/12 my-10 p-6 border-4 border-palette-60 rounded-xl text-palette-60 grid grid-cols-3 items-center">
                        <img
                            src="../../../public/images/omar.jpg"
                            alt="image"
                            className="w-9/12"
                        />
                        <div className="col-span-2">
                            {" "}
                            <div className="border-b-2 border-palette-60 mb-4">
                                Omar Rajla Tabaa
                            </div>
                            <div className="">
                                HTML, CSS, SASS, Tailwind, Javascript, react JS,
                                Node JS, Express JS, MongoDB, Typescript
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
