import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="960px" mx="auto" px={6} py={12}>
        <Heading as="h1" size="2xl">
          Woodrow Wilson
        </Heading>

        <Image src="https://images.unsplash.com/photo-1580128637001-1399bb876889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kcm93JTIwd2lsc29uJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDU3NDU5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Woodrow Wilson portrait" objectFit="cover" w="400px" h="400px" rounded="lg" shadow="md" />

        <Text fontSize="xl" textAlign="center">
          Thomas Woodrow Wilson was the 28th president of the United States, serving from 1913 to 1921. A leader of the Progressive Movement, he served as president of Princeton University and governor of New Jersey before winning the 1912 presidential election. As president, Wilson changed the nation's economic policies and led the United States into World War I in 1917.
        </Text>

        <HStack spacing={8} fontSize="lg">
          <Link href="/">Home</Link>
          <Link href="/biography">Biography</Link>
          <Link href="/presidency">Presidency</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/resources">Resources</Link>
        </HStack>

        <Text as="i">Website created by The Woodrow Wilson Presidential Library</Text>
      </VStack>
    </Box>
  );
};

export default Index;
