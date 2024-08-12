import React from 'react'
import { companies} from "@/data";

const Skills = () => {
  return (
     <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                 
               
                
              </div>
            </React.Fragment>
          ))}
        </div>
  )
}

export default Skills