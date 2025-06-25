'use client';

import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  VStack,
  HStack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react';
import HeroSlider from './components/HeroSlider';

export default function HomePage() {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Top Nav */}
      <Flex justify="space-between" align="center" px={8} py={4} bg="white" boxShadow="sm">
        <Image src="/ctr-home-logo.png" alt="CTR Home Logo" h="50px" />
        <HStack gap={6} display={{ base: 'none', md: 'flex' }}>
          {['Sofas & Armchairs', 'Living Room', 'Dining Room', 'Bedroom', 'Rugs & Accessories'].map((item) => (
            <HStack key={item} gap={1}>
              <Link fontWeight="medium" color="gray.700">{item}</Link>
              <ChevronDown size={16} />
            </HStack>
          ))}
          <Link fontWeight="bold" color="red.500">Sale</Link>
        </HStack>
      </Flex>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Product Section */}
      <VStack gap={6} py={10} px={{ base: 4, md: 10 }} align="start">
        <Heading size="md" color="gray.700">Pieces we think you'll love</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
          {[
            {
              name: 'Los angeles 6 seat corner terminal',
              material: 'Fabric',
              oldPrice: '$4290',
              newPrice: '$2990',
              image: '/product1.jpg',
            },
            {
              name: 'Capello Dining Table',
              material: 'Natural Marble wrapped in Travertine Film',
              oldPrice: '$2790',
              newPrice: '$2490',
              image: '/product2.jpg',
            },
            {
              name: 'Nora swivel armchair',
              material: 'Fabric',
              oldPrice: '$1390',
              newPrice: '$980',
              image: '/product3.jpg',
            },
          ].map((product, index) => (
            <VStack key={index} gap={2} align="start" bg="white" p={4} borderRadius="md" boxShadow="sm">
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Text fontWeight="semibold">{product.name}</Text>
              <Text fontSize="sm" color="gray.500">{product.material}</Text>
              <HStack gap={2}>
                <Text as="s" color="gray.400">{product.oldPrice}</Text>
                <Text fontWeight="bold">{product.newPrice}</Text>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
