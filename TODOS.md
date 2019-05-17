## Things that still needs to be done 
* Read something about how to redirect our domains to netlify

M * Create footer (link to credits)
M * Contact (swap to using mail to)
M * Homepage
J * About page 
J * Services (first go should just be wide blocks)
J * Donate
 
* Add validation for link button?
* why is netlify slow to save page updates?
* how to create template for collection definition of 'files' type in netlifycms?   

### Done
* Hook up react-static site into netlifycms (just means pull data)
~~* Remove react-bulma-components, and swap to using rebass + styled-components~~
* Hook up react site to bulma 
* make it so that site is configured via config file
* Create template for at least one page
* decide on what to do about bulma + styled components. Styled components really cool but nullifies need for sass. Bulma really neat but hideous if just imported as css file. HOWEVER, pretty slick if we use react-bulma-componets. BUT if we want bulma w/ full customization, will need to override default vars w/ sass...
* Change all anonymous functions to be: 

```
function PAGE_NAME() {

}

export default PAGE_NAME
```

Also, notice no semicolons
