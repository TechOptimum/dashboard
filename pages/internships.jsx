import { Box, Heading, Flex, Input, InputLeftElement, InputGroup, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import Fonts from "../comps/fonts"

export default function InternshipFinder() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/notion').then((res) => {
      res.json().then((data) => {
        setData(data.response.results)
      })
    });
  }, [])
  return (
    <Box max-width="100vw" min-height="100vh" background="#060E17" py="40" color="#909CEC">
      <Fonts />
      <Flex flexDir="column" justifyContent="center" alignItems="center" height="100%">
        <Heading size="xl" mb="10">Intership Finder</Heading>
        <InputGroup width="min-content">
          <InputLeftElement
            pointerEvents='none'
            children={<AiOutlineSearch color='gray' />}
          />
          <Input py="4" width="400px" placeholder='SEARCH INTERNSHIPS...' border="none" background="#0B0E23"  />
        </InputGroup>
        <Flex mt="10" flexWrap="wrap" justifyContent="center" alignItems="center" width="50%">
          {data && data.map(internship => (
            <Box padding="5" m="2" background="#29368C" borderRadius="15" border="2px" borderColor="#4055DA" width="20vw">
              <Text mb="4" fontSize="2xl" fontWeight="bold">{internship["properties"]["Name"]["title"][0]["text"]["content"]}</Text>
              <Text mb="8" fontWeight="light">{internship["properties"]["Short Description"]["rich_text"][0]["text"]["content"]}</Text>
              <Text>View Internships</Text>
            </Box>
          ))}
          
        </Flex>
      </Flex>
    </Box>
  );
}
