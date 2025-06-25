'use client';

import { Box, Image, Text } from '@chakra-ui/react';

export default function EofyHero() {
  return (
    <Box
      position="relative"
      w="full"
      h={{ base: '200px', md: '400px' }}
      my={10}
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
    >
      <Image
        src="/eofy/eofy.png"
        alt="EOFY Sale"
        objectFit="cover"
        w="full"
        h="full"
      />
      {/* Banner Overlay */}
      <Box
        position="absolute"
        top="50%"
        left={{ base: 2, md: 8 }}
        transform="translateY(-50%)"
        bg="whiteAlpha.400"
        p={{ base: 3, md: 6 }}
        borderRadius="md"
        boxShadow="md"
      >
        <Text
          fontWeight="extrabold"
          fontSize={{ base: 'md', md: '2xl' }}
          color="#1a2236"
          letterSpacing="wide"
          textTransform="uppercase"
          lineHeight="1.1"
        >
          CTR Home | EOFY Sale.
        </Text>
        <Box w={{ base: 8, md: 12 }} h="3px" bg="#1a2236" borderRadius="full" mt={2} />
      </Box>
    </Box>
  );
} 