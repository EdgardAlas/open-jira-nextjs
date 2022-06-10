interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero.',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      description:
        'En progreso: Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero.',
      createdAt: Date.now(),
      status: 'in-progress',
    },
    {
      description:
        'Finalizada: Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero.',
      createdAt: Date.now(),
      status: 'finished',
    },
  ],
};
