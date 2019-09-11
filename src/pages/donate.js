import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Flex, Box, Text } from 'rebass'

import { Section, FlexContent, TextNoFirstMarginP, PageTitle } from 'components/rebass';


const DonorBoxEmbed = props =>
    <div>
        <script src='https://donorbox.org/widget.js' paypalExpress='false'/>
        <iframe
            src={'https://donorbox.org/embed/ten-forward'}
            height={'685px'}
            width={'100%'}
            style={{maxWidth: '500px', minWidth: '310px', maxHeight: 'none !important'}}
            seamless={'seamless'}
            name={'donorbox'}
            frameBorder={'0'}
            scrolling={'no'}
            allowpaymentrequest />
    </div>


function Donate() {
    const { data } = useRouteData()

    return (
        <Section bg='lessbrightblue'>
            <FlexContent color='white' flexDirection='column' mt={3}>
                <PageTitle fontSize={[5,6]} textAlign='center'>{data.title}</PageTitle>
                <Flex flexWrap='wrap' justifyContent='space-around'>
                    <Flex  width={[1, 0.45]} p={2} flexDirection='column' justifyContent='space-between'>
                        <TextNoFirstMarginP pt={3} pb={[2, 6]} fontSize={3}>
                            <ReactMarkdown source={data.content} />
                        </TextNoFirstMarginP>
                        <Text pb={4} fontSize={2}>
                            <ReactMarkdown source={data.disclaimer} />
                        </Text>
                    </Flex>
                    <Box width={[1,0.45]} p={2}>
                        <DonorBoxEmbed/>
                    </Box>
                </Flex>
            </FlexContent>
        </Section>
    )
}

export default Donate
