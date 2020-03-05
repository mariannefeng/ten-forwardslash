import { FlexContent, ClickableLinkContainer, ClickableLink } from "./rebass";
import { Flex, Link, Image } from "rebass";
import React from "react";

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
                <Link href={props.do.url}><Image src={props.do.imgUrl} width={28} pr={2} pl={2}/></Link>
                <ClickableLink href='/credits' style={{fontFamily: "'Ubuntu Mono', monospace", textTransform: "uppercase"}}>Credits</ClickableLink>
            </Flex>
            <Flex>
                {
                    Object.keys(props.social).map(key =>
                        <ClickableLinkContainer p={2} key={key}>
                            <a target='_blank' href={props.social[key].url}>
                                <i className={`fab fa-${props.social[key].faIcon}`}></i>
                            </a>
                        </ClickableLinkContainer>

                    )
                }
            </Flex>
        </FlexContent>
    )
}

export default Footer
