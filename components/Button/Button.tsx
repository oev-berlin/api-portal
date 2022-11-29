import React from 'react';
import Link from 'next/link';
import ButtonProps from './interfaces';
import { BackButton } from './styles';

export const Button = ({ text }:ButtonProps) => (
  <Link href="/">
    <BackButton variant="contained"> { text } </BackButton>
  </Link>
);
