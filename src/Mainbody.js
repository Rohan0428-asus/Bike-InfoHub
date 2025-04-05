import React from "react";
import Bike from "./Bike";

export default function Mainbody() {
    return(
        <div class="middle">
            <Bike 
            link="https://www.bikewale.com/yamaha-bikes/r15/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmHJKQscbULt3LmFp6cVJcbGxKVnfg0cmlQ&s"
            name="Yamaha R15 V4"
            speed="155cc"
            milage="51.4kmpl"
            power="18.1bph"
            />

            <Bike 
            link="https://www.bikewale.com/bmw-bikes/g310-rr/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZThooFm4zx9gSakvS9OIQU507musjqykgEw&s"
            name="BMW G310 RR"
            speed="312.12cc"
            milage="30kmpl"
            power="33.5bph"
            />

            <Bike 
            link="https://www.bikewale.com/kawasaki-bikes/ninja-300/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktAEa-Jg2DTaCKX6Nb52lW1Qlp-cr-6WcCQ&s"
            name="Kawasaki Ninja 300"
            speed="296cc"
            milage="25kmpl"
            power="38.88bph"
            />

            <Bike 
            link="https://www.bikewale.com/aprilia-bikes/rs-457/"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEKtJCxyWFMOWxyz9COCMxhIrCv7xQUOlkw&s"
            name="Aprilla RS 457"
            speed="457cc"
            milage="25kmpl"
            power="46.9bph"
            />
        </div>
    )
}