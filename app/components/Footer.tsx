import React from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Divider,
  HStack,
  Flex,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const dividerColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Box as="footer" bg={useColorModeValue('gray.50', 'gray.900')} mt={16}>
      <Divider borderColor={dividerColor} />
      <Box maxW="7xl" mx="auto" py={10} px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Resources */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Resources</Text>
            <Link href="#">Leather Guide</Link>
            <Link href="#">Wear & Usage</Link>
            <Link href="#">Care Kit: How-To Series</Link>
            <Link href="#">Cleaning & Care Guidelines</Link>
            <Link href="#">Delivery Information</Link>
            <Link href="#">Accidental Damage Warranty</Link>
            <Link href="#">Warranty Information</Link>
          </VStack>
          {/* Customer Experience */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Customer Experience</Text>
            <Link href="#">Locate A Showroom</Link>
            <Link href="#">FAQs & Support</Link>
          </VStack>
          {/* Our Company */}
          <VStack align="flex-start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Our Company</Text>
            <Link href="#">About Us</Link>
          </VStack>
          {/* Legal & Social */}
          <VStack align="flex-start" spacing={2} w="full">
            <Flex w="full" justify="space-between" align="center">
              <Text fontWeight="bold" fontSize="lg">Legal</Text>
              <HStack spacing={2}>
                <IconButton as="a" href="#" aria-label="Instagram" icon={<Instagram size={18} />} variant="ghost" />
                <IconButton as="a" href="#" aria-label="Facebook" icon={<Facebook size={18} />} variant="ghost" />
                <IconButton as="a" href="#" aria-label="LinkedIn" icon={<Linkedin size={18} />} variant="ghost" />
              </HStack>
            </Flex>
            <Link href="#">Interest Free</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </VStack>
        </SimpleGrid>
      </Box>
      <Divider borderColor={dividerColor} />
      <Box maxW="7xl" mx="auto" py={4} px={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" fontSize="sm" color="gray.500">
          <Text mb={{ base: 2, md: 0 }}>
            Website created by{' '}
            <Link href="https://luckylogic.com.au" isExternal color="blue.500" fontWeight="semibold">
              luckylogic.com.au
            </Link>
          </Text>
          <Text textAlign="center">&copy; {new Date().getFullYear()} CTR Home. All rights reserved.</Text>
          <HStack spacing={4} mt={{ base: 2, md: 0 }}>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
} 