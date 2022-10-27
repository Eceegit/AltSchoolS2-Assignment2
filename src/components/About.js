import React from 'react'
import NavigationPage from './NavigationPage'

const About = () => {
  // throw new Error("error!!")
  return (
    <div className='aboutPage'>
        <h1>About Us</h1>
        <NavigationPage />
        <h3>This is the About us page</h3>
        <p>In academic writing, readers expect each paragraph to have a sentence or two that captures its main point. They’re often called “topic sentences,” though many writing instructors prefer to call them “key sentences.” There are at least two downsides of the phrase “topic sentence.” First, it makes it seem like the paramount job of that sentence is simply to announce the topic of the paragraph. Second, it makes it seem like the topic sentence must always be a single grammatical sentence. Calling it a “key sentence” reminds us that it expresses the central idea of the paragraph. 
           sometimes a question or a two-sentence construction functions as the key.</p>
        
    </div>
  )
}

export default About