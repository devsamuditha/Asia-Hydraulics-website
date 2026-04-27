
import React from 'react';
import { Settings, Droplets, HardHat, ShieldCheck, Factory, Gauge, Box, Truck, Zap, Construction, Building2 } from 'lucide-react';
import { ServiceCategory, NavItem, SubsidiaryData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#services' },
  { label: 'MANNUCO', href: '#special' },
  { label: 'Contact Us', href: '#contact' },
];

export const SUBSIDIARY_DATA: SubsidiaryData = {
  about: {
    title: "Asia Hydraulics Product Divisions",
    description: "Our product range covers all your hydraulic, industrial, sandblasting, and spray equipment needs.",
    stats: [
      { label: 'Product Divisions', value: '4' },
      { label: 'Brands', value: '10+' },
      { label: 'Expertise', value: '25 Years' }
    ]
  },
  categories: {
    hydraulic: {
      title: 'Hydraulic Hoses',
      description: 'High-quality hydraulic hoses and accessories for all applications.',
      products: [
        // Example items, replace with your real data
        { id: 'h1', name: 'Hydraulic Cylinder', description: 'Heavy-duty cylinder for industrial use.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', specs: ['High Pressure', 'Durable', 'Precision Made'] },
        { id: 'h2', name: 'Hydraulic Hose', description: 'Flexible, high-pressure hose for hydraulic systems.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800', specs: ['Flexible', 'Leak Proof', 'Long Life'] }
      ]
    },
    industrial: {
      title: 'Industrial Tools',
      description: 'Essential tools and equipment for industrial and workshop use.',
      products: [
        { id: 'i1', name: 'Industrial Wrench', description: 'Heavy-duty wrench for industrial applications.', image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800', specs: ['Strong Grip', 'Rust Resistant', 'Precision'] },
        { id: 'i2', name: 'Electric Drill', description: 'Powerful electric drill for all materials.', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=800', specs: ['High Power', 'Ergonomic', 'Reliable'] }
      ]
    },
    sandblasting: {
      title: 'Sand Blasting Equipments',
      description: 'Professional sandblasting equipment for surface preparation.',
      products: [
        { id: 'sb1', name: 'Sandblasting Machine', description: 'Efficient sandblasting machine for industrial cleaning.', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800', specs: ['High Efficiency', 'Easy Operation', 'Durable'] }
      ]
    },
    airless: {
      title: 'AirLess Spray Products',
      description: 'High-performance airless spray equipment for coatings.',
      products: [
        { id: 'a1', name: 'Airless Spray Gun', description: 'Precision spray gun for even coating.', image: 'https://images.unsplash.com/photo-1617155093730-a8bf47be7921?auto=format&fit=crop&q=80&w=800', specs: ['Fine Mist', 'Easy Clean', 'Consistent Output'] }
      ]
    }
  }
};

export const SERVICES_DATA: { [key: string]: ServiceCategory } = {
  hydraulic: {
    title: 'Hydraulic Hoses',
    description: 'High-quality oil-pressure parts for your machines and factory tools.',
    products: [
      {
        id: 'h1',
        name: 'Steel one wire Hoses',
        description: 'Parts used to push and pull heavy loads using oil pressure.',
        image: '/images/One%20%20wire%20Hoses.jpg',
        specs: ['High Strength', 'Good Seals', 'Long Life']
      },
      {
        id: 'h2',
        name: 'Steel two wire Hoses',
        description: 'Pumps that move oil through your machine to make it work.',
        image: '/images/Steel%20%20wire%20Hoses.jpg',
        specs: ['Powerful', 'Low Noise', 'Easy Setup']
      },
      {
        id: 'h3',
        name: 'Steel four wire Hoses',
        description: 'Strong flexible pipes for carrying high-pressure oil.',
        image: '/images/Two%20%20wire%20Hoses.jpg',
        specs: ['No Leaks', 'Very Strong', 'Standard Size']
      },
      {
        id: 'h4',
        name: 'R7 – Thermoplastic Hoses',
        description: 'Switches to control where the oil flows in your machine.',
        image: '/images/Four%20%20wire%20Hoses.jpg',
        specs: ['Easy Move', 'Long Lasting', 'Safe Design']
      },
      {
        id: 'h5',
        name: 'Teflon Hoses',
        description: 'A full box that provides oil pressure for any machine.',
        image: '/images/R6%20%E2%80%93%20oil%20Hoses.jpg',
        specs: ['Compact Box', 'Quiet Run', 'Self Cooling']
      }
    ]
  },
  industrial: {
    title: 'Industrial Hoses',
    description: 'Tough hoses and parts for everyday factory and workshop use.',
    products: [
      {
        id: 'i1',
        name: 'Water/Air  Hoses',
        description: 'Small metal balls that help wheels and machines turn smoothly.',
        image: '/images/Claw%20couplings.jpg',
        specs: ['Smooth Spin', 'High Quality', 'Rust Free']
      },
      {
        id: 'i2',
        name: 'Steam  Hoses'                                                                             ,
        description: 'Professional drills and drivers for heavy working.',
        image: '/images/Water%20Air%20%20Hoses.jpg',
        specs: ['Strong Motor', 'Good Battery', 'Safe Grip']
      },
      {
        id: 'i3',
        name: 'Compressor Hoses',
        description: 'Very strong glue for fixing metal and plastic parts together.',
        image: '/images/Steam%20%20Hoses.jpg',
        specs: ['Fixes Fast', 'Heat Proof', 'Water Proof']
      },
      {
        id: 'i4',
        name: 'Chemical Hoses',
        description: 'Clothing to keep you safe while working at your site.',
        image: '/images/Teflon%20%20Hoses.jpg',
        specs: ['High Visibility', 'Hard Helmet', 'Safety Rated']
      },
      {
        id: 'i5',
        name: 'Stainless steel  Hoses',
        description: 'Strong metal screws to hold big machines together.',
        image: '/images/Chemical%20Hoses.jpg',
        specs: ['Zinc Coated', 'High Strength', 'Standard Sizes']
      },
      {
        id: 'i6',
        name: 'Oil/Fuel and delivery Hoses',
        description: 'Special gloves to protect your hands while working.',
        image: '/images/Stainless%20steel%20%20Hoses.jpg',
        specs: ['Cut Resistant', 'Water Proof', 'Comfort Fit']
      }
    ]
  },
  fittings: {
    title: 'Fittings',
    description: 'High-quality fittings for hydraulic and industrial applications.',
    products: [
      { id: 'fit3', name: 'Ferrules', image: '/images/Ferrules.JPG', specs: ['Stainless', 'Quick Release'], description: 'Easy-to-use quick connector.' },
      { id: 'fit4', name: 'Fittings', image: '/images/Fittings.JPG', specs: ['Steel', 'T-Shape'], description: 'Versatile tee fitting for multiple connections.' },
      { id: 'fit2', name: 'Adaptors', image: '/images/Adaptors.jpg', specs: ['Brass', 'Threaded'], description: 'Reliable pipe coupling for industrial use.' },
      { id: 'fit6', name: 'Jonters', image: '/images/Jointers.JPG', specs: ['Brass', 'Threaded'], description: 'Secure threaded joint for hydraulic systems.' },
      { id: 'fit5', name: 'Flangers', image: '/images/Flangers.JPG', specs: ['Aluminum', 'Size Reduction'], description: 'Reducer fitting for size transitions.' },
      { id: 'fit1', name: 'Claw Couplings', image: '/images/Claw%20couplings.jpg', specs: ['Steel', '45° Angle'], description: 'Durable hydraulic elbow fitting.' },
    ]
  }
};
