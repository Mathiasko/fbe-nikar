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
      name: 'Veľká konferenčná miestnosť',
      halfDay: '150 €',
      fullDay: '250 €',
      notes: 'Kapacita 50 osôb'
    },
    {
      name: 'Malá školiaca miestnosť',
      halfDay: '80 €',
      fullDay: '140 €',
      notes: 'Kapacita 20 osôb'
    },
    {
      name: 'Zasadacia miestnosť',
      halfDay: '60 €',
      fullDay: '100 €',
      notes: 'Kapacita 12 osôb'
    },
    {
      name: 'VIP miestnosť',
      halfDay: '120 €',
      fullDay: '200 €',
      notes: 'Kapacita 8 osôb, prémiové vybavenie'
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
      name: 'Large Conference Room',
      halfDay: '150 €',
      fullDay: '250 €',
      notes: 'Capacity 50 people'
    },
    {
      name: 'Small Training Room',
      halfDay: '80 €',
      fullDay: '140 €',
      notes: 'Capacity 20 people'
    },
    {
      name: 'Meeting Room',
      halfDay: '60 €',
      fullDay: '100 €',
      notes: 'Capacity 12 people'
    },
    {
      name: 'VIP Room',
      halfDay: '120 €',
      fullDay: '200 €',
      notes: 'Capacity 8 people, premium equipment'
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
