import { useState } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { Container,Arrow,Wrapper,Slide,ImgContainer,InfoContainer,Image,Title,Intro,Description,Button } from "./Styles"
import {SlideItems} from '../Data'


const Slider = () => {
    const [slideIndex,setSlideIndex]= useState(0);
    const handleClick=(direction)=>{
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <KeyboardArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SlideItems.map(item=>(
                <Slide bg={item.bg} key={item.id} >
                <InfoContainer>
                    <Title>{item.title}</Title><br />
                    <Intro>{item.intro}</Intro>
                    <Description>{item.description}</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
            </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
                <KeyboardArrowRight />
            </Arrow>
            
        </Container>
    )
}

export default Slider
