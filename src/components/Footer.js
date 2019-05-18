import { FlexContent, ClickableLink} from "./rebass";
import { Box, Flex, Text, Link } from "rebass";
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
            <Flex justifyContent='center' flexDirection='column'>
                <ClickableLink href='/credits'>Credits</ClickableLink>
            </Flex>
            <Flex>
                {props.social.map((c, i) => (
                    <ClickableLink href={c.url}
                                   p={2}
                                   fontWeight='bold'
                                   key={i}
                                   target='_blank'>
                        <i className={`fab fa-${c.faIcon}`}></i>
                    </ClickableLink>
                ))}
            </Flex>
        </FlexContent>
    )
}

export default Footer
