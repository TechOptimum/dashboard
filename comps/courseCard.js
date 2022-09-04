import { Box, Badge, Image, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";

function CourseCard({ id, title, description, language }) {
  console.log(title, description, language);
  return (
    <>
      <SimpleGrid columns={1} spacing="70px">
        <Box
          maxW="sm"
          borderWidth="0px"
          borderRadius="xl"
          overflow="hidden"
          m="auto"
          boxShadow="2xl"
          pt="40px"
        >
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="testImage"
            className="cardImage"
          />
          <Box p="10" backgroundColor="#01102a">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="whiteAlpha">
                {language}
              </Badge>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              fontSize="32px"
            >
              {title}
            </Box>
            <Box color="gray.500">{description}</Box>
            <Button colorScheme="orange" variant="outline" mt="20px">
              <Link href={`/reader/${id}`}>Go to course</Link>
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default CourseCard;
