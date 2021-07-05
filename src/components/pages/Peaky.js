import React from 'react'
import './Peaky.css'

function AboutText() {
    return (
        <div className="background">
        <div className="about_text">
            <h1 className="about_caption">About Peaky Blinders</h1>
            <p><b>Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War. The fictional family is loosely based on a real urban youth gang of the same name, who were active in the city from the 1890s to the early 20th century.Peaky Blinders is an epic following of a gangster family of Irish Traveller or Romani origin set in Birmingham, England, in 1919, several months after the end of the First World War in November 1918. The story centres on the Peaky Blinders gang and their ambitious and highly cunning boss Tommy Shelby (Cillian Murphy). The gang comes to the attention of Major Chester Campbell (Sam Neill), a Detective Chief Inspector in the Royal Irish Constabulary (RIC) sent over by Winston Churchill from Belfast, where he had been sent to clean up the city of the Irish Republican Army (IRA), Communists, gangs and common criminals.[4][5] Winston Churchill (played by Andy Nyman in series 1 and Richard McCabe in series 2) charged him with suppressing disorder and uprising in Birmingham and recovering a stolen cache of arms meant to be shipped to Libya.[6][7] The first series concludes on 3 December 1919 – "Black Star Day", the event where the Peaky Blinders plan to take over Billy Kimber's betting pitches at the Worcester Races. </b></p>
            <div className="creator">
               
                {/* eslint-disable-next-line */}
                <a href="https://en.wikipedia.org/wiki/Steven_Knight" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Portrait_of_Steven_Knight_by_Taylor_Rooke%2C_March_5th_2020.jpg" alt='Steven'/></a>
            </div>
            <div className="creator_name">
                <h2 className="creaotor_steven">Steven Knight</h2>
               
            </div>
            <p>Peaky Blinders was created by Steven Knight, directed by Otto Bathurst, and produced by Katie Swinden. The writers are listed as Steven Knight, Stephen Russell and Toby Finlay.[10]</p>
            <p>Steven Knight CBE (born 5 August 1959) is a British screenwriter and film director. Knight wrote the screenplays for the films Closed Circuit, Dirty Pretty Things, and Eastern Promises, and also directed as well as wrote the films Locke and Hummingbird (a.k.a. Redemption).</p>
        </div>
        </div>
    )
}

export default AboutText