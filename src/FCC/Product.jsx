import React from "react";
import CardNumber from "./CardNumber";
export default function Product(){
   
const arrvideos = [
  {
      name: 'Go Pro Hero 8',
      url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdwa1715908%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FADDIV-001%2Fplp-h10b-protective-housing.png&w=750&q=80',
      Price: '99.99$'

  },
  {
      name: 'Go Pro Hero 7',
      url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdwc5a3c37f%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FACCOV-001%2Fplp-max-replacement-protective-lenses.png&w=750&q=80',
      Price: '99.99$'
  },
  {
      name: 'Go Pro Hero 85',
      url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw17e86639%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FADFLT-001%2Fplp-h9b-floaty.png&w=750&q=80',
      Price: '99.99$'
  },
  {
    name: 'Go Pro Hero 8+',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdwb0b476c1%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FAJDIV-001%2Fplp-h8b-protective-housing.png&w=750&q=80',
    Price: '99.99$'
},
{
    name: 'Go Pro Hero ',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw6826cee7%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FAACOV-003%2Fpdp-h7b-protective-lens-replacement-thumbnail-1.png&w=750&q=80',
    Price: '99.99$'
},
{
    name: 'Go Pro Hero Max',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw6bb01145%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FAJFRC-001%2Fplp-h8b-roll-cage-black-fingers.png&w=750&q=80',
    Price: '99.99$'
},
{
    name: 'Go Pro Hero 3',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw7ac4060a%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FASLBM-002%2Fplp-h8b-bite-mount-floaty.png&w=750&q=80',
    Price: '99.99$'

},
{
    name: 'Go Pro Hero 2 Max PRO',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw17e86639%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FADFLT-001%2Fplp-h9b-floaty.png&w=750&q=80',
    Price: '99.99$'

},
{
    name: 'Go Pro Hero 34',
    url: 'https://gopro.com/_next/image?url=https%3A%2F%2Fproduction-na01-gopro.demandware.net%2Fon%2Fdemandware.static%2F-%2FSites-gopro-products%2Fdefault%2Fdw73850437%2Fimages%2FProduct%20Images%2Fmounts%20%26%20accessories%2FAJPTC-001%2Fplp-h8b-tempered-glass-screen-protectors.png&w=750&q=80',
    Price: '99.99$'

}







];
    return(
        <div  style={{backgroundColor:'white'}}>
            <div style={{backgroundColor:'#242424'}}>
            <iframe src="https://open.spotify.com/embed/playlist/6vDGVr652ztNWKZuHvsFvx?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
          <CardNumber  arrvideos={arrvideos} /> {/*Send arr product*/}
        </div>
    )
}