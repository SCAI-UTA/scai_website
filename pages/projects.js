'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';

export default function handler(req, res) {
    const projects = [
      { id: 1, title: 'Project One', description: 'Description of project one', link: 'https://example.com/project-one' },
      { id: 2, title: 'Project Two', description: 'Description of project two', link: 'https://example.com/project-two' },
      // Add more projects here
    ];
  
    res.status(200).json(projects);
  }