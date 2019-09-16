import React from 'react'

import MailchimpSubscribe from 'react-mailchimp-subscribe'

import { FullHeightFlexContent, PageSubtitle } from "./rebass"
import MailingListForm from "./MailingListForm"

const url = "https://ten-forward.us19.list-manage.com/subscribe/post?u=1eff7db017d8a9a0f3bc2f547&amp;id=08a107d735";

const NewsletterSignup = (data) => (<FullHeightFlexContent flexDirection='column' alignItems='center' width={[5/7, 1/2, 1/4]}>

    <PageSubtitle color='black'>{data.cta}</PageSubtitle>

    <MailchimpSubscribe url={url}
                        render={({subscribe, status, message}) => (
                            <MailingListForm
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                            />
                        )}/>
</FullHeightFlexContent>)

export default NewsletterSignup
