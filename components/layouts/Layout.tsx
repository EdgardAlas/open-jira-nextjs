import { Box } from '@mui/material';
import Head from 'next/head';
import { Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout = ({ title = 'OpenJira', children }: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          padding: '10px 20px',
        }}
      >
        <Navbar />
        <Sidebar />
        {children}
      </Box>
    </Box>
  );
};
