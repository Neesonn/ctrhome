'use client';

import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'hero/kensington-5-seater.png',
    title: 'Kensington 5 Seater',
    subtitle: 'Corner modular. Available in premium fabrics and colours.',
  },
  {
    image: 'hero/trestle-dining-table.png',
    title: 'Trestle Dining Table',
    subtitle: 'Gather in Style with Heritage-Inspired Design.',
  },
  {
    image: 'hero/sycamore-lounge-4piece.png',
    title: 'Sycamore Lounge 4 Piece',
    subtitle: 'Relaxed luxury with natural timber tones and coastal-inspired comfort..',
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
      {/* Removed left and right arrows */}
      <Image
        src={slide.image}
        alt={slide.title}
        objectFit="cover"
        w="full"
        h="full"
        transition="all 0.5s ease-in-out"
      />
      {/* Navigation Dots */}
      <Box
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        gap={2}
        zIndex={2}
      >
        {slides.map((_, idx) => (
          <Box
            key={idx}
            as="button"
            w={3}
            h={3}
            borderRadius="full"
            bg={idx === current ? 'gray.800' : 'gray.300'}
            border={idx === current ? '2px solid white' : 'none'}
            transition="background 0.2s, border 0.2s"
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </Box>
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
