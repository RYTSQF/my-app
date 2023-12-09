"use client"
import styles from './page.module.css';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Image from 'next/image'
import Carousel from './carousel';
import axios from 'axios';


function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [apiData, setApiData] = useState('');
  const api_url = 'http//localhost:1337';

  useEffect(() => {
    axios.get('http://localhost:1337/api/articles?populate=image')
      .then(response => {
        const responseData = response.data;
        setApiData(responseData);
      })
      .catch(error => {
        console.error('Gagal mengambil data:', error);
      });
  }, []);

  return (

      /* Navbar */

    <div className={styles.main}>
      
        <>
          <Navbar
            sx= { 'marginTop: -2'}
            color="dark"
            dark
          >
          <NavbarBrand href="https://www.mavs.com/">
          <span style={{ marginRight: '10px', }}>Mavericks ID</span>
              <img
                alt="logo"
                src="https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png"
                style={{
                  height: 40,
                  width: 40
                }}
              />
            </NavbarBrand>
          </Navbar>
        </>

      {/* Navbar End */}

      {/* News */}
            
            <div className={styles.dallasnews}>
            <h2>
          Dallas Mavericks News
        </h2>
        <h3>
          From the last three games, Dallas just won a single hard game againts the Lakers, and lost two other games to the Clippers with the new Big 4 and the Kings.
        </h3>
            </div>

      {/* News End */}

  <Carousel/> 
                
      {/* Content Card */}

      <div className={styles.contentcard}>

        {apiData && apiData.data.map ((result, i) => {
          const imageUrl = result.attributes.image.data.attributes.url;
          console.log(imageUrl)
          return <Card key={i} className={styles.customcard1}>
                <img 
                  src={`http://localhost:1337${imageUrl}`}
                  alt="Picture"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {result.attributes.title}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Dallas Mavericks
                  </CardSubtitle>
                  <CardText>
                  {result.attributes.articles}
                  </CardText>
                  <Button>
                    Here
                  </Button>
                </CardBody>
          </Card>
        })}

        

        {/* <Card className={styles.customcard2}>
              <img
                alt="Sample"
                src="https://i.ytimg.com/vi/5J0ZGwrDFbI/maxresdefault.jpg"
                className={styles.cardimage}
              />
              <CardBody>
                <CardTitle tag="h5">
                  Game Highlights
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Dallas Mavericks
                </CardSubtitle>
                <CardText>
                  All Highlights Game from Dallas Mavericks.
                </CardText>
                <Button href="https://www.youtube.com/channel/UCZywaCS_y9YOSSAC9z3dIeg">
                  Here
                </Button>
              </CardBody>
        </Card>

        <Card className={styles.customcard3}>
              <img
                alt="Sample"
                src="https://scontent.fcgk6-3.fna.fbcdn.net/v/t39.30808-6/399687195_871602114337396_4943232201153197215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH55G51HP9CguNQuxxeJDbJPcXmXV0s9Rc9xeZdXSz1F7TSERLyaI2ssV-E0ZV-gAUvv6b8ImKVS5jmfWob7M8m&_nc_ohc=GEFexPqRLIoAX8e8Cg9&_nc_ht=scontent.fcgk6-3.fna&oh=00_AfAKszRJq78vS7y0tQVjyOEZ9Ir0bPraOwzGPFiZUFdPMA&oe=6567C8B1"
                className={styles.cardimage}
              />
              <CardBody>
                <CardTitle tag="h5">
                  Statistic
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Dallas Mavericks
                </CardSubtitle>
                <CardText>
                  All Statistic from team Dallas Mavericks and Player.
                </CardText>
                <Button href="https://www.nba.com/stats/team/1610612742">
                  Here
                </Button>
              </CardBody>
        </Card>

        <Card className={styles.customcard4}>
              <img
                alt="Sample"
                src="https://imageio.forbes.com/specials-images/imageserve/63e9107bc40854b66ad77e9c/Mavericks-Kings-Basketball/960x0.jpg?format=jpg&width=1440"
                className={styles.cardimage}
              />
              <CardBody>
                <CardTitle tag="h5">
                  Player
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Dallas Mavericks
                </CardSubtitle>
                <CardText>
                  player list of Dallas Mavericks NBA team.
                </CardText>
                <Button href="https://www.mavs.com/team/roster/">
                  Here
                </Button>
              </CardBody>
        </Card> */}
      </div>

      {/* Content Card End */}

    </div>
  );
}

export default Home;