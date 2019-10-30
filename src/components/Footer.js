import { FlexContent, ClickableLink} from "./rebass";
import { Flex, Link, Image } from "rebass";
import React from "react";
import { Root } from "react-static";

function Footer(props) {
    return (
        <FlexContent
            px={2}
            py={2}
            color='darkgray'
            bg='white'
            justifyContent='space-between'
            alignItem='center'>
            <Flex justifyContent='center' flexDirection='row' alignItems='center'>
                <Link href={props.do.url}><Image src={props.do.imgUrl} height={12} pr={2} pl={2}/></Link>
                <ClickableLink href='/credits' style={{fontFamily: "'Ubuntu Mono', monospace", textTransform: "uppercase"}}>Credits</ClickableLink>
            </Flex>
            <Flex>
                {
                    Object.keys(props.social).map(key =>
                        <ClickableLink href={props.social[key].url}
                                       p={2}
                                       fontWeight='bold'
                                       key={key}
                                       target='_blank'>
                            <i className={`fab fa-${props.social[key].faIcon}`}></i>
                        </ClickableLink>

                    )
                }
            </Flex>
        </FlexContent>
    )
}

export default Footer
