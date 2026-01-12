/**
 * Sample Pricing Data
 *
 * Used as fallback when no Google Sheet URL is configured.
 * Structure matches the expected Google Sheet format.
 */

import type { PricingData } from '../lib/sheets';

export const samplePricingData: PricingData = {
  rooms: [
    {
      name: 'Hnedá 101',
      link: '/sk/miestnost/brown-101/',
      size: '1.n.p., 56m²',
      capacity: '12-20 miest',
      price: '290 EUR'
    },
    {
      name: 'Zelená 102',
      link: '/sk/miestnost/green-102/',
      size: '1.n.p., 42m²',
      capacity: '12 miest',
      price: '270 EUR'
    },
    {
      name: 'Žltá 201',
      link: '/sk/miestnost/yellow-201/',
      size: '2.n.p., 56m²',
      capacity: '12-20 miest',
      price: '290 EUR'
    },
    {
      name: 'Modrá 202',
      link: '/sk/miestnost/blue-202/',
      size: '2.n.p., 42m²',
      capacity: '12 miest',
      price: '270 EUR'
    }
  ],
  catering: [
    {
      item: 'Káva, čaj, voda',
      price: '5 €',
      unit: 'na osobu'
    },
    {
      item: 'Coffee break',
      price: '12 €',
      unit: 'na osobu'
    },
    {
      item: 'Obed (3-chodové menu)',
      price: '18 €',
      unit: 'na osobu'
    },
    {
      item: 'Celodenný catering',
      price: '35 €',
      unit: 'na osobu'
    }
  ]
};

// English translations for sample data
export const samplePricingDataEN: PricingData = {
  rooms: [
    {
      name: 'Brown 101',
      link: '/en/room/brown-101/',
      size: '1st floor, 56m²',
      capacity: '12-20 seats',
      price: '290 EUR'
    },
    {
      name: 'Green 102',
      link: '/en/room/green-102/',
      size: '1st floor, 42m²',
      capacity: '12 seats',
      price: '270 EUR'
    },
    {
      name: 'Yellow 201',
      link: '/en/room/yellow-201/',
      size: '2nd floor, 56m²',
      capacity: '12-20 seats',
      price: '290 EUR'
    },
    {
      name: 'Blue 202',
      link: '/en/room/blue-202/',
      size: '2nd floor, 42m²',
      capacity: '12 seats',
      price: '270 EUR'
    }
  ],
  catering: [
    {
      item: 'Coffee, tea, water',
      price: '5 €',
      unit: 'per person'
    },
    {
      item: 'Coffee break',
      price: '12 €',
      unit: 'per person'
    },
    {
      item: 'Lunch (3-course menu)',
      price: '18 €',
      unit: 'per person'
    },
    {
      item: 'All-day catering',
      price: '35 €',
      unit: 'per person'
    }
  ]
};
