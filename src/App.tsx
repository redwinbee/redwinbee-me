import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card/Card";
import Layout from "./components/Layout";
import moment from "moment";

export default function App() {
    function getPersonalDescription() {
        const currAge = moment("19970702", "YYYYMMDD").fromNow().substring(0, 2);
        return `Hello, I am a Software Developer currently in the process of obtaining my B.S in Computer Science.
      I am currently ${currAge} years old, and while a lot of my training is in application programming, I am also
      very interested in systems programming. In my spare time you can find me either playing Overwatch or doing school
      work =)`;
    }

    function getEducationDescription() {
        return `I spend a great deal of time learning new material and reinforcing what I already know. Aside from my formal
    education in university, I am also partially self-taught with the help of some of the most popular platforms for 
     learning new skills online such as Udemy, YouTube, and of course, StackOverflow.`;
    }

    function getExperienceDescription() {
        return `I am always looking for new opportunities to grow and improve as developer, and while I currently do not
    have any real world experience, I have built a few projects as part of my degree which will be included at a later
    date. As for my skills, I have learned quite a few frameworks, languages, and design patterns.`;
    }

    function getPgpDescription() {
        return `This is my PGP key that I use to sign git commits with. Funnily enough I don't actually use it for its
    intended purposes which is to verify/encrypt e-mails, but I am sure I am not the minority here.`;
    }

    function getSshDescription() {
        return `I also have an SSH key that I use for authentication in various places`;
    }

    return (
        <>
            <Container>
                <Layout>
                    <div className="col-start-1 row-start-1 col-span-6 row-span-2">
                        <Card
                            title="Edwin Bermudes"
                            subtitle={getPersonalDescription()}
                            phrases={["Edwin Bermudes", "@redwinbee"]}
                        >
                            <a href="https://github.com/redwinbee" className="text-cyan-300">
                                @GitHub
                            </a>
                        </Card>
                    </div>
                    <div className="col-start-1 row-start-3 col-span-3 row-span-5">
                        <Card
                            title="Education"
                            subtitle={getEducationDescription()}
                            phrases={["Education", "Training"]}
                        >
                            <div>
                                <h1 className="text-xl font-medium text-cyan-600">
                                    Suffolk County CC
                                </h1>
                                <ul className="text-neutral-300">
                                    <li>&#x2022; Major: Computer Science</li>
                                    <li>&#x2022; Degree: A.S</li>
                                    <li>&#x2022; GPA: 3.8</li>
                                    <li></li>
                                </ul>
                                <ul className="text-neutral-300"></ul>
                            </div>
                            <div>
                                <h1 className="text-xl font-medium text-cyan-600">
                                    Queens College
                                </h1>
                                <ul className="text-neutral-300">
                                    <li>&#x2022; Major: Computer Science</li>
                                    <li>&#x2022; Degree: B.S</li>
                                    <li>&#x2022; GPA: TBA</li>
                                    <li></li>
                                </ul>
                                <ul className="text-neutral-300"></ul>
                            </div>
                        </Card>
                    </div>
                    <div className="col-start-4 row-start-3 col-span-3 row-span-5">
                        <Card
                            title="Experience"
                            subtitle={getExperienceDescription()}
                            phrases={["Experience", "Skills"]}
                        >
                            <div>
                                <h1 className="text-xl font-medium text-cyan-600">Languages</h1>
                                <ul className="text-neutral-300">
                                    <li>&#x2022; Java</li>
                                    <li>&#x2022; JS/TS</li>
                                    <li>&#x2022; Python</li>
                                    <li>&#x2022; Rust</li>
                                </ul>
                                <ul className="text-neutral-300"></ul>
                            </div>
                            <div>
                                <h1 className="text-xl font-medium text-cyan-600">
                                    Frameworks
                                </h1>
                                <ul className="text-neutral-300">
                                    <li>&#x2022; JavaFX</li>
                                    <li>&#x2022; React</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                    <div className="col-start-1 row-start-8 col-span-3 row-span-5">
                        <Card
                            title="PGP"
                            subtitle={getPgpDescription()}
                            phrases={["PGP", "RSA4096"]}
                        >
                            <p className="text-indigo-200">
                                curl https://redwinbee.me/redwinbee_pgp.asc | gpg --import
                            </p>
                        </Card>
                    </div>
                    <div className="col-span-3 row-span-5">
                        <Card
                            title="SSH"
                            subtitle={getSshDescription()}
                            phrases={["SSH", "RSA4096"]}
                        >
                            <p className="text-indigo-200">
                                curl https://redwinbee.me/id_rsa.pub {">"}{">"} ~/.ssh/authorized_keys
                            </p>
                        </Card>
                    </div>
                </Layout>
            </Container>
        </>
    );
}