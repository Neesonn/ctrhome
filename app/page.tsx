'use client';

import React, { useState } from 'react';

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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDown } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import EofyHero from './components/EofyHero';

export default function HomePage() {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Top Nav */}
      <Flex justify="space-between" align="center" px={8} py={4} bg="white" boxShadow="sm">
        <Image src="/ctr-home-logo.png" alt="CTR Home Logo" h="50px" />
        <HStack gap={6} ml={8} display={{ base: 'none', md: 'flex' }}>
          {/* Sofas & Armchairs with dropdown */}
          <Menu isLazy>
            <MenuButton
              as={Button}
              variant="ghost"
              fontWeight="medium"
              color="gray.700"
              rightIcon={<ChevronDown size={16} />}
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'gray.100' }}
              px={0}
            >
              Sofas & Armchairs
            </MenuButton>
            <ExpandableSofasMenu />
          </Menu>
          {/* Living Room with Homewares dropdown */}
          <Menu isLazy>
            <MenuButton
              as={Button}
              variant="ghost"
              fontWeight="medium"
              color="gray.700"
              rightIcon={<ChevronDown size={16} />}
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'gray.100' }}
              px={0}
            >
              Living Room
            </MenuButton>
            <MenuList zIndex={20} bg="white" boxShadow="lg" borderRadius="md" py={2}>
              <MenuItem fontWeight="medium" fontSize="md" _hover={{ bg: 'gray.50' }}>
                Homewares
              </MenuItem>
            </MenuList>
          </Menu>
          {/* Other nav items */}
          {["Dining Room", "Bedroom", "Rugs & Accessories"].map((item) => (
            <HStack key={item} gap={1}>
              <Link fontWeight="medium" color="gray.700">
                {item}
              </Link>
              <ChevronDown size={16} />
            </HStack>
          ))}
        </HStack>
        <Box flex="1" />
      </Flex>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Product Section */}
      <VStack gap={6} py={10} px={{ base: 4, md: 10 }} align="start">
        <VStack gap={2} align="start" w="full" mb={4}>
          <Heading
            size="lg"
            color="gray.800"
            fontWeight="extrabold"
            letterSpacing="wide"
            textTransform="uppercase"
            lineHeight="1.1"
          >
            Pieces we think you'll love
          </Heading>
          <Box w={12} h="3px" bg="#1a2236" borderRadius="full" />
          <Text color="gray.500" fontSize="md">
            Handpicked for comfort, style, and value.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} w="full">
          {[
            {
              name: 'Professor Chair Fontana',
              material: 'Top Grain Leather',
              oldPrice: '$4290',
              newPrice: '$2990',
              image: 'trending/professor-chair-fontana.png',
            },
            {
              name: 'Roma 3 Seater',
              material: 'Breezy style for laid-back living',
              oldPrice: '$2790',
              newPrice: '$2490',
              image: 'trending/roma-3-seaters.png',
            },
            {
              name: 'Hollywood Console',
              material: 'Mango Wood',
              oldPrice: '$1390',
              newPrice: '$980',
              image: 'trending/hollywood-console.png',
            },
          ].map((product, index) => (
            <VStack key={index} gap={2} align="start" bg="white" p={4} borderRadius="md" boxShadow="sm">
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Text fontWeight="semibold">{product.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {product.material}
              </Text>
              <HStack gap={2}>
                <Text as="s" color="gray.400">
                  {product.oldPrice}
                </Text>
                <Text fontWeight="bold">{product.newPrice}</Text>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
      <EofyHero />
      <Footer />
    </Box>
  );
}

// Expandable/collapsible Sofas and Armchairs submenu for the dropdown
function ExpandableSofasMenu() {
  const [openSofas, setOpenSofas] = useState(false);
  const [openArmchairs, setOpenArmchairs] = useState(false);

  return (
    <MenuList zIndex={20} bg="white" boxShadow="lg" borderRadius="md" py={2}>
      <MenuItem
        fontWeight="bold"
        fontSize="md"
        color="gray.700"
        _hover={{ bg: 'gray.50' }}
        onClick={() => setOpenSofas((v) => !v)}
        closeOnSelect={false}
      >
        <Flex justify="space-between" align="center" w="full">
          <Text>Sofas</Text>
          <ChevronDown
            size={16}
            style={{
              transform: openSofas ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </Flex>
      </MenuItem>
      {openSofas && (
        <Box pl={6}>
          {[
            'Three Seater Sofas',
            'Modular Sofas',
            'L-Shaped Sofas',
            'Corner Sofas',
            'Chesterfield Sofas',
          ].map((item) => (
            <MenuItem key={item} fontWeight="medium" fontSize="md" _hover={{ bg: 'gray.50' }}>
              {item}
            </MenuItem>
          ))}
        </Box>
      )}
      <MenuItem
        fontWeight="bold"
        fontSize="md"
        color="gray.700"
        _hover={{ bg: 'gray.50' }}
        onClick={() => setOpenArmchairs((v) => !v)}
        closeOnSelect={false}
      >
        <Flex justify="space-between" align="center" w="full">
          <Text>Armchairs</Text>
          <ChevronDown
            size={16}
            style={{
              transform: openArmchairs ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          />
        </Flex>
      </MenuItem>
      {openArmchairs && (
        <Box pl={6}>
          {[
            'Armchairs with Ottoman',
            'Lounge Chairs',
            'Rocking Chairs',
            'Outdoor Armchairs',
          ].map((item) => (
            <MenuItem key={item} fontWeight="medium" fontSize="md" _hover={{ bg: 'gray.50' }}>
              {item}
            </MenuItem>
          ))}
        </Box>
      )}
    </MenuList>
  );
}
