import React from "react"
import { Link } from "react-router-dom"

import { JumpTitle, Description, Section, ViewAll } from "./../utility/styled"

const Jumbotron = ({ title, viewAll, description, content }) => (
  <Section>
    <JumpTitle>
      { title }
      
      { viewAll.isShow &&
        <ViewAll>
          <Link to={ viewAll.path }>
            Hepsini Göster
          </Link>
        </ViewAll>
      }
    </JumpTitle>

    { description &&
      <Description dangerouslySetInnerHTML={{ __html: description}} />
    }
    
    { content }
  </Section>
)

export default Jumbotron