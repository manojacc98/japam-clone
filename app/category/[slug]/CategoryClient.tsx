'use client';

import { useState } from 'react';

export default function CategoryClient({ slug }: { slug: string }) {
  const formattedSlug = slug.replace(/-/g, ' ');

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">{formattedSlug}</h1>

      {/* TODO: Render products related to this category */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Mock example */}
        <div className="p-4 border rounded-md text-center">Product 1</div>
        <div className="p-4 border rounded-md text-center">Product 2</div>
      </div>
    </main>
  );
}
