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
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDown, Menu as MenuIcon } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import EofyHero from './components/EofyHero';

// MobileExpandableMenu must be defined before HomePage
function MobileExpandableMenu({ label, items }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box w="full">
      <Button
        onClick={() => setOpen((v) => !v)}
        rightIcon={<ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />}
        variant="ghost"
        w="full"
        justifyContent="space-between"
        fontWeight="bold"
        color="gray.700"
        py={2}
        px={0}
      >
        {label}
      </Button>
      {open && (
        <VStack align="start" pl={4} spacing={1} mt={1}>
          {items.map((item) => (
            item.subItems ? (
              <Box key={item.label} w="full">
                <Text fontWeight="semibold" color="gray.600" mt={2}>{item.label}</Text>
                <VStack align="start" pl={4} spacing={1}>
                  {item.subItems.map((sub) => (
                    <Link key={sub} color="gray.700" py={1}>{sub}</Link>
                  ))}
                </VStack>
              </Box>
            ) : (
              <Link key={item.label} color="gray.700" py={1}>{item.label}</Link>
            )
          ))}
        </VStack>
      )}
    </Box>
  );
}

// Move ExpandableSofasMenu above HomePage so it's defined before use
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

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Top Nav */}
      <Flex justify="space-between" align="center" px={{ base: 4, md: 8 }} py={4} bg="white" boxShadow="sm">
        <Image src="/ctr-home-logo.png" alt="CTR Home Logo" h={{ base: '28px', md: '50px' }} />
        {/* Hamburger for mobile */}
        <IconButton
          ref={btnRef}
          aria-label="Open menu"
          icon={<MenuIcon size={24} />}
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          as="button"
          zIndex={10}
        />
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
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              {/* Sofas & Armchairs Dropdown */}
              <MobileExpandableMenu label="Sofas & Armchairs" items={[
                { label: 'Sofas', subItems: [
                  'Three Seater Sofas',
                  'Modular Sofas',
                  'L-Shaped Sofas',
                  'Corner Sofas',
                  'Chesterfield Sofas',
                ] },
                { label: 'Armchairs', subItems: [
                  'Armchairs with Ottoman',
                  'Lounge Chairs',
                  'Rocking Chairs',
                  'Outdoor Armchairs',
                ] },
              ]} />
              {/* Living Room Dropdown */}
              <MobileExpandableMenu label="Living Room" items={[
                { label: 'Homewares' }
              ]} />
              {/* Other nav items */}
              {['Dining Room', 'Bedroom', 'Rugs & Accessories'].map((item) => (
                <Link key={item} fontWeight="medium" color="gray.700" w="full" py={2}>
                  {item}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
