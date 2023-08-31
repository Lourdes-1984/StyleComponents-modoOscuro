import React from 'react'
import { Box,Btn } from '../UI/index.js'
import { lista } from '../../info.js'
import Cards from '../Cards/index.jsx';



const List = () => {
  return  <Box>
     
          { lista.cargos.map((cargo,index) => {
           return   <Cards key={index} cargo={cargo}>
                  
              </Cards>
              
          }) }
           <Btn>Ver más</Btn>
  </Box> 
   
  
}

export default List