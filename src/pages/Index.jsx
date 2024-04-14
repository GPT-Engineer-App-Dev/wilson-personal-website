import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="960px" mx="auto" px={6} py={12}>
        <Heading as="h1" size="2xl">
          Woodrow Wilson
        </Heading>

        <Image src="https://images.unsplash.com/photo-1580128637001-1399bb876889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kcm93JTIwd2lsc29uJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDU3NDU5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Woodrow Wilson portrait" objectFit="cover" w="400px" h="400px" rounded="lg" shadow="md" />

        <Heading as="h2" size="xl" textAlign="center" mt={8} mb={4}>
          Biography
        </Heading>
        <Text fontSize="lg" lineHeight={1.6} textAlign="left">
          Thomas Woodrow Wilson was born on December 28, 1856, in Staunton, Virginia, to a family with strong Presbyterian roots. He graduated from Princeton University in 1879 and later earned a Ph.D. in political science from Johns Hopkins University.
        </Text>
        <Text fontSize="lg" lineHeight={1.6} textAlign="left" mt={4}>
          Before entering politics, Wilson had a distinguished career in academia. He taught at Bryn Mawr College and Wesleyan University before becoming a professor at Princeton in 1890. In 1902, he was appointed president of Princeton, where he implemented several educational reforms.
        </Text>
        <Text fontSize="lg" lineHeight={1.6} textAlign="left" mt={4}>
          Wilson was elected as the 28th president of the United States in 1912. During his two terms, he led the country through World War I, helped establish the League of Nations, and implemented progressive domestic policies such as the Federal Reserve Act and the 19th Amendment, which granted women the right to vote.
        </Text>
        <Text fontSize="lg" lineHeight={1.6} textAlign="left" mt={4}>
          After leaving office in 1921, Wilson retired to his home in Washington, D.C., where he died on February 3, 1924, at the age of 67. He is remembered as a key figure in the Progressive Era and for his leadership during World War I.
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
