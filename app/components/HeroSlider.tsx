'use client';

import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: 'hero/nora-7-seater.png',
    title: 'Nora 7 seat',
    subtitle: 'Corner modular. Available in premium fabrics and colours.',
  },
  {
    image: 'hero/hero2.jpg',
    title: 'Los Angeles Sofa',
    subtitle: 'Modern and plush — now available in new textures.',
  },
  {
    image: 'hero/hero3.jpg',
    title: 'Capello Dining',
    subtitle: 'Marble elegance for your dining room.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <Box position="relative" w="full" h={{ base: '300px', md: '500px' }} overflow="hidden">
      <Image
        src={slide.image}
        alt={slide.title}
        objectFit="cover"
        w="full"
        h="full"
        transition="all 0.5s ease-in-out"
      />
      <VStack
        position="absolute"
        bottom={8}
        left={8}
        bg="whiteAlpha.800"
        p={4}
        borderRadius="md"
        align="flex-start"
        gap={2}
      >
        <Text fontWeight="bold" fontSize="lg">{slide.title}</Text>
        <Text fontSize="sm">{slide.subtitle}</Text>
      </VStack>
    </Box>
  );
}
