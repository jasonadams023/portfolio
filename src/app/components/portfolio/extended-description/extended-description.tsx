import React from 'react';

interface ExtendedDescriptionProps {
  longDescription: string;
  link: string;
}

export default function ExtendedDescription({ longDescription, link }: ExtendedDescriptionProps) {
  return (
    <div>
      <p>{longDescription}</p>
      <a href={link}>GitHub</a>
    </div>
  )
}
