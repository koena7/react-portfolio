import React, { useEffect, useRef , useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const [ scrollPosition, setScrollPosition ] = useState(0);
  const [ animateHeader, setAnimateHeader] =useState(false);

  useEffect(()=>{ 
    const handleScroll=()=>{
      const currPosition=window.scrollY;
      if(currPosition>scrollPosition && !animateHeader){
        setAnimateHeader(true);
      }if(currPosition<scrollPosition && animateHeader){
        setAnimateHeader(false)
      }
      setScrollPosition(currPosition)
    }
    window.addEventListener('scroll',handleScroll);
    return(()=>{
      window.removeEventListener('scroll', handleScroll);
    })
  },[animateHeader, scrollPosition])

  const headerStyle={
    transform:`translateY(${animateHeader?"-100%":"0"})`,
    transition: 'transform 0.7s ease-in-out',
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      {...headerStyle}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {socials.map((social) => (
                <Box style={{margin: "0px 15px 0px 15px"}}>
                  <a href={social.url} >
                    <FontAwesomeIcon icon={social.icon} size="2x"/>
                  </a>
                </Box>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contactme-section">contact</a>
              <a href="#projects-section">projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
