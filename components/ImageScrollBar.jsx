import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow=()=>{
    const { isFirstItemVisible, scrollPrev }= useContext(VisibilityContext)
    console.log(scrollPrev)
    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1" >
            <Icon
            oncl
            disabled={isFirstItemVisible}
            as={FaArrowAltCircleLeft}
            onClick={()=>scrollPrev()}
            fontSize="2x1"
            cursor="pointer"
            />
        </Flex>
    )
}
const RightArrow=()=>{
    const { isLastItemVisible, scrollNext }= useContext(VisibilityContext)
    return(
        <Flex justifyContent="center" alignItems="center" marginLeft="1" >
            <Icon
            as={FaArrowAltCircleRight}
            disabled={isLastItemVisible}
            onClick={()=>scrollNext()}
            fontSize="2x1"
            cursor="pointer"
            d={['none','none','none','block']}
            />
        </Flex>
    )
}
const ImageScrollBar= ({ data }) =>{
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}}>
            {
                data.map(image=>(
                    <Box width="910px" itemID={image.id} overflow="hidden" p="1" key={image.id} >
                        <Image placeholder="blur" blurDataURL={image.url} src={image.url} width="1000" height="500" alt="property" sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px" />
                    </Box>
                ))
            }
        </ScrollMenu>
    )
}

export default ImageScrollBar;