## Things that still needs to be done
~~* Remove react-bulma-components, and swap to using rebass + styled-components~~
* Add validation for link button
* why is netlify slow to save page updates?
* how to create template for collection definition of 'files' type in netlifycms?   
* decide on what to do about bulma + styled components. Styled components really cool but nullifies need for sass. Bulma really neat but hideous if just imported as css file. HOWEVER, pretty slick if we use react-bulma-componets. BUT if we want bulma w/ full customization, will need to override default vars w/ sass...

### Done
* Hook up react-static site into netlifycms (just means pull data)
* Hook up react site to bulma 
* make it so that site is configured via config file
* Create template for at least one page
* Change all anonymous functions to be: 


```
function PAGE_NAME() {

}

export default PAGE_NAME
```

Also, notice no semicolons
