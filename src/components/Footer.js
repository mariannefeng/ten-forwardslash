import {FlexContent} from "./rebass";
import {Box, Flex, Text} from "rebass";
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
            <Text p={2} fontWeight='bold'>this is a fooooooter</Text>
            <Flex>
                <Text p={2} fontWeight='bold'>Insta</Text>
                <Text p={2} fontWeight='bold'>Twitter</Text>
                <Text p={2} fontWeight='bold'>LinkedIn</Text>
            </Flex>
        </FlexContent>
    )
}

export default Footer
