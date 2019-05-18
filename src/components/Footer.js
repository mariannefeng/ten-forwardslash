import {FlexContent} from "./rebass";
import {Box, Flex, Text, Link} from "rebass";
import React from "react";
import {Root} from "react-static";

function Footer(props) {

    return (
        <FlexContent
            px={2}
            py={2}
            color='darkgray'
            bg='white'
            justifyContent='space-between'>
            <Link href='/credits'><Text p={2} fontWeight='bold'>Credits</Text></Link>
            <Flex>
                <Text p={2} fontWeight='bold'>Insta</Text>
                <Text p={2} fontWeight='bold'>Twitter</Text>
                <Text p={2} fontWeight='bold'>LinkedIn</Text>
            </Flex>
        </FlexContent>
    )
}

export default Footer
