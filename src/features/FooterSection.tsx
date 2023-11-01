import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const myFacebook = "https://www.facebook.com/nurnobi.cse";
const myLinkedin = "https://www.linkedin.com/in/nurnobicse";
const FooterSection = () => {
    return (
        <div className="w-full bg-[#080241] mt-10">
            <footer className="py-6 px-20">
                <ul className="flex gap-5 text-white justify-center">
                    <li><a className="hover:text-orange-400" href="">Terms & Conditions</a></li>
                    <li><a className="hover:text-orange-400" href="">About Us</a></li>
                    <li><a className="hover:text-orange-400" href="">Privacy policy</a></li>
                    <li>|</li>
                    <li className="flex gap-3">Developed By :
                        <a href="">
                            Mr.Nur
                        </a>
                        <p>Reached me : </p>
                        <a href={myFacebook} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </a>
                        <a href={myLinkedin} target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
                        </a>
                    </li>
                </ul>
                <center className="mt-3"><p className="text-white">c@opyright by Mr.Nurnobi Hossain at 2023</p></center>
            </footer>
        </div>
    )
}

export default FooterSection
